var express = require("express")
var bodyParser = require("body-parser")
var fs = require("fs")
var app = express()

app.get('/' ,(request,response) => {
    console.log('homefinderpictures ...')
    response.send('homefinderpictures ...');
  })

app.use('/images', express.static('images'))

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.post("/image", (request, response) => {
  var name = request.body.name
  console.log(`POST /image name = ${name}`)
  var image = request.body.image
  var realFile = Buffer.from(image,"base64")
  fs.writeFile(`images/${name}`, realFile, (error) => {
      if(error) {
        console.log(error)
        response.status(400).send()
      } else {
        console.log("OK")
        response.send("OK")
      }       
   })
 })

app.listen(8010, () => {
    console.log('Homefinderpictures listening on port 8010!')
})
