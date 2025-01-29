import { AppConfigType } from './types'
import packageJson from '../../../package.json'

const env = import.meta.env

export const appConfig: AppConfigType = {
    appName: packageJson.name,
    appVersion: packageJson.version,
    environment: env.VITE_APP_ENV,
    endpoints: {
        stockData: env.VITE_API_URL,
    },
    apiKeys: {
        financialModelPrep: env.VITE_API_KEY,
    },
}
