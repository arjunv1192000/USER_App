
const Addmessage=async(message,Id, repositories)=>{
    try {

        const addmessage=await repositories.messageAdd(message,Id)

        return { status: true,addmessage }

    } catch {
        return { message: 'Error getting on adding message', status: false };

    }
}
export default Addmessage;