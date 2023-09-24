const userRepositoryInt=(repository)=>{

    const userexist=(email)=>repository.userExist(email);
    const create=(email,name,phone)=>repository.create(email,name,phone);
    const addTimestamp=(id)=>repository.addTimestamp(id)
    const messageAdd=(message,Id)=>repository.messageAdd(message,Id)
    const getAllUsers=()=>repository.getAllUsers()
    

    
    return{
        userexist,
        create,
        addTimestamp,
        messageAdd,
        getAllUsers
        
    }
    
 }



 export default userRepositoryInt