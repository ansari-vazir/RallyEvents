import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { events } from '../data/events';

export default function EventDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id));
  const [selectedDate, setSelectedDate] = useState(event.dateOptions[0]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.location}</p>
      <p className="mb-4">{event.description}</p>

      <h3 className="font-semibold mb-2">Who's Joining:</h3>
      <div className="flex -space-x-2 mb-4">
        {event.players.map((p, i) => (
          <img
            key={i}
            src={p.avatar}
            alt={p.name}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        ))}
      </div>

      <h3 className="font-semibold mb-2">Choose a Date/Time:</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {event.dateOptions.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-3 py-2 rounded-xl border ${
              selectedDate === date
                ? 'bg-blue-500 text-white'
                : 'bg-white text-gray-700 border-gray-300'
            }`}
          >
            {date}
          </button>
        ))}
      </div>

      <button
        onClick={() =>
          navigate(`/checkout/${event.id}?date=${encodeURIComponent(selectedDate)}`)
        }
        className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600"
      >
        Join this Event
      </button>
    </div>
  );
}
