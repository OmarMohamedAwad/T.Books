const ResponseCode = require("../responses-code")
//check on token
const typeOfaccess = async function (role){
    const bearerHeader = req.headers.authorization; 
    if(typeof bearerHeader !== "undefined")
    {
        const bearer = bearerHeader.split(' ')[1];
        req.token = bearer;
        switch(role)
        {
            case ADMIN:
                try{
                    res = await jwt.verify(req.token , ADMIN_ACCESS_TOKEN_SECRET);
                    next();
                }catch(error){
                    next(ResponseCode.AUTHENTICATION_ERROR);
                }
                break;
            case USER:
                try{
                    res = await jwt.verify(req.token , USER_ACCESS_TOKEN_SECRET);
                    next();
                }catch(error){
                    next(ResponseCode.AUTHENTICATION_ERROR);
                }
                break;
            case ADMIN_USER:
                try{
                    res = await jwt.verify(req.token , USER_ACCESS_TOKEN_SECRET);
                    next();
                }catch(error){
                    try{
                        res = await jwt.verify(req.token , ADMIN_ACCESS_TOKEN_SECRET);
                        next();
                    }catch(error){
                        next(ResponseCode.AUTHENTICATION_ERROR);
                    }
                }
                break;
            default:
                //Do Nothing
        }
    }
    else{
        next("no token yet");
    }
}

module.exports = typeOfaccess;