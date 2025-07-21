import { useParams } from 'react-router-dom';

export default function View() {
  const { id } = useParams();
  const student = (JSON.parse(localStorage.getItem('students')) || []).find(s => s.id === id);

  if (!student) return <p>Student not found.</p>;

  return (
    <div className="space-y-2">
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Rating:</strong> {student.rating}</p>
      <p><strong>Feedback:</strong> {student.feedback}</p>
    </div>
  );
}