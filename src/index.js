import Person from "./models/Person";
import { Workbook } from 'exceljs'

const amountOfPeople = 5000

const rows = []

for (let x = 0; x <= amountOfPeople; x++){
    const person = new Person()
    rows.push([person.name, person.cpf, person.birthdate, person.course, person.job, person.lastCompany, person.convertDaysToYears()])
}

const workbook = new Workbook()
const worksheet = workbook.addWorksheet('People Data')

worksheet.addRow(['Nome', 'CPF', 'Data de nascimento', 'Curso', 'Job', 'Última empresa', 'Tempo de experiência na última empresa'])
worksheet.addRows(rows)

workbook.xlsx.writeFile('./datasets/' + new Date().getTime() + '.xlsx').then(r => console.log('file has been created'))