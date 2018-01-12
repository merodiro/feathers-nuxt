// const helmet = require('helmet');
const { Nuxt, Builder } = require('nuxt');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');

const api = require('./api');
const config = require('../nuxt.config.js');

const app = express(feathers());

app.use('/api', api);

// Load app configuration
app.configure(configuration());

// Enable security
// app.use(helmet());

// Import and Set Nuxt.js options
config.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

module.exports = app;
