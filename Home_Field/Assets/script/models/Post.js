import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    id_user: Number,
    name: String,
    email: String,
    password: String
});

export default mongoose.model('Post',PostSchema);