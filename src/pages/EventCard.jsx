import { useNavigate } from 'react-router-dom';

export default function EventCard({ event }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-white rounded-2xl shadow-md p-4 mb-4 hover:shadow-xl transition cursor-pointer"
      onClick={() => navigate(`/event/${event.id}`)}
    >
      <p className="text-sm text-blue-600">{event.sport}</p>
      <h2 className="text-lg font-semibold">{event.title}</h2>
      <p className="text-sm text-gray-600">{event.location}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="flex -space-x-2">
          {event.players.map((p, i) => (
            <img
              key={i}
              src={p.avatar}
              alt={p.name}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {event.spotsLeft} spots left
        </span>
      </div>
    </div>
  );
}
