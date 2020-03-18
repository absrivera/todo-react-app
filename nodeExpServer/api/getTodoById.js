const fn = (req, res, model) => {
    //sequelize model to find a specific todo base on id
       model.findOne({
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