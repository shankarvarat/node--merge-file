
 
 
 
 const fs = require('fs')
const file1 = '/home/shankar/Desktop/file1.txt'
const file2 = '/home/shankar/Desktop/file2.txt'

const allPromises = [file1, file2].map(eachFile => {
    return new Promise((resolve, reject) => {
        fs.readFile(eachFile, (err, data) => {
            if(err) {
                reject(err)
            }else {
                resolve(data)
            }
        })
    })
})

Promise.all(allPromises).then(onfulfilled => {
    const totalBufferContent = Buffer.concat(onfulfilled)
    fs.writeFile('3.txt', totalBufferContent, (err) => {
        if(err) throw err;

        console.log('Done')
    })
})
