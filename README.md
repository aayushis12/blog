# assignment
For executing this repository, you will need mongo db in your sytem. 
Launch mongodb and execute the following commands-
  1.use test; //will create a new database or use the existing one with the name test.
  2.db.createCollection("login") //will create a collection login and will be used to store the username and password from the client side.
  3.db.createCollection("asset") //will create a collection asset and will be used create references to the users from the collection login
  4.db.asset.insert({"username":"a","title":"Macbook Pro","description":"The big Macbook Pro","year":"26-04-2017"}) //inserting the data for testing purpose of our API.
  The database is done.
  
  For the front end to run, go to the command prompt-- navigate to your folder and run the command 'webpack'.//Builds the react js code
  Open another command prompt-- navigate to your folder and run 'node app.js'.// will provide port 8080 for the application
  
  Go to your browser and run localhost:8080 and in the fields enter 'a' as username and anything as password since our tables are getting referenced by the username.Why 'a'? Because in the asset collection we only have one entry.
  
  When you press the login button, you will be navigated to another page.
