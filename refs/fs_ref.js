const fs = require('fs')
const path = require('path')

// File Sysstem
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw err
//   console.log('Папка создана')
// })
// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 
//   'Hello, World!', 
//   err => {
//     if (err) throw err
//     console.log('Файл создан')
//   }
// )
// fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), 
//   '\nAppend text', 
//   err => {
//     if (err) throw err
//     console.log('Файл изменен')
//   }
// )
// fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'), 
//   'utf-8', 
//   (err, data) => {
//     if (err) throw err
//     console.log(data)
//   }
// )
fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'), 
  path.join(__dirname, 'notes', 'mynotes1.txt'), 
  err => {
    if (err) throw err
    console.log('Файл переименован')
  }
)