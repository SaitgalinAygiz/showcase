import {useState, useEffect} from 'react'
import {range} from "../../utils/range";

const FilterCourses = props => {
    const setCourses = props.setCourses
    const fetchedCourses = props.courses

    const subjects = [
        "Все предметы", "Алгебра",  "Биология",
        "География", "Геометрия", "Информатика",
        "История", "Литература", "Математика", "Обществознание",
        "Окружающий мир", "Робототехника", "Русский язык", "Физика", "Химия"
    ]

    const [subject, setSubject] = useState(subjects[0])

    const genres = [
        "Все жанры", "Демо", "Задачник", "Подготовка к ВПР", "Подготовка к ЕГЭ", "Рабочая тетрадь"
    ]

    const [genre, setGenre] = useState(genres[0])

    const grades = ["Все классы", ...range(1, 12)];

    const [grade, setGrade] = useState(grades[0])

    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        let filteredCourses = fetchedCourses

        if (subject !== subjects[0]) {
            filteredCourses = filteredCourses.filter(course => course.subject === subject)
        }

        if (genre !== genres[0]) {
            filteredCourses = filteredCourses.filter(course => course.genre === genre)
        }

        if (grade != grades[0]) {
            filteredCourses = filteredCourses.filter(course => course.grade.includes(grade))
        }

        if (searchString !== "") {
            filteredCourses = filteredCourses.filter(
                course => course.grade.includes(searchString)
                    || course.genre.includes(searchString)
                    || course.subject.includes(searchString)
            )
        }

        setCourses(filteredCourses)

    }, [subject, setSubject, genre, setGenre, grade, setGrade, setSearchString, searchString])


    return (
        <div className="courses-filter u-mt-30">
            <form id="filterform" >
                    <select id="subject" name="subject" value={subject} onChange={event => setSubject(event.target.value)} >
                        {
                            subjects.map((subject, index) => (
                                <option key={index} value={subject}>{subject}</option>
                            ))
                        }
                    </select>
                    <select name="genre" id="genre" value={genre} onChange={event => setGenre(event.target.value)}>
                        {
                            genres.map((genre, index) => (
                                <option key={index} value={genre}>{genre}</option>
                            ))
                        }
                    </select>
                    <select name="grade" id="grade" value={grade} onChange={event => setGrade(event.target.value)}>
                        {
                            grades.map((grade, index) => (
                                <option key={index} value={grade}>{grade}</option>
                            ))
                        }
                    </select>

                <div className="search">
                    <input
                        className="borderFind"
                        type="text"
                        placeholder="Поиск"
                        id="search"
                        name="search"
                        value={searchString}
                        onChange={event => setSearchString(event.target.value)}
                    />
                    <button
                        onClick={event => event.preventDefault()}
                        className="courses-filter-search-btn"
                        type="submit"
                        title="Найти"
                    >

                    </button>
                </div>

            </form>
        </div>
    )
}

export default FilterCourses