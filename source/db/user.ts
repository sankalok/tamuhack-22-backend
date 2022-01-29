import mongoose from './db';

const userSchema = new mongoose.Schema({
    displayName: String,
    user_id: {type : String, unique : true}, 
    password: String,
    subscriptions: [{service_id : {type : String, unique : true}, fee : String, timestamp : Date, subscriptionDate : Date}],
    contacts: [{id : String}]
});

interface subscription extends mongoose.Document{
    service_id : string,
    fee : string,
    timestamp : Date,
    subscriptionDate : Date
}

interface id extends mongoose.Document{
    id : string
}

interface postUser extends mongoose.Document {
    displayName : string,
    user_id : string,
    password : string,
    subscriptions : mongoose.Types.DocumentArray<subscription>
    contacts : mongoose.Types.DocumentArray<id>
};

export default mongoose.model<postUser>('user', userSchema);