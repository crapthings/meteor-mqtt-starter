import { mqttPublish } from '../mqtt'

Meteor.methods({
  testMqttWithMethod (topic, payload, options) {
    mqttPublish(topic, payload, options)
  }
})
