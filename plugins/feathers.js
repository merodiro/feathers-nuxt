import feathers from '@feathersjs/client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'
import { host, port } from '../config/default.json'

const socket = io(`http://${host}:${port}`, { transports: ['websocket'] })

const client = feathers()
  .configure(feathers.socketio(socket))
  .configure(feathers.authentication({ storage: new CookieStorage() }))

export default client;