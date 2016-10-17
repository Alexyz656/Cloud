'use strict';
var jwt = require("jsonwebtoken")

module.exports.handler = function(event, context, cb) {
  var policy = {
    "principalId": "arn:aws:iam::717454164754:user/jax.jaquez@gmail.com",
    "policyDocument": {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Deny",
          "Action": [
            "execute-api:Invoke",
            "lambda:Invoke"
          ],
          "Resource": [
            "*"
          ]
        }
      ]
    }
  };
  jwt.verify(event.authorizationToken,"123)(*qpzm",function (error, decoded){

    if(error){
      return cb(null, policy);
    }

    if(decoded.username === "alexyz"){
      policy.policyDocument.Statement[0].Effect = "Allow"
    }
    cb(null, policy);

  });

};
