import { useNavigate } from 'react-router-dom';

export default function ConfirmationPage() {
  const navigate = useNavigate();

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 You're In!</h1>
      <p className="text-gray-600 mb-6">
        See you on the court! Your booking is confirmed.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600"
      >
        Back to Explore
      </button>
    </div>
  );
}
