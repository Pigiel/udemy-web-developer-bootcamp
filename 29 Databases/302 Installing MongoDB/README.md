# Mongo Commands

Commands used during the exercise

- mongod
- mongo
- help
- show dbs
- use
- insert
- find
- update
- remove

## mongod

Mongo daemon used to start mongo and see it's logs

```
root@742eb5c7a75d:/# mongod
2020-05-31T10:49:10.591+0000 I  CONTROL  [main] Automatically disabling TLS 1.0, to force-enable TLS 1.0 specify --sslDisabledProtocols 'none'
2020-05-31T10:49:10.593+0000 W  ASIO     [main] No TransportLayer configured during NetworkInterface startup
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] MongoDB starting : pid=132 port=27017 dbpath=/data/db 64-bit host=742eb5c7a75d
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] db version v4.2.7
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] git version: 51d9fe12b5d19720e72dcd7db0f2f17dd9a19212
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.1.1  11 Sep 2018
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] allocator: tcmalloc
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] modules: none
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] build environment:
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten]     distmod: ubuntu1804
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten]     distarch: x86_64
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten]     target_arch: x86_64
2020-05-31T10:49:10.594+0000 I  CONTROL  [initandlisten] options: {}
2020-05-31T10:49:10.595+0000 E  STORAGE  [initandlisten] Failed to set up listener: SocketException: Address already in use
2020-05-31T10:49:10.595+0000 I  CONTROL  [initandlisten] now exiting
2020-05-31T10:49:10.595+0000 I  CONTROL  [initandlisten] shutting down with code:48
root@742eb5c7a75d:/#
```

## mongo

Start the mongo CLI

> Need to pass user & password from docker-compose in order to gain admin priviledges

```
root@742eb5c7a75d:/# mongo -u root -p change_me
MongoDB shell version v4.2.7
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("d16f17fb-0283-465a-8185-f9f24bb39d67") }
MongoDB server version: 4.2.7
Server has startup warnings:
2020-05-31T10:48:22.843+0000 I  STORAGE  [initandlisten]
2020-05-31T10:48:22.843+0000 I  STORAGE  [initandlisten] ** WARNING: Using the XFS filesystem is strongly recommended with the WiredTiger storage engine
2020-05-31T10:48:22.843+0000 I  STORAGE  [initandlisten] **          See http://dochub.mongodb.org/core/prodnotes-filesystem
---
Enable MongoDBs free cloud-based monitoring service, which will then receive and display
metrics about your deployment (disk utilization, CPU, operation statistics, etc).

The monitoring data will be available on a MongoDB website with a unique URL accessible to you
and anyone you share the URL with. MongoDB may use this information to make product
improvements and to suggest MongoDB products and deployment options to you.

To enable free monitoring, run the following command: db.enableFreeMonitoring()
To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---

>
```

## help

```
> help
	db.help()                    help on db methods
	db.mycoll.help()             help on collection methods
	sh.help()                    sharding helpers
	rs.help()                    replica set helpers
	help admin                   administrative help
	help connect                 connecting to a db help
	help keys                    key shortcuts
	help misc                    misc things to know
	help mr                      mapreduce

	show dbs                     show database names
	show collections             show collections in current database
	show users                   show users in current database
	show profile                 show most recent system.profile entries with time >= 1ms
	show logs                    show the accessible logger names
	show log [name]              prints out the last segment of log in memory, 'global' is default
	use <db_name>                set current database
	db.foo.find()                list objects in collection foo
	db.foo.find( { a : 1 } )     list objects in foo where a == 1
	it                           result of the last line evaluated; use to further iterate
	DBQuery.shellBatchSize = x   set default number of items to display on shell
	exit                         quit the mongo shell
>
```

## show dbs

```
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
>
```

## use

Use the database - creates one if not present yet

```
> use demo
switched to db demo
> 
```

## insert

Insert `dogs` collection data to the database

```
> db.dogs.insert({name: "Rusty", breed: "Mutt"})
WriteResult({ "nInserted" : 1 })
> show collections
dogs
>
```

> `show collections` command will show collections already present for the database

# find

```
> db.dogs.find()
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Rusty", "breed" : "Mutt" }
> db.dogs.insert({name: "Lucy", breed: "Mutt"})
WriteResult({ "nInserted" : 1 })
> db.dogs.find()
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Rusty", "breed" : "Mutt" }
{ "_id" : ObjectId("5ed38d574b10d4d77860e0ce"), "name" : "Lucy", "breed" : "Mutt" }
> db.dogs.find({name: "Rusty})
2020-05-31T10:57:22.929+0000 E  QUERY    [js] uncaught exception: SyntaxError: "" literal not terminated before end of script :
@(shell):1:28
> db.dogs.find({name: "Rusty"})
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Rusty", "breed" : "Mutt" }
> db.dogs.insert({name: "Lulu", breed: "Poodle"})
WriteResult({ "nInserted" : 1 })
> db.dogs.find()
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Rusty", "breed" : "Mutt" }
{ "_id" : ObjectId("5ed38d574b10d4d77860e0ce"), "name" : "Lucy", "breed" : "Mutt" }
{ "_id" : ObjectId("5ed38daa4b10d4d77860e0cf"), "name" : "Lulu", "breed" : "Poodle" }
> db.dogs.find({breed: "Mutt"})
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Rusty", "breed" : "Mutt" }
{ "_id" : ObjectId("5ed38d574b10d4d77860e0ce"), "name" : "Lucy", "breed" : "Mutt" }
>
```

## update

Update commands have two variables `select_data` and `update`
```
db.[collection].update([select_data], [update])
```
By default this command will overwrite the record. To update data use `$set:`

```
> db.dogs.update({name: "Lulu"}, {breed: "Labradoodle"})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.dogs.find()
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Rusty", "breed" : "Mutt" }
{ "_id" : ObjectId("5ed38d574b10d4d77860e0ce"), "name" : "Lucy", "breed" : "Mutt" }
{ "_id" : ObjectId("5ed38daa4b10d4d77860e0cf"), "breed" : "Labradoodle" }
> db.dogs.update({name: "Rusty"}, {$set: {name: "Tater", isCuter: true}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.dogs.find()
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Tater", "breed" : "Mutt", "isCuter" : true }
{ "_id" : ObjectId("5ed38d574b10d4d77860e0ce"), "name" : "Lucy", "breed" : "Mutt" }
{ "_id" : ObjectId("5ed38daa4b10d4d77860e0cf"), "breed" : "Labradoodle" }
>
```

## remove

```
> db.dogs.remove({breed: "Labradoodle"})
WriteResult({ "nRemoved" : 1 })
> db.dogs.find()
{ "_id" : ObjectId("5ed38d1a4b10d4d77860e0cd"), "name" : "Tater", "breed" : "Mutt", "isCuter" : true }
{ "_id" : ObjectId("5ed38d574b10d4d77860e0ce"), "name" : "Lucy", "breed" : "Mutt" }
> db.dogs.remove({breed: "Mutt"})
WriteResult({ "nRemoved" : 2 })
> db.dogs.find()
>
```