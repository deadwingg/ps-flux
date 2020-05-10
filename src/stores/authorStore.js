import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _authors = [];

class AuthorStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getAuthors() {
        return _authors;
    }

    getCourseById(id) {
        return _authors.find(author => author.id === id);
    }
}

const store = new AuthorStore();

Dispatcher.register(action => {
    switch (action.actionType) {
        /*case actionTypes.DELETE_COURSE:
            _courses = _courses.filter(
                course => course.id !== parseInt(action.id, 10)
            );
            store.emitChange();
            break;*/
        /*case actionTypes.CREATE_COURSE:
            _courses.push(action.course);
            store.emitChange();
            break;
        case actionTypes.UPDATE_COURSE:
            _courses = _courses.map(course =>
                course.id === action.course.id ? action.course : course
            );
            store.emitChange();
            break;*/
        case actionTypes.LOAD_COURSES:
            _authors = action.authors;
            store.emitChange();
            break;
        default:
        // nothing to do here
    }
});

export default store;