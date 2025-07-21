import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import FeedbackForm from './Components/Feedback';
import Students from './Components/Students';
import View from './Components/View';
import Edit from './Components/Edit';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <nav className="bg-blue-500 text-white p-4 flex gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Home</NavLink>
        <NavLink to="/feedback" className={({ isActive }) => isActive ? 'underline' : ''}>Feedback</NavLink>
        <NavLink to="/students" className={({ isActive }) => isActive ? 'underline' : ''}>Students</NavLink>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/view/:id" element={<View />} />
          <Route path="/students/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </div>
  );
}