// Data
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "8598414125",
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dignissimos adipisci laudantium ipsam     molestiae repellat, vero officiis impedit repudiandae accusamus nesciunt accusantium quidem odio quos nobis nam id  sit rerum.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]    
    },
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: "8598414125",
        bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dignissimos adipisci laudantium ipsam     molestiae repellat, vero officiis impedit repudiandae accusamus nesciunt accusantium quidem odio quos nobis nam id  sit rerum.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]    
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

//Subindo um servidor privado. Port: 5500
const express = require('express') 
const server = express()

// Configurando o nunjucks  
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Configurando arquivos estáticos.
server
.use(express.static("public"))
// Criando rotas - index, study and give-classes.
.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses)

.listen(5500) // Server

// Get functions
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res) {
    const data = req.query

    // Verificando se os dados estão vazios
    const isNotEmpty = Object.keys(data).length > 0

    // Adicionando dados    
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        proffys.push(data)

        return res.redirect("/study")
    }
    
    // Mandando dados para o HTML
    return res.render("give-classes.html", {subjects, weekdays})
}

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}


