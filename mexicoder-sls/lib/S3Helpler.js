/**
 * Created by hernan on 9/8/16.
 */
/**
 * Created by hernan on 9/3/16.
 */
var AWS = require("aws-sdk");
var s3 = new AWS.S3();
var fs = require("fs");


module.exports.saveInS3 = function(bucket, key, content, callback){
    var params = {
        Bucket: bucket,
        Key: key,
        Body: content,
        ACL: "public-read",
        Metadata: {Move: "true"}
    };

    s3.upload(params, function(error, data){
        if(error){
            callback(error);
        }
        else{
            callback(null, data);
            console.log('almost there');
        }
    });

};

module.exports.readFromS3 = function(bucket, key, callback){
    var params = {
        Bucket: bucket,
        Key: key
    };

    s3.getObject(params, function(error, data){
        if(error){
            callback(error);
        }
        else {
            callback(null, data);
        }
    });

};
module.exports.downloadPhoto = function(bucket, key, stream){

    var params = {
        Bucket: bucket,
        Key: key
    };

    var file = fs.createWriteStream(stream);
    s3.getObject(params).createReadStream().pipe(file);
};

module.exports.listBucketObjects = function (bucket,callback) {
    var params = {
        Bucket:bucket
    }
    s3.listObjectsV2(params,function (error, data) {
        if(error){
            callback(error);
        }else{
            var filenames = data.Contents.map(function (object) {
                return object.Key;
            });
            callback(null, filenames);
        }
    });
}
