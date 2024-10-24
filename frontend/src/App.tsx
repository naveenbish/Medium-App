import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from "./components/Blogs";
import Home from './components/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<Blogs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}
