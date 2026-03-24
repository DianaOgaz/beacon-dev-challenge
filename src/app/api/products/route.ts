
import mongoose from "mongoose"
import {NextResponse} from "next/server"


async function connectBd(){
    if(mongoose.connection.readyState >= 1)
        return
    await mongoose.connect(process.env.MONGODB_URI)
}
const productSchema = new mongoose.Schema({
    title: String 
})

const Products =
mongoose.models.Producto || mongoose.model("Product", productSchema)

export async function GET(){
    await connectBd()
    const products = await Products.find()
    return NextResponse.json(products)
}
