import './App.css'
import CourseList from './CourseList'

function App(props: {courses: any[]}) {

  return (
    <>
      <CourseList courses={props.courses}/>
    </>
  )
}

export default App