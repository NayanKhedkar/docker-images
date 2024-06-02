const Keycloak = require('keycloak-connect')
const  session = require('express-session')
const memoryStore = new session.MemoryStore()

const keycloakConfig = {
  clientId: 'b2e-marketplace',
  bearerOnly: true, // Only accept bearer tokens
  serverUrl: 'http://localhost:8081/auth',
  realm: 'my-realm'
};

const keycloak = new Keycloak({ store: memoryStore }, keycloakConfig)

module.exports = keycloak
