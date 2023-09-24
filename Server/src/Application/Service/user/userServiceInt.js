
const userServiceInterface=(repository)=>{


    
    const generateAccessToken = (userId) => repository.generateAccessToken(userId);
    
    const verifyAccessToken=(token)=>repository.verifyAccessToken(token)
    
  
    



    return{
       
        generateAccessToken,
        verifyAccessToken,
       
    }

}
export default userServiceInterface