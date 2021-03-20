const Admin = require("../../admin/models/Admin")
const ResponseCode = require("../../../responses-code")
const ResponseMessage = require("../../../responses-message")

async function store(request, response, next) {
    const adminRequest = request.body

    const admin = new Admin ({
        adminName: adminRequest.username,
        adminPassword: adminRequest.password
    })

    try {
        const savedAdmin = await admin.save()
        response.json(savedAdmin)
    }catch (error){
        if (error.name === "ValidationError") {
            let errorsMessage = {};
      
            Object.keys(error.errors).forEach((key) => {
                errorsMessage[key] = error.errors[key].message;
            });

            response.json(errorsMessage);
        }else {
            next(ResponseCode.SERVER_ERROR)
        }
    }
}

async function update(request, response, next) {
    const { id } = request.params;
    const admin = request.body
    const updatedAdmind = {
        ...(admin.username ? { adminName: admin.username } : {})
    }

    try {
        let doc = await Admin.findById({ _id: id });
        await Admin.updateOne({ _id: id }, updatedAdmind)
        admin.password ? doc.adminPassword =  admin.password  : {};

        doc.save();
        response.json({message: ResponseMessage.UPDATE_MESSAGE})
    }catch(error){
        console.log(error);

        if (error.name === "ValidationError") {
            let errorsMessage = {};
      
            Object.keys(error.errors).forEach((key) => {
                errorsMessage[key] = error.errors[key].message;
            });

            response.json(errorsMessage);
        }else {
            next(ResponseCode.SERVER_ERROR)
        }
    }
}

module.exports = {
    store,
    update
}