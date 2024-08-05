import mongoose from "mongoose";

const emailValidator = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const PostSchema = mongoose.Schema({
    id_user: Number,
    username: {
        type: String,
        required: [true, 'El nombre de usuario es obligatorio'],
        unique: true,
        minlength: [3, 'El nombre de usuario debe tener al menos 3 caracteres']},
    email: {
        type:String,
        required: true,
        validate: [emailValidator, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        minlength: [6, 'La contraseña debe tener al menos 6 caracteres'],
    }
});

const Post = mongoose.model('Post',PostSchema);
export default Post;