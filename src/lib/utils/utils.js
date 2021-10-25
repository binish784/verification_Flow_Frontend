class Utils{

    // true if string contains only numeric characters
    static checkNumbersOnly(string){
        let reg = new RegExp(/^\d+$/);
        let result = reg.test(string);
        return result;
    }

}

export default Utils;