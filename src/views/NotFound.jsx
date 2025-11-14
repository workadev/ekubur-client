import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#725C41] to-[#F4F1DE] text-white px-6">
      {/* Main card */}
      <div className="relative text-center max-w-lg">
        <h1 className="text-9xl font-bold tracking-widest drop-shadow-lg animate-pulse">404</h1>

        <p className="mt-6 text-2xl font-light tracking-wide opacity-90">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-300">
          Sorry, the page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Floating box */}
        <div className="mt-10 p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 animate-floating">
          <p className="text-sm opacity-90">
            But don’t worry — you can always go back home.
          </p>
        </div>

        <Link
          to="/"
          className="inline-block mt-8 px-6 py-3 rounded-xl hover:opacity-90 transition bg-[#A68A64]"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;