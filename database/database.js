import {MongoClient} from "mongodb"
import { connect } from "mongoose"
MongoClient.connect("mongodb://localhost")
.then(conn=> global.conn = conn.db('Employee'))
.catch(err => console.log(err))

module.exports = {}