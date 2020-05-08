import React from "react";
import PropTypes from "prop-types";

function CourseList(props) {
    function renderRow(course) {
        return (
            <tr key={course.id}>
                <th>{course.title}</th>
                <th>{course.authorId}</th>
                <th>{course.category}</th>
            </tr>
        )
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
            </tr>
            </thead>
            <tbody>
            {props.courses.map(renderRow)}
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId: PropTypes.number.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired
}

// CourseList.defaultProps = {
//     courses: []
// }
export default CourseList;