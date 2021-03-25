const { json } = require('express');
const mongoose = require('mongoose');
const settingSchema = mongoose.Schema({
    sectionName: { 
        type: String , 
        required:true,
    },
    sectionContent:{
        type: JSON , 
    }
})

const Setting = mongoose.model("Setting" , settingSchema);
module.exports = Setting;