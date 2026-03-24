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

const res = await fetch('/api/products')
    const products = await res.json()

    /*const filtrados = products.filter((item) =>
        item.titletoLowerCase().includes(search.toLowerCase()))*/
    return (
        <div className="flex justify-center min-h-screen bg-white">
            {products.map((p: any) => (
                <Link href={`products/${p.id}`}>
                    <div key={p.id}>
                        <h1>{p.title}</h1>
                        <h1>{p.price}</h1>
                    </div>
                </Link>

            ))}
        </div>
        

    )


}