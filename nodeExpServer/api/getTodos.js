const fn = (req, res, model) =>{
    model.findAll({})
    .then(dbRes =>{
        res.json(dbRes);
    })
}

module.exports = fn;