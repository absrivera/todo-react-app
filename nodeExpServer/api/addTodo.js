const fn = (req, res, model, cb) => {
//sequelize model to create new todo entry
        model.create({
            description: req.body.description,
            deadline: req.body.deadline
        }).then(dbRes =>{
            cb(dbRes.JSON())
        }).catch(err =>{
            res.send(err)
        })

}

module.exports = fn;