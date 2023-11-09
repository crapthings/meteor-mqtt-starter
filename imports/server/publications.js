import { Meteor } from 'meteor/meteor'

import { mqttClient } from '../mqtt'

Meteor.publish('test', function () {
  const handleMessage = Meteor.bindEnvironment((topic, payload) => {
    Test.insert({ topic, createdAt: new Date() })
  })

  mqttClient.on('message', handleMessage)

  this.onStop(() => {
    mqttClient.off('message', handleMessage)
  })

  return Test.fetchData()
})
