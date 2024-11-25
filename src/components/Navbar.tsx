export default function Navbar() {
  return (
    <header className="w-full bg-transparent fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span className="text-xl font-semibold">ryno</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#solutions" className="hover:text-blue-400">
              Solutions
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>
        </ul>
        <div className="space-x-4">
          <button className="text-white hover:text-blue-400">Sign In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Create Account
          </button>
        </div>
      </nav>
    </header>
  );
}
