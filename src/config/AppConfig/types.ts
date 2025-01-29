export type AppConfigType = {
    appName: string
    appVersion: string
    environment: string
    endpoints: {
        stockData: string
    }
    apiKeys: {
        financialModelPrep: string
    }
}
