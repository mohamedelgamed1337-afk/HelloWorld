export default function SignIn () {
  return (
    <div className=" bg-white flex justify-center items-center min-h-screen">
      <div  className="shadow-xl  p-6 bg-gray-300 w-96">
        <label  className="text-3xl font-bold text-gray-800 block mb-6   justify-center item-center flex">Create Account</label>
<label className="block text-semibold text-3xl">Username</label>
<input type="text" placeholder="Username" className=" w-full border rounded p-2 focus:ring-2 ring-blue-400 outline-none mb-2" />
<label  className="block text-semibold text-3xl">Password</label>
<input type="password" placeholder="Password" className=" w-full border rounded p-2 focus:ring-2 ring-blue-400 outline-none mb-2"/>
<label  className="block text-3xl">Confirm Password</label>
<input type="password" placeholder="Confirm Password" className="p-2 w-full border  rounded focus:ring-2 ring-blue-400 outline-none"/>
<label className="text-semibold text-3xl block mt-8">Gender</label>
<select className="w-full p-4 border rounded  focus:outline-none">
  <option value="" className="">Select Gender</option>  
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>
<button className="border rounded w-full mt-4 bg-blue-500 hover:bg-blue-400 p-2 text-white">Sign In</button>
      </div>
    </div>
  )
}