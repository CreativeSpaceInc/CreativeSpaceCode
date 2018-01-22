const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creativeSpace",
  {
    useMongoClient: true
  }
);

const artistSeed = [
  {
    displayname: "ArtistOnIce",
    username: "MNagasu",
    bio: "My name is Mirai Nagasu.  I am a competitive figure skater representing the United States.  I am a six-time national medalist.  I am proud of my opportunities to express myself artistically through the medium of ice skating.",
    avatar: "http://www.lifeskate.com/.a/6a00e54f7ecf2c883301348612c5c1970c-pi",
    email: "MNagasu@gmail.com",
    location: "Colorado, United States",
    occupation: "Amateur Figure Skater",
    date: new Date(Date.now())
  },
  {
    displayname: "JamesWaite",
    username: "waitjameswaite",
    bio: "James Waite is a multidisciplinary artist who graduated from the Cleveland Institute of Art in 2017 with a Bachelor Degree in Fine Arts from the Drawing Department with an emphasis in Visual Culture, Art & History.",
    avatar: "www.jamespatrickwaite.com/image/profilepic.jpg",
    email: "james@jamespatrickwaite.com",
    location: "Cleveland, Ohio",
    occupation: "Artist",
    date: new Date(Date.now())
  }
];

db.Artist
  .remove({})
  .then(() => db.Artist.collection.insertMany(artistSeed))
  .then(data => {
    console.log(data.insertedIds.length + " artists inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });