import React,{useState,useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import MyLoader from './MyLoader/loader'

// custom imports

function FetchApi() {
  const [courses,setCourses] = useState([])
  const [startLoader, changeLoaderState] = useState(true)

  useEffect(()=> {
    // fetch('http://localhost:4000/courses')
    // .then(res=> res.json())
    // .then(data=>setCourses(data.Course))
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(jsonified => setCourses(jsonified))
    changeLoaderState(false)
  },[])

 
  return (
<>
<MyLoader loadme={startLoader} content="loading ig contents"/>
<Container>
  <h1>List of all Post from a dummy api</h1>
<Accordion>
{courses.map(eachCourse=>(
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={eachCourse.id}>
      {eachCourse.title}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={eachCourse.id}>
      <Card.Body>{eachCourse.body}</Card.Body>
    </Accordion.Collapse>
  </Card>
  ))}
</Accordion>
</Container>
     
    {/* <h1>fetch data</h1>
    {courses.map(eachCourse=>(
      <li>{eachCourse.title}</li>
    ))} */}
    </>
  )
}

export default FetchApi
