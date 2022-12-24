// @ts-nocheck
const EventEmitter = require('events');


const myEmitter = new EventEmitter();

function c1() {
  console.log("event #1");
}

function c2() {
  console.log('event #2');
}

// register
myEmitter.addListener('eventOne', c1);
myEmitter.on('eventOne', c2);

myEmitter.emit('eventOne')