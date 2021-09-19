const mongoose = require('mongoose')

 mongoose.connect(
    process.env.DB_URL,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
)

mongoose.connection.on('connected', () => {
    console.log('db connected...')
})

mongoose.connection.on('error', () => {
    console.log('db error...')
})

mongoose.connection.on('disconnected', () => {
    console.log('db disconnected...')
})

process.on('SIGINT',async () => {
    await mongoose.connection.close()
    process.exit(0)
})