import { useState, useEffect } from 'react'
import { useAppConfig } from '@hooks/useAppConfig'
import { fetchStockData } from '@services/StockData'
import type { StockDataResponse } from '@services/StockData/types'

export function useStockData(
    symbol: string,
    startDate: string,
    endDate: string
): {
    data: StockDataResponse | null
    loading: boolean
    error: Error | null
} {
    const [data, setData] = useState<StockDataResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const appConfig = useAppConfig()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetchStockData(
                    symbol,
                    startDate,
                    endDate,
                    appConfig
                )
                setData(res)
                setError(null)
            } catch (err) {
                setError(err as Error)
                setData(null)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [symbol, startDate, endDate, appConfig])

    return { data, loading, error }
}
