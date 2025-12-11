import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center bg-gray-500 p-4">
      {/* Left: My Home */}
      <div className="text-white font-bold">My Project</div>

      {/* Middle: Links */}
      <div className="flex flex-1 justify-center items-center gap-4 ">
        <Link to="/" className="text-red-400 hover:text-red-300 border rounded-full hover:bg-white w-15 flex justify-center">Home</Link>
        <Link to="/product" className="text-red-400 hover:text-red-300 border rounded-full hover:bg-white w-20 flex justify-center">Product</Link>
      </div>
    </div>
  );
}
