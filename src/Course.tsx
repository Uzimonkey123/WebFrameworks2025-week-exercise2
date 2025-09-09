function Course(props: {name: string, courseId: string, studentPositions: number}) {
    return (
        <>
            <div className="course">
                <h2>{props.name}</h2>
                <p>{props.courseId}</p>
                <p>Student Positions: {props.studentPositions}</p>
            </div>
        </>
    )
}

export default Course