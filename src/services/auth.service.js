import remoteConfig from "../config/remote.config";

const axios = require('axios');

class AuthService{

    static async verify(code){
        try{
            let response = await axios.post(remoteConfig.url + "/api/auth/verify",{code});
            console.log(response);
            return response.data;
        }catch(err){
            console.log(err.response.data);
            return err.response.data;
        }
    }

}

export default AuthService;