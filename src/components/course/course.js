import './course.css'
import {useEffect, useState} from 'react'

const Course = props => {
    const course = props.course
    const isRub = props.isRub

    const [isClicked, setIsClicked] = useState(false)

    const formatGrade = (grade) => {
        let grades = grade.split(";")
        if (grades.length === 1)
            return grades[0] + " класс"

        return grades[0] + "-" + grades[grades.length - 1] + " классы"
    }

    useEffect(() => {
        if (!isClicked) {
            return
        }

        document.getElementById(`tryButton${course.courseHash}`)
            .innerText = isRub ? course.price + " рублей" : course.priceBonus + " бонусов"
    }, [isClicked, setIsClicked, isRub])


    return (
        <>
            <div className="course-figure">
                <img style={{maxWidth: '100%'}} src={`./img/coursecovers/${course.courseId}.jpg`} alt={props.subject}/>
            </div>

            <div className="course-info">
                <p className="course-title">
                    {course.subject}
                </p>
                <p className="course-grade">
                    {formatGrade(course.grade)}
                </p>
                <p className="course-genre">
                    {course.genre}
                </p>

                <p className="course-meta">
                    <a href="#">Подробнее</a>
                </p>
                <p className="course-controls">
                    <a onClick={e => {e.preventDefault(); setIsClicked(true)}} className="btn-fluid" id={`tryButton${course.courseHash}`} href="#">Попробовать</a>
                </p>
            </div>

        </>
    )
}

export default Course