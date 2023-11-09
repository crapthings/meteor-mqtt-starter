import { WebApp } from 'meteor/webapp'

import { handleMqttRequest } from './broker'

WebApp.httpServer.on('upgrade', handleMqttRequest)
