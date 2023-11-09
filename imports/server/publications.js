import { Meteor } from 'meteor/meteor'

Meteor.publish(null, function () {
  Test.insert({ createdAt: new Date() })
  return Test.find()
})
