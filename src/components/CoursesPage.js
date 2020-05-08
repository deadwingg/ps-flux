import React, {useEffect, useState} from "react";
import {getCourses} from "../api/courseApi";
import CourseList from "./CourseList";

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then((_courses) => {
            setCourses(_courses);
        });
    }, []) // empty array means 1 time only

    return (
        <>
            <h2>Courses</h2>
            <CourseList courses={courses}/>
        </>
    );
}

export default CoursesPage;