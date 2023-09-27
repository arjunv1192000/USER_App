
import jwt from 'jsonwebtoken';
import config from '../../../../config.js';

const authServiceImp=()=>{
    

    const generateAccessToken=(user)=>jwt.sign({user},config.ACESS_TOKEN_SCERET,{expiresIn:'5m'});
    const verifyAccessToken = (token) => jwt.verify(token, config.ACESS_TOKEN_SCERET);
    

    return{
        
        generateAccessToken,
       
        verifyAccessToken,
       
    }

}
export default authServiceImp 