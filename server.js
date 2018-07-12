/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app     = express();

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

// 静的ファイルの許可
app.use('/top', express.static(__dirname + '/index.html'));
app.use('/dist', express.static(__dirname + '/dist'));


/* 3. 以後、アプリケーション固有の処理 */
app.get("/api/get", function(req, res, next){

});
app.get("/api/set", function(req, res, next){

});

