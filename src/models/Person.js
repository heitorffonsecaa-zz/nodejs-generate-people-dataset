import faker from 'faker-br'
import { courses } from '../storage/courses'

let listCourses = courses()

class Person {
    constructor() {
        this.name = faker.name.findName()
        this.cpf = faker.br.cpf()
        this.birthdate = faker.date.between(new Date('1950-02-12'), new Date()).toLocaleDateString()
        this.course = listCourses[Math.floor(Math.random() * (listCourses.length - 1))]
        this.job = faker.name.jobTitle()
        this.lastCompany = faker.company.companyName()
        this.timeOfLastCompany = Math.floor(Math.random() * (10950 + 1))
    }

    convertDaysToYears(){
        let years = Math.floor(this.timeOfLastCompany / 365);
        let months = Math.floor(this.timeOfLastCompany % 365 / 30);
        let days = Math.floor(this.timeOfLastCompany % 365 % 30);

        let text = `${years > 0 ? years === 1 ? years + 'ano ' : years + 'anos ' : ''}${months > 0 ? months === 1 ? months + 'mês ' : months + 'meses ' : ''}${days > 0 ? days === 1 ? days + 'dia ' : days + 'dias ' : ''}`
        return text.trim()
    }
}

export default Person