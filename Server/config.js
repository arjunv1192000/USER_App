import dotenv from "dotenv"
dotenv.config()

export default {

    port:process.env.PORT,
    mongo:{
        uri:process.env.MONGODB_HOST
    },
 ACESS_TOKEN_SCERET:process.env.ACESS_TOKEN_SCERET,
 


}