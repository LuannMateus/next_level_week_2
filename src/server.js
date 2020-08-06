require('express')() //Subindo um servidor privado. Port: 5500
.get("/", (req, res) => {
    return res.send("Hi from NLW")
})
.listen('5500')
