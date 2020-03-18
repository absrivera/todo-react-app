const fn = (req, res, model) =>{
    //sequelize model to retieve all todos
    model.findAll({})
    .then(dbRes =>{
        res.json(dbRes);
    })
}

module.exports = fn;