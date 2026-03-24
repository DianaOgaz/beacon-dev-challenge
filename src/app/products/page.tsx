//"use client"
//import { useEffect, useState } from "react"
import Link from "next/link"

export default async function Page() {

   // const [search, setSearch] = useState("")
    //const [data, setData] = useState("")

   /*useEffect(() => {
        const getRes = async () => {
            const res = await fetch("api/product")
            const result = await res.json()
            setData(result)
        }
        getData();
    },[])*/

const res = await fetch("http://localhost:3000/api/products")
    const products = await res.json()

    /*const filtrados = products.filter((item) =>
        item.titletoLowerCase().includes(search.toLowerCase()))*/
    return (
        <div className="flex justify-center min-h-screen">
            {products.map((p: any) => (
                <Link key={p._id} href={`products/${p._id}`}>
                    <div>
                        <h1>{p.title}</h1>
                        <h1>{p.price}</h1>
                    </div>
                </Link>

            ))}
        </div>
        

    )


}