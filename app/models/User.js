import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: String,
    img: String,
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);