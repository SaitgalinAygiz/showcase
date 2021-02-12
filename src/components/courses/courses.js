import "./courses.css"
import Course from "../course/course";
import {useState} from 'react'

const Courses = props => {
    const courses = props.courses
    const [isRub, setIsRub] = useState(true)

    return (
        <div className="courses">
            <a
                onClick={e => {e.preventDefault(); setIsRub(!isRub)}}
                className="btn-fluid"
                id={"tryBtn"}
                href={"/"}>
                {isRub ? "Рубли" : "Бонусы"}
            </a>

            <ul className="courses-list" id="coursesList">
                {
                    courses && (
                        courses.map((course, index) => (
                            <li className="course-li" key={index}>
                                <Course isRub={isRub} course={course}/>
                            </li>
                        ))
                    )
                }
            </ul>

        </div>
    )
}

export default Courses