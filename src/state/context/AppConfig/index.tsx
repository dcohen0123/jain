import { createContext } from 'react'
import type { AppConfigType } from '@config/AppConfig/types'
import { appConfig } from '@config/AppConfig'

export const AppConfigContext = createContext<AppConfigType>(appConfig)
