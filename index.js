const jsonServer = require('json-server')
const empServer = jsonServer.create()
const middleware= jsonServer.defaults()
const route=jsonServer.router("db.json")
const PORT=3000 || process.env.PORT

empServer.use(middleware)
empServer.use(route)

empServer.listen(PORT,()=>{
    console.log(`Employee portal started at:${PORT}`);
})