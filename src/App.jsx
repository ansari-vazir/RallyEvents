import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExplorePage from './pages/Explore';
import EventDetailsPage from './pages/EventDetails';
import CheckoutPage from './pages/Checkout';
import ConfirmationPage from './pages/Confirmation';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/checkout/:id" element={<CheckoutPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}
