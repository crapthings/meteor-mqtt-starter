import mqtt from 'mqtt'

let brokerUrl = 'ws://localhost:3000/mqtt'

let options = {}

if (Meteor.isClient) {
  const { protocol, host } = window.location
  brokerUrl = `${protocol}//${host}/mqtt`.replace('http', 'ws')

  options.username = localStorage.getItem('Meteor.userId')
  options.password = localStorage.getItem('Meteor.loginToken')
  console.log(options)
}

export const mqttClient = mqtt.connect(brokerUrl, options)

export const mqttPublish = (topic, payload) => mqttClient.publish(topic, payload)

mqttClient.subscribe('/topic', console.log)

// mqttClient.on('connect', console.log)

// mqttClient.on('message', console.log)
