import './App.css'
import Layout from './layout'
import AppDashboard from './components/app-dashboard'

function App() {
  return (
    <>
    {/* Layaout del sidebar */}
      <Layout>
        <AppDashboard />
      </Layout>
    </>
  )
}

export default App