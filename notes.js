/**
 * 
 */

const fs = require('fs');
require('colors')


/**
 * 
 * @returns read particular node details from file 
 */
const readNotes = function (title) {

    var map = new Map();
    console.log('reading Notes......'.green.bold);

    try {
        const rData = fs.readFileSync('./note.json', 'utf-8');
        var isAvailable = rData.includes(title)

        if (isAvailable == true) {
            const obj = JSON.parse(rData);

            var arr = [];
            arr.push(obj)

            function isTitle(playload) {
                return playload.title === title;
            }

            console.table(arr[0].find(isTitle))
        }
        else {
            console.log('Could not find '.yellow.bold + `${title}`.red.inverse.bold + ' as Title'.yellow.bold);
            console.log('Please Enter valid Title'.red.bold);
            console.info('Or Add New Notes by passing argument :'.green.bold + ' add --title="<Your Title>" --body="<Your Body>"'.cyan.bold.inverse)
        }
    }
    catch (error) {
        console.log(error.message);
    }

}

/**
 * @Info  `addNotes` this function is for adding a note in array and store into file.
 * @author `Shubham Varneshiya`
 * @param {*} title title parameter value
 * @param {*} body  body parameter value
 * 
 */

const addNotes = function (title, body) {

    //console.time('Adding Notes ......')
    const note = loadNote();

    const findDuplicate = note.filter(
        function (notes) {
            return notes.title === title;
        }
    )

    if (findDuplicate.length === 0) {

        note.push({
            title: title,
            body: body
        })

        saveNotes(note);
        debugger
    }
    else {
        console.log('Duplicate Data Found !!'.red.bold.inverse)
    }

}

const loadNote = function () {

    try {
        console.log('File reading ........'.green.bold)
        const dataBuffer = fs.readFileSync('note.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson);
    }
    catch (e) {
        console.log('Could not find the file name !'.red.bold)
        return [];
    }

}

const saveNotes = function (notes) {

    try {

        console.time('File Creating .......'.green.bold);
        console.time('Note writing ........'.green.bold);
        const objToJSON = JSON.stringify(notes);
        fs.writeFileSync('note.json', objToJSON);
        console.timeEnd('File Creating .......'.green.bold);
        console.timeEnd('Note writing ........'.green.bold);
        console.log('Hurrey ! , Data Write Successfully :) '.rainbow);

    }
    catch (error) {
        console.log('Fail to write node in the fail !'.red.bold);
    }
}

/**
 * `removeNotes()`
 * 
 * @returns `removeNotes` will return removed node's title
 */

const removeNotes = function (ntitle) {


    try {
        console.time('Removing Notes......'.green.bold);
        const readData = fs.readFileSync('./note.json', 'utf-8')
        const data = readData.includes(ntitle);
        var obj = JSON.parse(readData);

        if (data == true) {
            var arr = [];
            arr.push(obj);
            console.time('Notes Removed !!'.red.bold)
            var finalData = arr[0].filter(rows => rows.title != ntitle)
            console.timeEnd('Removing Notes......'.green.bold);
            fs.writeFileSync('note.json', JSON.stringify(finalData));
            console.timeEnd('Notes Removed !!'.red.bold);

            const remData = fs.readFileSync('./note.json', 'utf-8')
            console.table(JSON.parse(remData))

        }
        else {
            console.log('Could not find '.yellow.bold + `${ntitle}`.red.inverse.bold + ' as title'.yellow.bold);
            console.log('Please enter valid title'.red.bold);
        }
    }
    catch (error) {
        console.log(error.message.red.bold);
    }
}


/**
 * @returns `listNote` will return  available list of nodes details from file 
 */
const listnotes = function () {

    try {
        const data = fs.readFileSync('./note.json')
        const rawData = data.toString();
        const objData = JSON.parse(rawData);
        console.table(objData);
    }
    catch (error) {
        console.log(error.message.red);
        console.log('Fail to listing notes !'.red.bold);
    }
}


module.exports = {
    readNote: readNotes,
    addNotes: addNotes,
    removeNote: removeNotes,
    listNote: listnotes
}