import React, {useState} from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
function CourseForm(props) {
    debugger;
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="title"
                label="Title"
                onChange={props.onChange}
                name="title"
                value={props.course.title}
            />
            <SelectInput
                id="author"
                label="Author"
                name="authorId"
                onChange={props.onChange}
                value={props.course.authorId || ""}
                className="form-control"
                options={[
                    {
                        value: "",
                        label: ""
                    },
                    {
                        value: "1",
                        label: "Cory House"
                    },
                    {
                        value: "2",
                        label: "Scott Allen"
                    }
                ]}
            />
            <TextInput
                id="category"
                label="Category"
                onChange={props.onChange}
                name="category"
                value={props.course.category}
            />
            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}

export default CourseForm;