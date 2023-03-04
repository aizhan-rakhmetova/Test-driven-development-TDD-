type LocalCityType = {
    title: string
    country: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechTypes = {
    id: number;
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechTypes>
}

export const student: StudentType= {
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