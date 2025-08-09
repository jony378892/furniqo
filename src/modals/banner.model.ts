import { model, models, Schema } from "mongoose";

const bannerSchema = new Schema({
  title: String,
  Description: String,
  promotion: String,
  image: String,
  link: String,
  price: String,
});

const Banner = models.Banner || model("Banner", bannerSchema);

export default Banner;
