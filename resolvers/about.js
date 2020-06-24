const { mustBeSignedIn } = require('../auth.js');

let aboutMessage = 'iTracker API v1.0';

function getMessage() {
  return aboutMessage;
}

function setMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

module.exports = { getMessage, setMessage: mustBeSignedIn(setMessage) };
