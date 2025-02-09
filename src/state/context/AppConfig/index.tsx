import { createContext } from 'react';
import type { AppConfigType } from '@type/AppConfig';
import { appConfig } from '@config/AppConfig';

export const AppConfigContext = createContext<AppConfigType>(appConfig);
