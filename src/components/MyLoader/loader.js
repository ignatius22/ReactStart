import React,{useState} from 'react';



export default function HeaderComponent(props){
    const loadme = props.loadme
    return (  
        <> 
    {loadme &&    
    <div style={{width:'100%', background:'rgba(0,0,0,0.5)', position:'absolute', right:0, left:0, top:0, bottom:0}}>
       <p style={{color:'white', left:'45%', position:'absolute', top:'50%'}}>{props.content}</p>
    </div>
    }
    </>
        )

}
