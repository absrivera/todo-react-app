const fn = (req, res, model) => {

 //   console.log(req.body.id)
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