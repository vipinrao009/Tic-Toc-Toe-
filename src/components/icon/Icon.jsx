import { FaCircle, FaPen, FaTimes } from 'react-icons/fa'
import { VscCircleLarge } from "react-icons/vsc";


function Icon({name}){
    if(name=="circle")
    {
        return <VscCircleLarge/>
    }else if(name=="cross")
    {
        return <FaTimes/>
    }else {
        return <FaPen/>
    }


}

export default Icon