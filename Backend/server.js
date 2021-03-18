
const jwt = require('jsonwebtoken');
const loginRouter = require('./routes/login')

app.use((req,res,next)=>{
    const bearerHeader = req.headers['authorization'];
    console.log("first")
    if(typeof bearerHeader !== 'undefined') 
    {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        jwt.verify(bearerToken, 'secretkeyHossam', (err, authData) => {
            if(err) 
            {
                res.sendStatus(403);
            } 
            else 
            {
                console.log("third") 
                next();
            }
        })
    }
});