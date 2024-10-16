import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from "./components/Blogs";
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* Fallback route for 404 - Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
