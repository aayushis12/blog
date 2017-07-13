const express=require('express');
const bodyParser=require('body-parser');
const app = express();

var assert=require('assert');
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));
var mongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/test';
app.post('/newuser', function(req, res) {
	//console.log(req.body);
	//var obj=JSON.parse(req.body);
	
	var username=req.body.user.email;
	var password=req.body.user.password;
	 mongoClient.connect(url,function(err,db){
	
 	db.collection('login',function(err,collection){
	collection.insert({"user":{username,password}},function(err,result){
		res.send(result);
		//res.send(result);
	})
	})
 })
});

app.post('/checkuser',function(req,res){
	//var id="ObjectId('"+req.body.id+"')";
	var mongo=require('mongodb');
var ObjectID=require('mongodb').ObjectID;
var obj_id=new ObjectID(req.body.id);

	//var username=req.body.username;
	mongoClient.connect(url,function(err,db){
		db.collection('login',function(err,collection){
			collection.findOne({"_id":obj_id},function(err,result){
				//console.log(result);
				res.json(result);	
			})
	})	})
})

app.post('/getDetails',function(req,res){
	var username=req.body.username;
	mongoClient.connect(url,function(err,db){
		db.collection('asset',function(err,collection){
			collection.findOne({"username":username},function(err,result){
				res.send(result);
			})
		})
	})
})

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Your application starts listening at Port ${PORT}`);
  });
}
app.get('/',function(req,res){
	res.render('index.ejs');
})
