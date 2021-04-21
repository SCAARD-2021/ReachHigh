const gplay = require('google-play-scraper');
const {appResult} = require('./appResult');
const { run } = require('./sentiment');

const results = new appResult();
var hi='com.facebook.lite';
// var hi = 'com.PloyPlayGames1.RockScissorsPaperOnline1'
var ratings = 3;

const saySomething = (req, res, next) => {
    res.status(200).json({
        body: hi
    });
};

const getApp = (req, res, next) => {
    var appId = req.url.split('app/')[1];
    appId = "com.facebook.lite";
    console.log(appId)
    gplay.app({appId:appId}).then(
        async (app) =>{
            hi = appId;
            ratings = app.score;
            results.setAttractiveness(app.minInstalls,app.editorsChoice,app.free)
            res.status(200).json(results);
        }
    ).catch((err) =>{
      console.log(err)
        res.status(200).json({title:"SCAARD"});
    })
}

const getResults = (req, res, next) => {
  gplay.reviews({
    appId:hi,num:1000}).then(async (reviews) =>{
      let sentiments = await run(reviews.data);

      res.status(200).json(sentiments)
    })
};

const rough = (req, res, next) =>{
  var appId = req.url.split('app/')[1];
    appId = "com.facebook.lite";
    console.log(appId)
    gplay.app({appId:appId}).then(
        async (app) =>{
            hi = appId;
            ratings = app.score;
            results.setAttractiveness(app.minInstalls,app.editorsChoice,app.free)
            res.status(200).json(results);
        }
    ).catch((err) =>{
      console.log(err)
        res.status(200).json({title:"SCAARD"});
    })
}

module.exports.saySomething = saySomething;
module.exports.getApp = getApp;
module.exports.getResults = getResults;
module.exports.rough = rough;