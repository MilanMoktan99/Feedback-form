import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', rating: '', feedback: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const newStudent = { ...form, id: Date.now().toString() };
    localStorage.setItem('students', JSON.stringify([...students, newStudent]));
    navigate('/students');
  };

  return (
    <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="rating" type="number" placeholder="Rating (1-5)" min="1" max="5" onChange={handleChange} className="w-full p-2 border rounded" required />
      <textarea name="feedback" placeholder="Your Feedback" onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}