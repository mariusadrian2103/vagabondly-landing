export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 p-8 space-y-16 font-sans">
      <header className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">Vagabondly</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Discover the world without breaking the bank. Your next adventure, designed by AI.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold text-lg shadow hover:bg-gray-900 transition">
          Get Early Access
        </button>
      </header>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
          <img src="https://source.unsplash.com/300x200/?budget,travel" alt="budget travel" className="rounded-xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">💸 Budget First</h3>
          <p>Set your travel budget and let our AI do the rest. No surprises.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
          <img src="https://source.unsplash.com/300x200/?ai,planning" alt="ai planning" className="rounded-xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">🧠 Smart Planning</h3>
          <p>We generate your trip: flights, stay, activities — all tailored and optimized.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
          <img src="https://source.unsplash.com/300x200/?explore,world" alt="explore the world" className="rounded-xl mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">🌍 Go Live It</h3>
          <p>Just go. Travel smart, spend less, and experience more.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto text-center space-y-10">
        <h2 className="text-4xl font-extrabold">🧳 Sample Trips</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img src="https://source.unsplash.com/400x250/?rome,italy" alt="Rome" className="rounded-xl mb-4" />
            <h3 className="text-xl font-bold">Rome – €180</h3>
            <p className="text-gray-600">3 days, budget hostel, local food spots, Vatican tips</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img src="https://source.unsplash.com/400x250/?athens,greece" alt="Athens" className="rounded-xl mb-4" />
            <h3 className="text-xl font-bold">Athens – €150</h3>
            <p className="text-gray-600">2 nights, city walk, gyros, ancient sites</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img src="https://source.unsplash.com/400x250/?lisbon,portugal" alt="Lisbon" className="rounded-xl mb-4" />
            <h3 className="text-xl font-bold">Lisbon – €200</h3>
            <p className="text-gray-600">3 nights, tram 28, street food, ocean views</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 text-center rounded-2xl space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Join Our Private Beta</h2>
        <p className="text-lg max-w-2xl mx-auto">Get your own custom AI-generated trip plan before we go public. Limited early access.</p>
        <input type="email" placeholder="you@example.com" className="w-full max-w-md mx-auto px-4 py-3 rounded-lg text-black" />
        <button className="mt-4 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition">
          Join Waitlist
        </button>
      </section>

      <footer className="text-center text-sm text-gray-500 pt-10">
        © 2025 Vagabondly – Plan your next trip like a local, powered by AI ✈️
      </footer>
    </div>
  );
}
