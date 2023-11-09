import '/imports/client'

// import mqtt from 'mqtt'

// Tracker.autorun(() => {
//   console.log(Test.find().fetch())
// })

// Meteor.startup(function () {
//   const mqtt = require("mqtt");
//   const client = mqtt.connect(`ws://${window.location.host}/mqtt`);

//   client.on("connect", () => {
//     console.log(123123123123)
//     client.subscribe("presence", (err) => {
//       if (!err) {
//         client.publish("presence", "Hello mqtt");
//       }
//     });
//   });

//   client.on("message", (topic, message) => {
//     // message is Buffer
//     console.log(message.toString());
//   });


//   setInterval(() => {
//     console.log(11111)
//     client.publish("presence", "Hello mqtt");
//   }, 1000)

// })
