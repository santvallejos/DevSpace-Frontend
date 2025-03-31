import './App.css'
import Layout from './layout'
import AppDashboard from './components/dashboard/app-dashboard'
import MyUnit from './components/unit/my-unit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      {/* Layaout del sidebar */}
      <Layout>
        <Routes>
          <Route path="/" element={<AppDashboard />} />
          <Route path="/unity" element={<MyUnit />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App