import userdata from '../../Models/user/userModel.js'


const userRepositoryImp = () => {

    const userExist = (email) => userdata.findOne({ email: email });



    const create = (email, name, phone) => {
        const newuser = new userdata({
            email: email,
            name: name,
            phone: phone,
            messages: [],
            timestamps: [],
        });


        return newuser.save();

    };


    const addTimestamp = async (userId) => {
        try {

            const user = await userdata.findById(userId);

            if (user) {

                user.timestamps.push(new Date());

                await user.save();
            }
        } catch (error) {
            console.error('Error recording login timestamp:', error);
        }
    };



   


    const messageAdd = async (userName, message) => {
        console.log(userName,"hai");
        console.log(message,"hello");
        try {
            const user = await userdata.findOne({ name:message });
    
            if (user) {
                const newMessage = {
                    text: userName,
                
                };
    
                user.messages.push(newMessage.text);
    
                await user.save();
            } else {
                console.error('User not found');
            }
        } catch (error) {
            console.error('Error adding message to user:', error);
        }
    };

    const getAllUsers = async () => {
        try {
          const allUsers = await userdata.find({});
          return allUsers;
        } catch (error) {
          console.error('Error getting all users:', error);
          throw error; 
        }
      };
    
    


    return {
        userExist,
        create,
        addTimestamp,
        messageAdd,
        getAllUsers

    }

}
export default userRepositoryImp