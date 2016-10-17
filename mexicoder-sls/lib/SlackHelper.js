var AWS =require("aws-sdk");
AWS.config.update({
  region:"us-east-1"
});
var request = require("request");

module.exports.SlackMessages = function(event, callback){
  var json = JSON.parse(event.Records[0].Sns.Message);
  var mess = json.commits[0].message;
  var commit = json.commits[0].author.username;
  var repo = json.repository.name;
  var text = commit + 'just pushed changes 2 ' + repo + mess;
  request.post("https://slack.com/api/chat.postMessage?token=xoxp-843786523754884-897843548658-89097983906-b215cefrcuudcb151554ab90898udcf51&channel=projectlemon&text="+ text +"&pretty=1");
  console.log(mess);
  console.log(commit);
  console.log(repo);
  console.log(text);
}
module.exports.SlackApp = function(mensaje, callback){
  request.post("https://slack.com/api/chat.postMessage?token=xoxp-84323754884-84354768658-89090183906-b215cfe9edcb151554ab908397edcf51&channel=projectlemon&text=" + mensaje.mensaje +"&pretty=1")
}
