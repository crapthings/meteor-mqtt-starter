const mqtt = require('mqtt')
const client = mqtt.connect('ws://localhost:3000/mqtt')

client.on('connect', () => {
  console.log(123123123123)
  client.subscribe('presence', (err) => {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', (topic, message) => {
  // message is Buffer
  console.log(message.toString())
})
