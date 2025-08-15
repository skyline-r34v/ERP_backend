const connector = require('../utils/db.js')

const studentSchema = {
    S_id: {type:String, required:true},
    s_address: {type:String, required:true},
    s_number: {type:Number , required:true},
    
}