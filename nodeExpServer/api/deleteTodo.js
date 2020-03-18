const fn = (req, res, model) => {

 //sequelize model to delete todo item in DB based on id
    model.destroy({
        where: {
            id: req.body.id
        }
    }).then(dbRes =>{
        cb(dbRes.JSON())
    }).catch(err =>{
        res.send(err)
    })

}

module.exports = fn;