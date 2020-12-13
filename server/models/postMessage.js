import mongoose from 'mongoose';

const postScehma = mongoose.Schema({
    title: String,
    message: String,
    creator: String
});

const PostMessage = mongoose.model('blogs', postScehma);

export default PostMessage;