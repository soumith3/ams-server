const mongoose = require('mongoose');


const dbURI = 'mongodb+srv://admin:12qwaszx@cluster0.fjnwu.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {dbName: 'AMS'});


mongoose.connection.on('connected', () => { 
    console.log(`Mongoose connected to ${dbURI}`); 
   }); 
   mongoose.connection.on('error', err => { 
    console.log('Mongoose connection error:', err); 
   }); 
   mongoose.connection.on('disconnected', () => { 
    console.log('Mongoose disconnected'); 
   });

   require('./user');
   require('./section');
   require('./attendance');