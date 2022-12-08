const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const categories_model = new Schema({
    type: {
        type: String, 
        default: "Investment"

    },

    color: {
        type: String,
        default: 'red',  
    },

  


    


})

const transaction_model = new Schema({
    name: {
        type: String,
        default: "Anonymous"
    },
    type: {
        type: String,
        
    },
    amount: {
        type:Number
        
    },
    date: {
        type: Date,
        default: Date.now
    }
})



const Expenses = mongoose.model('expenses', categories_model)
const Transaction = mongoose.model('transaction', transaction_model)

exports.default = Transaction;
module.exports = {
    Expenses,
    Transaction
}