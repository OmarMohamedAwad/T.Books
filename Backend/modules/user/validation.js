const required =(input)=>{  return "The "+ input + " is required" ;}
const minLength = (number,input)=>{  return "The "+ input+ "must be at least "+ number +" characters " }
const unique = (input)=>{ return "The "+ input + "must be unique " }
const maxLength = (number,input)=>{ return "The "+input +  " must be at most " + number +" character"}

module.exports = {
    required,
    minLength,
    unique,
    maxLength
}