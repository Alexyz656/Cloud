
var fs = require('fs'),
  request = require('request');
var async = require("async");
var s3Helper = require("./S3Helper");
var async = require("async");
function getPic() {
s3Helper.readFromS3('mexicoder656', 'beach.jpg' , function(error, data){
  if (error) {
    console.log(error);
  }
  else {
    if(data.Metadata.move == 'true'){
    console.log('yes');
      s3Helper.downloadPhoto('mexicoder656', 'beach.jpg', 'beach.jpg')
      var pic = fs.createReadStream('beach.jpg');
      s3Helper.saveInS3('cc116-assignment','beach.jpg', pic, function (error,data) {
        if (error) {
          callback(error);
        }
        else {
          console.log('MEGAYES');
          callback(data);
        }
      });
    }else{
      console.log('no')
    }
  }
  });
}
getPic();
//spacePic();
function spacePic() {

  var url = "https://api.nasa.gov/planetary/apod?api_key=e9scqzaAGOPJWs8PCcoH1jNlT9ShmElqw9LV4BqU";
  var writeStr = fs.createWriteStream('pic.jpg');

  var params = {
    url: url,
    json: 'true'
  };

  request(params, function(err, opt, callback){
    if(err){
      console.log(err);
    }
    else{
      request(callback.url).pipe(writeStr);
      console.log(callback.title);
      console.log(callback.date);
      console.log(callback.url);
    }
  });
}
