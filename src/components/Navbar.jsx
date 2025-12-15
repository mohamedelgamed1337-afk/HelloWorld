import { Link } from "react-router-dom";
// test
export default function Navbar() {
  return (
    <div className="flex items-center bg-gray-500 p-4">
      <div className="text-white font-bold">My Project</div>
      <div className="flex flex-1 justify-center items-center gap-4 ">
        <Link to="/" className="text-red-400 hover:text-red-300 border rounded-full hover:bg-white w-15 flex justify-center">Home</Link>
        <Link to="/product" className="text-red-400 hover:text-red-300 border rounded-full hover:bg-white w-20 flex justify-center">Product</Link>
      </div>
        <Link  to="/signin" className="border rounded-full w-20 flex justify-center hover:bg-white bg-green-600">Sign In</Link>
    </div>
  );
}
