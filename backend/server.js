const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions ={
    origin: "*",
    methods: ['GET', 'POST']
};

app.use(cors(corsOptions));

app.use(express.json());

const db = require('./app/models');
db.mongoose
.connect(db.url,{
    useNewURLParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log("Connected to the DB");
})
.catch(err =>{
    console.log("Cannot connect to the database",err);
    process.exit();
});
app.use(express.urlencoded({extended:true}));

// app.get("/", (req,res)=>{
//     res.json({message: "SilkW3b"});
// });

require("./app/routes/silkw3b.routes")(app);

const PORT =  process.env.port || 10000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});