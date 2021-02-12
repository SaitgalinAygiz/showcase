import "./showcase.css";
import FilterCourses from "./filter-courses/filter";
import Courses from "./courses/courses";
import useFetch from "../hooks/useFetch";
import {useEffect, useState} from "react";
import ErrorMessage from "./errorMessage";


const Showcase = () => {
    const apiUrl = "/mobilev1/update"
    const [{response, error}, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch({
            method: 'post',
            data: {
                data: ""
            }
        })
    }, [doFetch])

    const [courses, setCourses] = useState([]);
    const [fetchedCourses, setFetchedCourses] = useState([]);

    useEffect(() => {
        if (!response) {
            return
        }

        setFetchedCourses(response.items)
        setCourses(response.items)
    }, [response])

    return (
        <div className="container">
            <h1 className="u-text-center">Витрина</h1>
            <FilterCourses courses={fetchedCourses} setCourses={setCourses}/>
            {error && <ErrorMessage err={error}/>}

            <Courses  courses={courses}/>
        </div>
    )
}

export default Showcase