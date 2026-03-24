
export default async function Page({Params}:any ) {
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    const product = products.find((p:any) => p.id === Number(Params.id))

    return (
       <div>
       <h1> {product.description}</h1>
       </div>

    )
}