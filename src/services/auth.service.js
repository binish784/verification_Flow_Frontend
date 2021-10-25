const axios = require('axios');

class AuthService{

    static async verify(code){
        try{
            let response = await axios.post("http://localhost:8000/api/auth/verify",{code});
            console.log(response);
            return response.data;
        }catch(err){
            console.log(err.response.data);
            return err.response.data;
        }
    }

}

module.exports = AuthService;