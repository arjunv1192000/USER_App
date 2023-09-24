import authController from "../../../../Controllers/user/authController.js"
import userRepositoryImp from "../../../Database/Mongodb/repository/user/userRepositoryImp.js"
import userRepositoryInt from "../../../../Application/repository/user/userRepositoryInt.js"
import userServiceInterface from "../../../../Application/Service/user/userServiceInt.js"
import authServiceImp from "../../../Service/user/userServiceImp.js"



const authRouter=(express)=>{
    const router=express.Router()
    const controller=authController(userRepositoryInt,userRepositoryImp,userServiceInterface,authServiceImp)
    

    router.route('/login').post(controller.createuser)
    router.route('/addmessage').post(controller.Addmessages)
    
    

    return router;

}
export default authRouter ;