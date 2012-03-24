// Just a basic server setup for this site
var Stack = require('stack'),
    Creationix = require('creationix'),
    Http = require('http');

Http.createServer(Stack(
  Creationix.log(),
  require('wheat')(process.env.JOYENT ? process.env.HOME + "/dazuo.me" : __dirname +"/..")
)).listen(80);
