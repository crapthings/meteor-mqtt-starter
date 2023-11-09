import { WebSocket } from 'ws'
import { createServer } from 'aedes-server-factory'
import Aedes from 'aedes'
import { WebApp } from 'meteor/webapp'

const aedes = Aedes()
const wsPath = '/mqtt'

createServer(aedes, { ws: true })

WebApp.httpServer.on('upgrade', (request, socket, head) => {
  if (request.url === wsPath) {
    const wsServer = new WebSocket.Server({ noServer: true })

    wsServer.handleUpgrade(request, socket, head, (webSocket) => {
      const stream = WebSocket.createWebSocketStream(webSocket)

      stream._socket = webSocket._socket

      aedes.handle(stream)
    })
  }
})
