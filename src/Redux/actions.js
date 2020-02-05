export const SET_DATA = "SET_DATA"
export const REFRESH_AWARD = "REFRESH_AWARD"
export const REFRESH_EDUCATION = "REFRESH_EDUCATION"
export const REFRESH_EXPERIENCE = "REFRESH_EXPERIENCE"
export const REFRESH_PRESENTATION = "REFRESH_PRESENTATION"
export const REFRESH_PROJECT= "REFRESH_PROJECTS"
export const REFRESH_LEARN_MORE= "REFRESH_LEARN_MORE"
export const DELETE_AWARD = "DELETE_AWARD"
export const DELETE_EDUCATION = "DELETE_EDUCATION"
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE"
export const DELETE_PRESENTATION = "DELETE_PRESENTATION"
export const DELETE_PROJECT= "DELETE_PROJECTS"
export const DELETE_LEARN_MORE= "DELETE_LEARN_MORE"

export function setData(data){
    return {type: SET_DATA, data}
}

export function refreshAward(award){
    return {type: REFRESH_AWARD, award}
}

export function refreshEducation(education){
    return {type: REFRESH_EDUCATION, education}
}

export function refreshExperience(experience){
    return {type: REFRESH_EXPERIENCE, experience}
}

export function refreshPresentation(presentation){
    return {type: REFRESH_PRESENTATION, presentation}
}

export function refreshLearnMore(learnMore){
    return {type : REFRESH_LEARN_MORE, learnMore}
}

export function refreshProject(project){
    return {type: REFRESH_PROJECT, project}
}

export function deleteAward(id){
    return {type: DELETE_AWARD, id}
}

export function deleteEducation(id){
    return {type: DELETE_EDUCATION, id}
}

export function deleteExperience(id){
    return {type: DELETE_EXPERIENCE, id}
}

export function deletePresentation(id){
    return {type: DELETE_PRESENTATION, id}
}

export function deleteProject(id){
    return {type: DELETE_PROJECT, id}
}

export function deleteLearnMore(id){
    return {type : DELETE_LEARN_MORE, id}
}

