import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <Router>
      <AppRoutes></AppRoutes>
    </Router>
  )
}

export default App
