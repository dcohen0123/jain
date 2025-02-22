import { useMemo, useRef, useEffect } from 'react';
import HighchartsReact, {
    HighchartsReactRefObject,
} from 'highcharts-react-official';
import Highcharts, { SeriesOptionsType } from 'highcharts';
import dayjs from 'dayjs';
import { notification } from 'antd';
import { useStockData } from '@hooks/useStockData';
import { useStockAttribute } from '@hooks/useStockAttribute';
import { formatDecimal2, formatDecimal0Compact } from '@utils/formatNumber';
import { formatDateMMDDYY } from '@utils/formatDate';
import LoadingOverlay from '@components/LoadingOverlay';
import NoDataOverlay from '@components/NoDataOverlay';
import { useStockSymbol } from '@hooks/useStockSymbol';

const StockChart: React.FC = () => {
    const endDate = dayjs().format('YYYY-MM-DD');
    const startDate = dayjs().subtract(12, 'month').format('YYYY-MM-DD');
    const [selectedAttributes] = useStockAttribute();
    const [symbol] = useStockSymbol();

    const { data, loading, error } = useStockData(symbol, startDate, endDate);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<HighchartsReactRefObject | null>(null);
    const mouseDownRef = useRef<boolean>(false);
    const pointsRef = useRef<{
        start: Highcharts.Point | null;
        end: Highcharts.Point | null;
    }>({
        start: null,
        end: null,
    });

    useEffect(() => {
        if (error) {
            notification.error({
                message: 'Stock Chart Error',
                description: error.message,
            });
        }
    }, [error]);

    useEffect(() => {
        const container = containerRef.current;

        const handleMouseDown = () => {
            mouseDownRef.current = true;
            pointsRef.current.start = null;
            pointsRef.current.end = null;
            const chart = chartRef.current?.chart;
            if (chart?.hoverPoint) {
                pointsRef.current.start = chart.hoverPoint;
            }
        };

        const handleMouseUp = () => {
            mouseDownRef.current = false;
            pointsRef.current.start = null;
            pointsRef.current.end = null;
            const chart = chartRef.current?.chart;
            if (chart?.hoverPoint) {
                chart.tooltip.refresh(chart.hoverPoint);
            }
        };

        container?.addEventListener('mousedown', handleMouseDown);
        container?.addEventListener('mouseup', handleMouseUp);

        return () => {
            container?.removeEventListener('mousedown', handleMouseDown);
            container?.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Process data series
    const seriesData = useMemo(() => {
        return selectedAttributes.map((x) => ({
            data:
                data?.historical
                    ?.slice()
                    ?.reverse()
                    ?.map((item) => {
                        const xValue = item.date;
                        const yValue = item[x?.value as keyof typeof item];
                        return [xValue, yValue];
                    }) ?? [],
            type: 'line',
            name: x.label,
        }));
    }, [data, selectedAttributes]);

    const options: Highcharts.Options = useMemo(() => {
        return {
            chart: {
                zooming: {
                    type: 'x',
                },
                events: {
                    selection(e) {
                        e.preventDefault();
                        return false;
                    },
                },
            },
            legend: {
                enabled: false,
            },
            title: {
                text: `${symbol} (${selectedAttributes?.map((x) => x.label).join(', ')})`,
            },
            xAxis: {
                title: { text: '' },
                categories: seriesData?.[0]?.data?.map((d) => String(d[0])),
                labels: {
                    formatter() {
                        return formatDateMMDDYY(this.value as string);
                    },
                },
            },
            yAxis: {
                title: { text: '' },
                labels: {
                    formatter() {
                        return formatDecimal0Compact(this.value as number);
                    },
                },
            },
            tooltip: {
                useHTML: true,
                formatter() {
                    if (!this.series.data) return;
                    let { start, end } = pointsRef.current;
                    if (start && end) {
                        if (end.x < start.x) {
                            [start, end] = [end, start];
                        }
                        const startDateVal = start.category as string;
                        const endDateVal = end?.category as string;
                        const deltaY =
                            (end?.y as number) - (start?.y as number);
                        return `
                            <div><strong>${formatDateMMDDYY(startDateVal)} - ${formatDateMMDDYY(endDateVal)}</strong></div>
                            <div style="margin-top: 3px;">
                                <span style="color:${this.series.color}">\u25CF</span>
                                ${this.series.name}: <b>${formatDecimal2(deltaY)}</b>
                            </div>
                        `;
                    } else {
                        const date = formatDateMMDDYY(this.category as string);
                        return `
                            <div><strong>${date}</strong></div>
                            <div style="margin-top: 3px;">
                                <span style="color:${this.series.color};">\u25CF</span>
                                ${this.series.name}: <b>${formatDecimal2(this.y as number)}</b>
                            </div>
                        `;
                    }
                },
            },
            plotOptions: {
                series: {
                    point: {
                        events: {
                            mouseOver() {
                                if (!mouseDownRef.current) return;
                                pointsRef.current.end = this;
                            },
                        },
                    },
                },
            },
            series: seriesData as Array<SeriesOptionsType>,
        };
    }, [seriesData, symbol, selectedAttributes]);

    const noData =
        seriesData?.length === 0 ||
        seriesData?.every((x) => x?.data?.length === 0);

    return (
        <div
            ref={containerRef}
            style={{ position: 'relative', width: '100%', height: '100%' }}
        >
            {loading && <LoadingOverlay />}
            {!loading && noData && <NoDataOverlay />}
            <HighchartsReact
                ref={chartRef}
                containerProps={{
                    style: { height: '100%', width: '100%' },
                }}
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
};

export default StockChart;
