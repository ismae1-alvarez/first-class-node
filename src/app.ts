import express, { Request, Response } from 'express'


//inizializar la aplicación
const app = express();
const port = 3000;


app.use(express.json())


app.get('/', (req:Request, res:Response) =>{
    res.send("mama estoy triunfando")
})


app.post("/", (req:Request, res:Response)=>{
    console.log(req.body)

    res.json({
        message : "Videojuego creado",
        data : req.body
    })
})

app.get("/:id/:name", (req:Request, res:Response)=>{
    const {id, name} = req.params

    console.log(id)
    console.log(name)
    res.json({
        message : "Videojuego encontrado",
        id, 
        name, 
    })
})

app.listen(port, ()=>{
    console.log(`Server is runnign on port ${port}`)
})


