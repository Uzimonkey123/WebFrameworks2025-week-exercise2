import Course from "./Course"

function CourseList(props: {courses: any[]}) {
    return (
        <>
            {props.courses.map((course) => (
                <Course name={course.name} 
                        courseId={course.courseId} 
                        studentPositions={course.studentPositions}
                />
            ))}
        </>
    )
}

export default CourseList