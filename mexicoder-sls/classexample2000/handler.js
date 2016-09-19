'use strict';
var s3Helper = require('../lib/S3Helpler');

module.exports.handler = function(event, context, cb) {
  s3Helper.listBucketObjects(event.bucket, function ( error, data) {
    cb(null,data);
  });
};
