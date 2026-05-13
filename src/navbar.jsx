export default function Navbar() {
    return (
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-md flex justify-between items-center px-8 py-4 z-50">
        <div className="text-white font-bold text-xl tracking-wide">NETRUNFIBER</div>
        <ul className="flex space-x-8 text-gray-300">
          <li>Plans</li><li>Coverage</li><li>Features</li><li>Support</li>
        </ul>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full hover:opacity-90">
          Login
        </button>
      </nav>
    );
  }
  