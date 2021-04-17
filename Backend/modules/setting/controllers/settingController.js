const Setting = require('../models/setting');
const colors = require('colors');
const { json } = require('express');

//list all section in the website and it's content
async function index(request, response, next){

    // console.log("hello")
    try {
        const settings = await Setting.find();
        // const toBeSent =  {...settings,hi:"hello"}
        console.log(`listed successfully`.green.inverse)
        response.json(settings );
        // console.log(response)

    } catch (err) {
        next(err);
    }
}
//section by name
async function show(request, response, next){
    try {
        const { id } = request.params;
        console.log(id)
        const section = await Setting.find({sectionName: id});   
        console.log(section)
        response.status(200)
        .json(
            {
                "sectionName": section[0].sectionName,
                "sectionContent": section[0].sectionContent,
            }
        );
        console.log()
    } catch (err) {
        next(err);
    }
}
// add to scection in setting
async function store(request, response, next) {
    try { 
          const {
                sectionName,
                sectionContent
                
          } = request.body;
          
          const dublicatedSection = await Setting.find({sectionName});
          if(!request.body){
              response.status(400).send({err:"Content can not be empty!"});
          }
          if(dublicatedSection.length) {
              return response.status(409).json({err:"section is already used!"})
          }
          const newSection=new Setting(
          {
          sectionName     : sectionName,
          sectionContent  : sectionContent,
         
          })
          await newSection.save();
          console.log("created successfully".yellow.inverse);
          response.status(200).json(newSection);
    } catch (err) {
         next(err);
      }
  
  }

  async function update(req,res,next){
      console.log(req.params.id)
      console.log(typeof(req.params.id))
    const sectionUpdated = {
        ...(req.body.sectionName) ? {sectionName: req.body.sectionName} : {},
        ...(req.body.sectionContent) ? {sectionContent: req.body.sectionContent} : {},
    }
    console.log(sectionUpdated)
    try
    {
        const sectionNewData = await Setting.findOneAndUpdate({sectionName: req.params.id}, 
            sectionUpdated )
            console.log(sectionNewData)
        res.send("sction updated successfully".blue.inverse)
    }
    catch(err)
    {
        next(err);
    }
}
async function destroy(req, res,next){
    const {id} = req.params;
    try {
      const result = await Setting.deleteOne({_id: req.params.id});
      console.log("sction deleted successfully!".red.inverse)
      res.send("sction deleted successfully!");
    } catch (err) {
        next(err);
    }
 }


  module.exports = {
   index,
   show,
   store,
   update,
   destroy
}