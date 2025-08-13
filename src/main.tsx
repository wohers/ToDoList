import { createRoot } from 'react-dom/client'
import '../src/app/styles/index.css'
import App from './app/App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
