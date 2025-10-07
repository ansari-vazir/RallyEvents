import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../data/events';

export default function CheckoutPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const query = new URLSearchParams(window.location.search);
  const date = query.get('date');
  const event = events.find((e) => e.id === parseInt(id));

  const handleConfirm = () => {
    setTimeout(() => navigate('/confirmation'), 1000);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Confirm Your Booking</h1>
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <p><strong>Event:</strong> {event.title}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Location:</strong> {event.location}</p>
      </div>
      <button
        onClick={handleConfirm}
        className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600"
      >
        Confirm Booking
      </button>
    </div>
  );
}
