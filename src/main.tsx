import './index.scss'

import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App'

createRoot(document.getElementById('root')!).render(
  <HashRouter
    basename="/"
    future={{
      v7_relativeSplatPath: true,
    }}
  >
    <App />
  </HashRouter>,
)
