import { useState, useEffect } from 'react'
import { useAppConfig } from '@hooks/useAppConfig'
import { fetchStockData } from '@services/StockData'
import type { StockDataResponse } from '@services/StockData/types'

export function useStockData(
    symbol: string,
    startDate: string,
    endDate: string
): {
    data: StockDataResponse | undefined
    loading: boolean
    error: Error | null
} {
    const [data, setData] = useState<StockDataResponse>()
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>(null)
    const appConfig = useAppConfig()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const res = await fetchStockData(
                    symbol,
                    startDate,
                    endDate,
                    appConfig
                )
                setData(res)
            } catch (err) {
                setError(err as Error)
                setData(undefined)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [symbol, startDate, endDate, appConfig])

    return { data, loading, error }
}
