import {
    SET_DATA, REFRESH_AWARD, REFRESH_EDUCATION, REFRESH_EXPERIENCE, REFRESH_PRESENTATION, REFRESH_PROJECT, REFRESH_LEARN_MORE ,
    DELETE_AWARD, DELETE_EDUCATION, DELETE_EXPERIENCE, DELETE_PRESENTATION, DELETE_PROJECT, DELETE_LEARN_MORE
} from "./actions"
import { combineReducers } from "redux"


const awardsItems = (state = [], action) => {
    switch (action.type) {
        case SET_DATA:
            return action.data ? (action.data.awardItems ? action.data.awardItems:[]):[]
        case REFRESH_AWARD:
            if (contains(state, action.award)) {
                state = state.map(element => {
                    return element.id === action.award.id ?
                        action.award : element
                })
            } else {
                state.push(action.award)
            }
            return state
        case DELETE_AWARD:
            var newState = []
            if (containsById(state,action.id)) {
                state.forEach(element => {
                    if (action.id !== element.id) {
                        newState.push(element)
                    }
                })
                state = newState
            }
            return state
        default:
            return state
    }
}

const educationItems = (state = [], action) => {
    switch (action.type) {
        case REFRESH_EDUCATION:
            if (contains(state, action.education)) {
                state = state.map(element => {
                    return element.id === action.education.id ?
                        action.education : element
                })
            } else {
                state.push(action.education)
            }
            return state
        case DELETE_EDUCATION:
            var newState = []
            if (containsById(state,action.id)) {
                state.forEach(element => {
                    if (action.id !== element.id) {
                        newState.push(element)
                    }
                })
                state = newState

            }
            return state
        case SET_DATA:
            return action.data ? (action.data.educationItems ? action.data.educationItems:[]):[]
        default:
            return state
    }
}

const experienceItems = (state = [], action) => {
    switch (action.type) {
        case SET_DATA:
            return action.data ? (action.data.experienceItems ? action.data.experienceItems:[]):[]
        case REFRESH_EXPERIENCE:
            if (contains(state, action.experience)) {
                state = state.map(element => {
                    return element.id === action.experience.id ?
                        action.experience : element
                })
            } else {
                state.push(action.experience)
            }
            return state
        case DELETE_EXPERIENCE:
            var newState = []
            if (containsById(state,action.id)) {
                state.forEach(element => {
                    if (action.id !== element.id) {
                        newState.push(element)
                    }
                })
                state = newState

            }
            return state
        default:
            return state
    }
}

const presentationItems = (state = [], action) => {
    switch (action.type) {
        case SET_DATA:
            return action.data ? (action.data.presentationItems ? action.data.presentationItems:[]):[]
        case REFRESH_PRESENTATION:
            if (contains(state, action.presentation)) {
                state = state.map(element => {
                    return element.id === action.presentation.id ?
                        action.presentation : element
                })
            } else {
                state.push(action.presentation)
            }
            return state
        case DELETE_PRESENTATION:
            var newState = []
            if (containsById(state,action.id)) {
                state.forEach(element => {
                    if (action.id !== element.id) {
                        newState.push(element)
                    }
                })
                state = newState
            }
            return state
        default:
            return state
    }
}

const projectItems = (state = [], action) => {
    switch (action.type) {
        case SET_DATA:
            return action.data ? (action.data.projectItems ? action.data.projectItems:[]):[]
        case REFRESH_PROJECT:
            if (contains(state, action.project)) {
                state = state.map(element => {
                    return element.id === action.project.id ?
                        action.project : element
                })
            } else {
                state.push(action.project)
            }
            return state
        case DELETE_PROJECT:
            var newState = []
            if (containsById(state,action.id)) {
                state.forEach(element => {
                    if (action.id !== element.id) {
                        newState.push(element)
                    }
                })
                state = newState
            }
            return state
        default:
            return state
    }
}

const learnMoreItems = (state = [], action) => {
    switch (action.type) {
        case SET_DATA:
            return action.data ? (action.data.learnMoreItems ? action.data.learnMoreItems:[]):[]
        case REFRESH_LEARN_MORE:
            if (contains(state, action.learnMore)) {
                state = state.map(element => {
                    return element.id === action.learnMore.id ?
                        action.presentation : element
                })
            } else {
                state.push(action.learnMore)
            }
            return state
        case DELETE_LEARN_MORE:
            var newState = []
            if (containsById(state,action.id)) {
                state.forEach(element => {
                    if (action.id !== element.id) {
                        newState.push(element)
                    }
                })
                state = newState
            }
            return state
        default:
            return state
    }
}

const contains = (array, item) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index].id === item.id) {
            return true
        }
    }
    return false
}

const containsById = (array, id) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index].id === id) {
            return true
        }
    }
    return false
}

const appData = combineReducers({
    awardsItems,
    educationItems,
    experienceItems,
    presentationItems,
    projectItems,
    learnMoreItems
})

export default appData