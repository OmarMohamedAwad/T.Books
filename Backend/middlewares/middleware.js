//check on token
async function typeOfaccess(role){

    console.log("its the authentication check");
    const bearerHeader = req.headers.authorization; 
    console.log(bearerHeader)
    if(typeof bearerHeader !== "undefined")
    {
        const bearer = bearerHeader.split(' ')[1];
        req.token = bearer;
        if(role == ADMIN)
        {
            try{
                res = await jwt.verify(req.token , ADMIN_ACCESS_TOKEN_SECRET);
                this.typeOfAccess = admin;
                next();
            }
            catch(error)
            {
                next("the admin didn't send right token");
            }
        }
        else if(role == USER)
        {
            try{
                res = await jwt.verify(req.token , USER_ACCESS_TOKEN_SECRET);
                this.typeOfAccess = user;
                next();
            }
            catch(error)
            {
                next("the user didn't send right token");
            }
        }
    }
    else{
        next("no token yet");
    }
}