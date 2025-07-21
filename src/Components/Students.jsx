import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem('students')) || []);
  }, []);

  const handleDelete = id => {
    const filtered = students.filter(s => s.id !== id);
    setStudents(filtered);
    localStorage.setItem('students', JSON.stringify(filtered));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id} className="border-t">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.email}</td>
              <td className="p-2">{s.rating}</td>
              <td className="p-2 space-x-2">
                <Link to={`/students/view/${s.id}`} className="text-blue-500">View</Link>
                <Link to={`/students/edit/${s.id}`} className="text-green-500">Edit</Link>
                <button onClick={() => handleDelete(s.id)} className="text-red-500">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}