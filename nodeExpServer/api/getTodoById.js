const fn = (req, res, model) => {
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