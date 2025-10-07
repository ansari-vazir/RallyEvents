import { useState } from 'react';
import EventCard from './EventCard';
import { events } from '../data/events';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('All');

  const sportTypes = ['All', ...new Set(events.map((e) => e.sport))];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport =
      selectedSport === 'All' || event.sport === selectedSport;
    return matchesSearch && matchesSport;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-extrabold text-center text-green-950">Welcome to the Rally Events</h1>
      <h1 className="text-2xl font-bold mb-4">Find Your Next Game</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 border rounded-xl"
        />

        <select
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
          className="p-2 border rounded-xl cursor-pointer"
        >
          {sportTypes.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>
      </div>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <p className="text-gray-500 mt-4">No events found.</p>
      )}
    </div>
  );
}
