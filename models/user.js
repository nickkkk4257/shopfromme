import mangoose from "mangoose";

const userSchema = new mangoose.Schema({
    _id:{ type : string, rquired:true},
    name:{ type : string, rquired:true},
    email:{ type : string, rquired:true, unique:true },
    imageUrl :{ type : string, rquired:true},
    cartItems: { type:Object, default: {} }

}, {minimize: false})

const user = mangoose.models.user || mangoose.model('user',userSchema)

export default User