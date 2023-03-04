import {StudentType} from "../02/02";

export const sum = (a:number, b:number) => {
    return a+b
}

function sum1(a:number, b:number){
    return a+b
}

export const addTech = (st: StudentType, skill: string) => {
    st.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive (s: StudentType){
    s.isActive = false

}