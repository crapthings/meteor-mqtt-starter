import { WebSocket } from 'ws'
import { createServer } from 'aedes-server-factory'
import Aedes from 'aedes'

const aedes = Aedes()
const wsPath = '/mqtt'

createServer(aedes, { ws: true })

export const handleMqttRequest = function (request, socket, head) {
  if (request.url === wsPath) {
    const wsServer = new WebSocket.Server({ noServer: true })

    wsServer.handleUpgrade(request, socket, head, (webSocket) => {
      const stream = WebSocket.createWebSocketStream(webSocket)

      stream._socket = webSocket._socket

      aedes.handle(stream)
    })
  }
}

aedes.preConnect = function (client, packet, callback) {
  callback(null, true)
}

aedes.authenticate = Meteor.bindEnvironment(function (client, username, password, callback) {
  const hashedToken = Accounts._hashLoginToken(password)
  const user = Meteor.users.findOne({ 'services.resume.loginTokens.hashedToken': hashedToken })
  console.log(username, password, user)
  callback(null, true)
})
