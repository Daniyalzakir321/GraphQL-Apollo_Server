const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    // id: Number,
    title: String,
    author: String,
})
const Studentdb = mongoose.model('book', bookSchema)

// const salarySchema = new mongoose.Schema({
//     salary: Boolean,
//     rupees: Number
// })
// const Salarydb = mongoose.model('salaries', salarySchema)

module.exports = {Studentdb};
