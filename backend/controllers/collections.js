var _mongo = require('../db/connect');

var main = _mongo.main;
var getDb = _mongo.getDb; //mongoDBO Mongo db Object

main().catch(console.error);
getDb();