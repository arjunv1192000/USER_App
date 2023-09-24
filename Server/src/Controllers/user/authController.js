import login from "../../Application/Usecase/user/login.js"
import Addmessage from "../../Application/Usecase/user/addmessage.js"

 const authController=(userRepositoryInt,userRepositoryImp,authServiceInterface,authServiceImp)=>{
   
            const dbrepository=userRepositoryInt(userRepositoryImp())
            const authService=authServiceInterface(authServiceImp())
    
        const createuser=(req,res)=>{
             
    
               const{name,email,phone}=req.body

    
            login(name,email, phone,dbrepository,authService).then((response)=>{
                console.log(response,"kiityy");
                res.json(response)
              
            }).catch((err)=>console.log(err))
    
            
        }

        const Addmessages=(req,res)=>{
             
    
            const{message,Id}=req.body

 
         Addmessage(message,Id,dbrepository).then((response)=>{
             console.log(response,"kiityyw222")
             res.json(response)
           
         }).catch((err)=>console.log(err))
 
         
     }
    
       



        return{

            createuser,
            Addmessages
            
        }
    }


 
 export default authController