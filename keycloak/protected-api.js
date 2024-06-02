const express = require('express')
const keycloak = require('./keycloak.js')

const app = express()

// Middleware to verify access token
app.use('/api/*', keycloak.middleware(), keycloak.protect())  // Check user roles

app.get('/api/protected', (req, res) => {
  // Access granted after middleware check
  if (req.kauth) {
    console.log(`Authorized user: ${req.kauth}`);
    res.json({ message: 'Welcome, authorized user!' })
  } else {
    console.error('Access denied: Invalid or missing access token')
    res.status(401).json({ message: 'Unauthorized' })
  }
});

app.listen(3002, () => console.log('API listening on port 3002'))
