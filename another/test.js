const fs = require('fs');

const data = {
    name: "shubham",
    age: "23",
    car: "i20"
}

//convert raw (Object) data to JSON Form
const objToJSON = JSON.stringify(data);

//Write Data on file
fs.writeFileSync('info.json', objToJSON)

const fileData = fs.readFileSync('info.json', 'utf-8')

const readObject = JSON.parse(fileData)

readObject.name = "Semicolon"
readObject.car = "vanue"
readObject.age = "Infinite"

const objToJson = JSON.stringify(readObject)

fs.writeFileSync('info.json', objToJson)

const fData = fs.readFileSync('info.json', 'utf-8')

const swData = JSON.parse(fData)
console.table([{ 'Name': swData.name, 'Age': swData.age, 'Car': swData.car }])