import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', rating: '', feedback: '' });

  useEffect(() => {
    const student = (JSON.parse(localStorage.getItem('students')) || []).find(s => s.id === id);
    if (student) setForm(student);
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const updated = students.map(s => (s.id === id ? { ...form, id } : s));
    localStorage.setItem('students', JSON.stringify(updated));
    navigate('/students');
  };

  return (
    <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input name="rating" type="number" value={form.rating} min="1" max="5" onChange={handleChange} className="w-full p-2 border rounded" required />
      <textarea name="feedback" value={form.feedback} onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
    </form>
  );
}
