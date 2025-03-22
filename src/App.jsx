import { Outlet } from 'react-router'
import './App.css'
import Header from './components/common/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>
    </div>
  )
}

export default App
