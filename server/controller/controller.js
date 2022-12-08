const model = require('../model/model')

async function create_categories(req, res) {
    const Create = new model.Expenses({
        type: "Expense",
        color: "rgb(209, 235, 65)"
    })
   await Create.save(function (err) {
        if (!err)
            return res.json(Create)
        return res.status(400).json({
             message: `Error while creating categories ${err}`
         })
    }) 
}


async function get__Categories(req, res)  {
    let data = await model.Expenses.find({

    })
   let filter = await data.map(v => Object.assign({}, {type:v.type, color:v.color}))
    // return res.json(data)
    return res.json(data);
}

async function create_Transaction(req, res) {
    if (!req.body) 
        return res.status(400).json("Post HTTP Date Not Provided")
    let { name, type, amount } = req.body;
    const create = await new model.Transaction(
        {
            
            name,
            type,
            amount,
            date: new Date()
        }
    )
    create.save(function (err) {
        if (!err)
            return res.json(create);
        return res.status(400).json({
            message: `Error while creating transaction ${err}`
        })
    })
}

async function get_Transaction(req, res) {
    let data = await model.Transaction.find({})
    return res.json(data)
}

async function delete_Transaction(req, res) {
    if (!req.body) res.status(400).json({
        message: "Request body not found"
        
    })
    await model.Transaction.deleteOne(req.body, function (err) {
        if (!err) res.json("Record Deleted....!");
    }).clone().catch(function (err) {
        res.json("Error while deleting Transaction Record ")
    })
}

async function get_Labels(req, res) {
    model.Transaction.aggregate([
        {
            $lookup: {
                from: "expenses",
                localField: 'type',
                foreignField: 'type',
                as:"categories_info"
           }
        },
        {
            $unwind:"$categories_info"
        }
    ]).then(result => {
        let data = result.map(v => Object.assign({},
            {
                _id: v._id,
                name: v.name,
                type: v.type,
                amount: v.amount,
                color: v.categories_info['color']
        }))
       res.json(data)
    }).catch(error => {
       res.status(400).json("Looup Collection Error")
   })
   
}

module.exports = {
    create_categories,
    get__Categories,
    create_Transaction,
    get_Transaction,
    delete_Transaction,
    get_Labels
}
