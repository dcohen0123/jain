import { AppConfigContext } from '@state/context/AppConfig'
import { useContext } from 'react'

export function useAppConfig() {
    return useContext(AppConfigContext)
}
