import React,{useRef,useEffect} from 'react'
import VanillaTilt from 'vanilla-tilt'
import './VanTilt.css'

function Tilt(props){
    const tiltRef = useRef()
    useEffect(()=>{
        const tr=tiltRef.current
VanillaTilt.init(tiltRef.current,{
    max:25,
    speed:400,
    glare:true,
    'max-glare':.5
})
return ()=>tr.vanillaTilt.destroy()
    },[])
    return(
<div ref={tiltRef} className="tilt-root">
    <div className="tilt-child">{props.children}</div>
</div>
    )
    
}
function VanTilt() {
    return (
        <div className = "totally-centered">
         <h2>useRef</h2>
           <Tilt>
           <div className = "totally-centered">Vanilla-tilt</div>
            </Tilt> 
        </div>
    )
}

export default VanTilt
