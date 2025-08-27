import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LoginPage, DashboardPage } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
