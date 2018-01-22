const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creativeSpace",
  {
    useMongoClient: true
  }
);

// To add creations, insert the id number from the desired artist in mongodb, 
//and then run the code below.

const creationSeed = [
   {
     title: "Spiral",
     url: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mirai_Nagasu_2010_Troph%C3%A9e_Eric_Bompard.JPG",
     medium: "artwork",
     description: "Performed in 2010 to Memoirs of a Geisha by John Williams. I built up a lot of flexibility from years of practice, and combined this ability with a costume that was custom-designed to complete the aesthetic package I hoped to achieve.",
     artist: 'ObjectId("5a56e2eb985d3115d4a77307")',
     date: new Date(Date.now())
   },
   {
     title: "Lunge",
     url: "http://www.insideskating.net/wp-content/uploads/2018/01/1-Mirai-Nagasu-SP-2017-Rostelecom-Cup-opening-photo.jpg",
     medium: "artwork",
     description: "2017 Rostelecom Cup Opening short program performance.",
     artist: 'ObjectId("5a56e2eb985d3115d4a77307")',
     date: new Date(Date.now())
   },
   {
     title: "Exhibition",
     url: "https://coachtomz.com/wp-content/uploads/2016/08/mn-02.jpg",
     medium: "artwork",
     description: "The lighting in the background serves to complement my costume, the tone of the music, my facial expression, and the overall tranquil emotion I am trying to convey.",
     artist: 'ObjectId("5a56e2eb985d3115d4a77307")',
     date: new Date(Date.now())
   },
   {
     title: "2010 Olympic Games",
     url: "https://www.youtube.com/watch?v=Hsp-7S79IYI",
     medium: "video",
     description: "Free style program skated to Carmen by Angele Dubeau and La Pieta.",
     artist: 'ObjectId("5a56e2eb985d3115d4a77307")',
     date: new Date(Date.now())
   }
];

 db.Creation
   .remove({})
   .then(() => db.Creation.collection.insertMany(creationSeed))
   .then(data => {
     console.log(data.insertedIds.length + " creations inserted!");
     process.exit(0);
   })
   .catch(err => {
     console.error(err);
     process.exit(1);
   });