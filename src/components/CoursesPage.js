import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import authorStore from "../stores/authorStore";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import {loadAuthors} from "../actions/authorActions";
import * as courseActions from "../actions/courseActions";
import * as authorActions from "../actions/authorActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [authors, setAuthors] = useState(authorStore.getAuthors());
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    courseStore.addChangeListener(onCourseChange);
    authorStore.addChangeListener(onAuthorChange);
    let promiseArray = [];
    if (authors.length === 0){
      promiseArray.push(authorActions.loadAuthors());
    }
    if (courses.length === 0) {
      promiseArray.push(courseActions.loadCourses());
    }

    Promise.all(promiseArray).then(() => {
      setLoading(false);
    });
    return () => {
      courseStore.removeChangeListener(onCourseChange);
      authorStore.removeChangeListener(onAuthorChange);
    }
  }, [courses.length, authors.length, loading]);


  function onCourseChange() {
    setCourses(courseStore.getCourses());
  }

  function onAuthorChange() {
    setAuthors(authorStore.getAuthors());
  }
  
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      {loading ? true : <CourseList courses={courses} deleteCourse={deleteCourse} authors={authors}/>}
    </>
  );
}

export default CoursesPage;
