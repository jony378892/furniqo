import { model, models, Schema } from "mongoose";

const blogSchema = new Schema({
  title: String,
  date: String,
  summary: String,
  category: String,
});

const Blog = models.Blog || model("Blog", blogSchema);
export default Blog;
