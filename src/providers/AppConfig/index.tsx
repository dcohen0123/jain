import { appConfig } from '@config/AppConfig';
import { AppConfigContext } from '@state/context/AppConfig';
import { ReactNode, FC } from 'react';

export type AppConfigProviderProps = {
    children: ReactNode;
};

export const AppConfigProvider: FC<AppConfigProviderProps> = ({ children }) => {
    return (
        <AppConfigContext.Provider value={appConfig}>
            {children}
        </AppConfigContext.Provider>
    );
};
