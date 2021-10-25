import { 
    useRef,
    useState,
    useEffect 
} from "react";

import Utils from "../lib/utils/utils";
import appConfig from "../config/app.config";
import AuthService from "../services/auth.service";
import { toast } from "react-toastify";
import {Button} from 'react-bootstrap';

const VerifyPage = (props) => {

    const refs = useRef([]);
    const [code,setCode] = useState([]);

    useEffect(()=>{
        let defaultCode = [...Array(appConfig["codeLength"])].map(()=>"");
        setCode(defaultCode);
    },[])

    const validateCode = () =>{
        let isValid = true;
        for(let i = 0; i <code.length ; i++){
            let num = code[i];
            let isNum = Utils.checkNumbersOnly(num);
            let isNotEmpty = (num!=null && num!=undefined && num!="");
            if(!isNum || !isNotEmpty){
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    const handleSubmit = async () => {
        try{
            let isValid = validateCode();
            if(!isValid){
                toast.error("Please enter the correct code");
                return;
            }

            let codeString = code.join('');

            let response = await AuthService.verify(codeString);
            if(response.success){
                toast.success(response.message);
                props.history.push("success");
            }else{
                toast.error(response.message);
            }
        }catch(err){
            console.log(err);
            toast.error("Sorry, something went wrong");
        }
    }

    const handleClick = (e,index) => {
        let tempCode = [...code];
        tempCode[index] = "";
        refs.current[index].value = "";
        setCode(tempCode);
    }

    // handle Digit change
    const handleDigit = (e,index) =>{

        let value = e.target.value;

        let tempCode = [...code];
        let nextIndex = index;

        for( let i = 0; i < value.length; i++ ) {
            
            let isValid = Utils.checkNumbersOnly(value[i]);
            
            if(!isValid || index+i>(appConfig.codeLength-1)) break;

            tempCode[index + i] = value[i]; 
            nextIndex = nextIndex + 1;
        }

        if( nextIndex < appConfig.codeLength ){
            refs.current[nextIndex].value = "";
            tempCode[nextIndex] = "";
            refs.current[nextIndex].focus();
        }else{
            refs.current[code.length-1].focus();
        }

        setCode(tempCode);

    }

    const addToRefs = (el) => {
        if(el && !refs.current.includes(el)){
            refs.current.push(el);
        }
    }

    return <div className="wrapper align-center ">

        <div className="header">
            VERIFICATION CODE
        </div>

        <div className="flex-container">

            {code.map((value,index)=>{
                return  <input   
                    type="text" 
                    key={index} 
                    value = {value}
                    className="noArrow numEntry flexbox" 
                    onClick={(e)=>handleClick(e,index)}
                    onChange={(e)=>handleDigit(e,index)}
                    ref={addToRefs}
                />
            })}

        </div>

        <div>
            <Button onClick={handleSubmit} className="submitBtn">SUBMIT</Button>
        </div>

    </div>
}

export default VerifyPage;