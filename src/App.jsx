import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin/>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
