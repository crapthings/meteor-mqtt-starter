import mqtt from 'mqtt'

let brokerUrl = 'ws://localhost:3000/mqtt'

if (Meteor.isClient) {
  const { protocol, host } = window.location
  brokerUrl = `${protocol}//${host}/mqtt`.replace('http', 'ws')
}

export const mqttClient = mqtt.connect(brokerUrl)

export const mqttPublish = (topic, payload) => mqttClient.publish(topic, payload)

mqttClient.subscribe('/topic', console.log)

// mqttClient.on('connect', console.log)

// mqttClient.on('message', console.log)
