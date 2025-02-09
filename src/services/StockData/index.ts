import { AppConfigType } from '@type/AppConfig';
import type { StockDataResponse } from '@type/StockData';

export async function fetchStockData(
    symbol: string,
    startDate: string,
    endDate: string,
    appConfig: AppConfigType
): Promise<StockDataResponse> {
    const { apiKeys, endpoints } = appConfig;
    const url = `${endpoints.stockData}/${symbol}?apikey=${apiKeys.financialModelPrep}&from=${startDate}&to=${endDate}`;

    const resp = await fetch(url);

    if (!resp.ok) {
        throw new Error(`Failed to fetch stock data.`);
    }

    return resp.json();
}
