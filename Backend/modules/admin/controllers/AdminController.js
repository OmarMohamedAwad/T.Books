const Admin = require("../../admin/models/Admin")
const ResponseCode = require("../../../response-codes")
const ResponseMessage = require("../../../response-messages")

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
        next(error)
    }
}

async function update(request, response, next) {
    const { id } = request.params;
    const admin = request.body
    const updatedAdmind = {...(admin.username ? { adminName: admin.username } : {})}

    try {
        let adminDoc = await Admin.findById({ _id: id });
        await Admin.updateOne({ _id: id }, updatedAdmind)

        if(admin.password) {
            adminDoc.adminPassword =  admin.password;
            adminDoc.save();
        }
         
        response.json({
            status : ResponseCode.SUCCESS,
            message: ResponseMessage.UPDATE_MESSAGE
        });
        
    }catch(error){
        next(error)
    }
}

module.exports = {
    store,
    update
}