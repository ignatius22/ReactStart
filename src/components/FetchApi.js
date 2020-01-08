import React,{useState,useEffect} from 'react';


function FetchApi() {
  const [courses,setCourses] = useState([])

  useEffect(()=> {
    fetch('http://localhost:4000/courses')
    .then(res=> res.json())
    .then(data=>console.log(data))
  },[])
  return (
    <div>
     
    < h1>fetch data</h1>
 
  
    </div>
  )
}

export default FetchApi
