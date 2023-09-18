const mongoose = require('mongoose');



const categorySchema = new mongoose.Schema({

   name: {
       type: String,
       enum: ['Yazılar', 'Şiirler', 'Makaleler', 'Gündeme Dair'] ,
       trim: true,
       required : [true, 'Please add a category Name'],
      
   },



}, {timestamps: true});






module.exports = mongoose.model("Category", categorySchema);