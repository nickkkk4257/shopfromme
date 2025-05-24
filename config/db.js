import mongoose from 'mongoose';


let cached = global.mangoose
if (!cached) {
    cached = global.mangoose ={ conn: null, promise: null}
}

async function connectDB() {
    
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            buffercommands:false
        
        }

        cached.promise = mangooose.connect('${process.env.MONGODB_URI}/shopfromme',opts).then(mangoose => {
            return mangoose
        })

    }

    cached.conn = await cached.promise
    return cached.conn
    
}

export default connectDB