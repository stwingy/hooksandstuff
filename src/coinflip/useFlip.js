import {useState} from 'react'
const useFlip =(coinArray)=>{
    const [coinFlip,setCoinFlip] =useState()
    const [nTails,setNtails] = useState(0)
    const [nHeads,setNheads] =useState(0)
    function handleClick(){
        const mat =Math.floor(Math.random()*2)
        setCoinFlip(coinArray[mat])
        mat?setNtails(old=>old+1):setNheads(old=>old+1)
        
        
    }
    return {coinFlip,nTails,nHeads,handleClick}
}
export default useFlip