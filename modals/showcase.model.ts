import { model, models, Schema } from "mongoose";

const showcaseSchema = new Schema({
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

const Showcase = models.Showcase || model("Showcase", showcaseSchema);
export default Showcase;
