import { model, models, Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  description: String,
  material: String,
  color: String,
  texture: String,
  price: String,
  reviews: Number,
  rating: Number,
  image: String,
  category: String,
});

const Product = models.Product || model("Product", productSchema);
export default Product;
