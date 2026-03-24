import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function connectBd() {
    console.log("MI URL ES:", process.env.MONGODB_URI); // Si sale undefined, el .env no carga
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGODB_URI!);
}

const productSchema = new mongoose.Schema({
  title: String,
});

// Aquí estaba el error. Ambos deben decir "Product"
const Products = mongoose.models.Product || mongoose.model("Product", productSchema);

export async function GET() {
  await connectBd();
  const products = await Products.find();
  return NextResponse.json(products);
}