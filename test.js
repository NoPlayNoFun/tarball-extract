var tarball = require('./tarball')
 
var url = 'http://npnf0.artifactoryonline.com/npnf0/libs-snapshots-local/npnf/DragonBattle/content/126/data_126.tar.gz'
var headers = {
        'User-Agent':       'Super Agent/0.0.1',
        'Content-Type':     'application/x-www-form-urlencoded',
        'Authorization':    'Basic ' + new Buffer('npnf-deploy' + ':' + 'AP2JXAf3bk7khvD8xTiV4goDu6i').toString('base64')
    }
console.log(headers)

tarball.extractTarballDownload(url , '/tmp/data_126.tar.gz', '/tmp/data_126', {headers : headers}, function(err, result) {
  console.log(err, result)
})

