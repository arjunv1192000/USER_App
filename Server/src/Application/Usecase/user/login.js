const login = async (email, name, phone, repositories, authService) => {
    try {
      if (name === 'admin' && email === 'admin@admin.com' && phone === '0000000000') {
       
        const allUsers = await repositories.getAllUsers();
        lo
        
      
  
        return {
          status: true,
          allUsers,
        };
      } else {
        const userExists = await repositories.userexist(email);
  
        if (userExists) {
          const isUser = {
            userId: userExists._id,
            userName: userExists.name,
            userEmail: userExists.email,
            userphone: userExists.phone,
            usertime: userExists.timestamps,
            usermessage: userExists.messages,
          };
  
          const accessToken = await authService.generateAccessToken(isUser);
  
          await repositories.addTimestamp(userExists._id);
  
          return {
            status: true,
            isUser,
            accessToken,
          };
        } else {
          const newuser = await repositories.create(email, name, phone);
  
          const isUser = {
            userId: newuser._id,
            userName: newuser.name,
            userEmail: newuser.email,
            userphone: newuser.phone,
            usertime: newuser.timestamps,
            usermessage: newuser.messages,
          };
  
          const accessToken = await authService.generateAccessToken(isUser);
  
          await repositories.addTimestamp(newuser._id);
  
          return {
            status: true,
            isUser,
            accessToken,
          };
        }
      }
    } catch (error) {
      console.error(error);
      return {
        message: 'Authentication failed',
        status: false,
      };
    }
  };
  
  export default login;
  