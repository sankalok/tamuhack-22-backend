import mongoose from './db';

const serviceSchema = new mongoose.Schema({
    name: String,
    logourl: String,
    category: String,
    url: String
});

interface postService extends mongoose.Document {
    name: string,
    logourl: string,
    category: string,
    url: string
};

export default mongoose.model<postService>('service', serviceSchema);