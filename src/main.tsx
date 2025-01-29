import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppConfigProvider } from '@providers/AppConfig/index.tsx'
import App from 'src/App'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppConfigProvider>
            <App />
        </AppConfigProvider>
    </StrictMode>
)
