const request = require('request');
const cheerio = require('cheerio');
const async = require('async');
const fs = require('fs');

var option = {
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36"
    }
}

var reg = new RegExp('<a.*?href="(.*?)">(.*?)</a>');
var urlArray = getListUrl(19);
var linkArray = [];

async.eachSeries(urlArray, crawlLinks, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(linkArray.length + " pages in total, please wait...");
        async.eachSeries(linkArray, downloadFile, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("done!");
            }
        });
    }
});

function crawlLinks(url, callback) {
    option.url = url;
    request(option, function(error, res, body) {
        if (!error && res.statusCode == 200) {
            var $ = cheerio.load(body);
            var $resources = $('#myul a');
            $resources.each(function(index, ele) {
                var link = 'http://www.csrc.gov.cn/pub/newsite/fxjgb/scgkfxfkyj/' + $(ele).attr('href').slice(2);
                linkArray.push(link);
            });
            callback(null);
        } else {
            callback(null);
        }
    });
}

function getListUrl(num) {
    var urlArr = ["http://www.csrc.gov.cn/pub/newsite/fxjgb/scgkfxfkyj/index.html"];
    var baseUrl = "http://www.csrc.gov.cn/pub/newsite/fxjgb/scgkfxfkyj/index";
    for (var i = 1; i < num; i++) {
        var url = baseUrl + "_" + i + ".html";
        urlArr.push(url);
    }
    return urlArr;
}

function downloadFile(url, callback) {
    option.url = url;
    request(option, function(error, res, body) {
        if (!error && res.statusCode == 200) {
            var $ = cheerio.load(body);
            var $file = $('script');
            var resultArr = reg.exec($file[1].children[0].data);
            if (resultArr) {
                request.get(url.slice(0, url.lastIndexOf('/')) + resultArr[1].slice(1)).pipe(fs.createWriteStream("./docs/" + resultArr[2]));
            }
            callback(null);
        } else {
            callback(null);
        }
    });
}
