import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Oops! Halaman yang kamu cari tidak ada.</p>
      <Link to={"/"}>
        <button className="bg-sky-500 hover:bg-sky-700 py-2 px-4 text-white rounded-md">
          Kembali ke Beranda
        </button>
      </Link>
    </div>
  );
}

export default NotFound;