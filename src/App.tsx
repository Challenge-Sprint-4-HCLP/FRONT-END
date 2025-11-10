import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import AppointmentForm from './pages/AppointmentForm'
import Dashboard from './pages/Dashboard'
import RescheduleCancel from './pages/RescheduleCancel'
import Reminders from './pages/Reminders'
import History from './pages/History'
import UserManagement from './pages/UserManagement'
import FAQ from './pages/FAQ'
import Team from './pages/Team'

interface User {
  cpf: string
  name: string
  lastName: string
  age: number
  doctor: string
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={<Login onLogin={setUser} />} 
        />
        <Route 
          path="/appointment" 
          element={<AppointmentForm user={user} />} 
        />
        <Route 
          path="/dashboard" 
          element={<Dashboard user={user} />} 
        />
        <Route 
          path="/reschedule-cancel" 
          element={<RescheduleCancel user={user} />} 
        />
        <Route 
          path="/reminders" 
          element={<Reminders user={user} />} 
        />
        <Route 
          path="/history" 
          element={<History user={user} />} 
        />
        <Route 
          path="/users" 
          element={<UserManagement />} 
        />
        <Route 
          path="/faq" 
          element={<FAQ />} 
        />
        <Route 
          path="/team" 
          element={<Team />} 
        />
      </Routes>
    </Router>
  )
}

export default App

