function userMiddleware (req,res,next) {
    const { body } = req
    console.log('me hicieron click')

    res.status(200).json({ success : true})
    console.log(body)
    
  }

  module.exports = userMiddleware