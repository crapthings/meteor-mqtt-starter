import mqtt from 'mqtt'

const brokerUrl = Meteor.isServer ? 'ws://localhost:3000/mqtt' : `ws://${window.location.host}/mqtt`

export const mqttClient = mqtt.connect(brokerUrl)

mqttClient.on('connect', console.log)

mqttClient.subscribe('/topic', console.log)

mqttClient.on('message', console.log)

export const mqttPublish = (topic, payload) => mqttClient.publish(topic, payload)
