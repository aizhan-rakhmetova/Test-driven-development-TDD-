import {StudentType} from "../02/02";
import {addTech, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(()=>{
    student = {
        id: 1,
        name: "Aizhan",
        age: 24,
        isActive: true,
        address: {
            streetTitle: "kk",
            city: {
                title: "gg",
                country: "KZ"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "JS"
            }
        ]
    }
})

test('new tech skills should be added to student', ()=>{
    expect(student.technologies.length).toBe(2);

    addTech(student, "JS");

    expect(student.technologies.length).toBe(3);
    expect(student.technologies[2].title).toBe("JS");
    expect(student.technologies[2].id).toBeDefined();
})

test('student should be changed to active', ()=>{
    expect(student.isActive).toBe(true);

    makeStudentActive(student);

    expect(student.isActive).toBe(false);




})