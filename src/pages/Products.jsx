import { Link } from "react-router-dom"

import { useEffect, useState } from "react"
export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchproducts() {
        const res = await  fetch("https://dummyjson.com/products?limit=9");
        const data = await res.json();
        setProducts(data.products);
        setLoading(false);
    } 
    fetchproducts();
    }, [])
if (loading) return (<h1>loading...</h1>)
    return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex space-x-2 m-4 m-top-0   ">
        {products.map((p) => (
            <div className="  relative flex border rounded  grid grid-cols-2">
        <div>{<img src={p.thumbnail}  alt={p.title}/>}</div>
        <div>
        <h1 className="mt-10 text-bold font-semibold">{p.title}</h1>
        <div    className="flex justify-between w-30 text-2xl mt-2 ml-10 gap-4">
        <span   className="text-muted line-through text-red-500 opacity-50">{p.price}</span><p  className="text-green-500 inline font-bold">${(p.price * 0.7).toFixed(2)}</p>
        </div>
        <Link className=" flex justify-center items-center ml-5 mt-5 border bg-blue-100 text-black border-black rounded-full w-40 h-10 z-20">Add to card</Link>
                <span   className="text-amber-500 flex justify-center   absolute top-0 left-1/2 -translate-x-1/2 border rounded-full  w-20 z-10">{p.availabilityStatus}</span>
        
        </div>
            </div>
    )
    )
}
    </div>
)
}