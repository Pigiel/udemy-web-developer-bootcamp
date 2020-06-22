# Log from MongoDB

```zsh
> use blog_demo
switched to db blog_demo
> show collections
posts
users
> db.posts.find()
{ "_id" : ObjectId("5ed50aa4977c59001282278d"), "title" : "How to cook the best burger", "content" : "Buy the best ingredients", "__v" : 0 }
{ "_id" : ObjectId("5ed50aa4977c59001282278f"), "title" : "How to cook the best burger pt. 3", "content" : "Ha ha ha ha ha ha!", "__v" : 0 }
{ "_id" : ObjectId("5ed50aa4977c59001282278e"), "title" : "How to cook the best burger pt. 2", "content" : "Buy the best ingredients", "__v" : 0 }
> db.users.find()
{ "_id" : ObjectId("5ed50aa4977c59001282278c"), "posts" : [ ObjectId("5ed50aa4977c59001282278f"), ObjectId("5ed50aa4977c59001282278e") ], "name" : "Bob Belcher", "email" : "bob@gmail.com", "__v" : 2 }
>
```