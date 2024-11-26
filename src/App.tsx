import { Route, Routes } from 'react-router-dom'

import { AccreditationPage } from './pages/AccreditationPage'
import { MainPage } from './pages/MainPage'
import { StartPage } from './pages/StartPage'

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage />}
      />
      <Route
        path="/start"
        element={<StartPage />}
      />

      <Route
        path="/accreditation"
        element={<AccreditationPage />}
      />
    </Routes>
  )
}
