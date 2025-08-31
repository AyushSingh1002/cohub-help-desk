import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Dashboard from '@/pages/Dashboard'
import ResidentsPage from '@/pages/ResidentsPage'

function App() {
  return (
    <>
      <Toaster />
      <HashRouter>
        <nav className="container mx-auto px-4 py-4 flex gap-4">
          <Link to="/dashboard" className="text-sm underline">Dashboard</Link>
          <Link to="/residents" className="text-sm underline">Residents</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/residents" element={<ResidentsPage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
