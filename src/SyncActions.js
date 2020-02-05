import * as firebase from "./Firebase"

const events = [["award","awardsItems", (e)=> firebase.set("awardItems", e.award, e.callback)],
                ["education","educationItems",(e)=>firebase.set("educationItems", e.education, e.callback)],
                ["experience","experienceItems",(e)=>firebase.set("experienceItems", e.experience, e.callback)],
                ["presentation","presentationItems",(e)=>firebase.set("presentationItems", e.presentation, e.callback)],
                ["project","projectItems",(e)=>firebase.set("projectItems", e.project, e.callback)],
                ["learnMore","learnMoreItems",(e)=>firebase.set("learnMoreItems", e.learnMore, e.callback)]]

export const award = (document) => document.addEventListener("award", events[0][2], false)

export const education = (document) => document.addEventListener("education", events[1][2] ,false)

export const experience = (document) => document.addEventListener("experience",events[2][2],false)

export const presentation = (document) => document.addEventListener("presentation",events[3][2],false)

export const project = (document) => document.addEventListener("project",events[4][2], false)

export const learnMore = (document) => document.addEventListener("learnMore", events[5][2],false)

export const dispatchEvents = (context,document)=>{
    events.forEach((names)=>{
        var name = ""+names[0]
        var event = new Event(name)
        event[name]= context.props[names[1]]
        event["callback"] = (state) => context.setState(state)
        document.dispatchEvent(event)
        document.removeEventListener(name,names[2])
    })
    
}






