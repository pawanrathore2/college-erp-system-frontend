import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/home/Home.jsx'
import Login from './components/auth/Login.jsx'
import Register from './components/auth/Register.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
// import store from './app/store.js'

createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  <StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path='/dashboard' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>
  // </Provider>
)
