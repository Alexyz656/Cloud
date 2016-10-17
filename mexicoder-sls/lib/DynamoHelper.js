var AWS = require("aws-sdk");
AWS.config.update({
  region:"us-east-1"
})
var uuid = require("uuid")

var docClient = new AWS.DynamoDB.DocumentClient();
module.exports.saveWeather = function (city, temp, callback) {
  var params ={
    TableName: "HernanTable",
    Item:{
      UserId: uuid.v1(),
      City: city,
      Temp: temp
    }
  };

  docClient.put(params, function (error, data) {
    if(error){
      console.log(error)
    }{
      console.log(data)
      callback(null, 1)
    }
  });
};

module.exports.getAverageTemperature = function (callback) {
  var params ={
    TableName: "HernanTable",
    ProjectionExpression: "City , #Temp",
    ExpressionAttributeNames: {
      "#Temp": "Temp"
    }
  };

  docClient.scan(params , function (error , data) {
    if(error){
      callback(error);
    }else{
      console.log(data);

      var result = {};
      var count = {};
      var sum = {};

      data.Items.forEach(function(value){
        if(sum[value.City]){
          sum[value.City] += value.Temp;
          count[value.City] += 1;
        }else {
          sum[value.City] = value.Temp;
          count[value.City] = 1;
        }

      });

      for(var index in sum){
        result[index] = sum[index]/count[index];

      }












      callback(null , result);
    }

  });
}
