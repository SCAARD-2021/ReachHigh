const gplay = require('google-play-scraper');
const { appResult } = require('./appResult');

const results = appResult;
var hi='com.facebook.lite';

const saySomething = (req, res, next) => {
    res.status(200).json({
        body: hi
    });
};

const getApp = (req, res, next) => {
    const appId = req.url.split('app/')[1]
    console.log(appId)
    gplay.app({appId:appId}).then(
        (app) =>{
            hi = appId;
            res.status(200).json(app);
        }
    ).catch((err) =>{
        res.status(200).json({title:"SCAARD"});
    }
    )
}

const getResults = (req, res, next) => {
  gplay.reviews({
    appId:hi,num:10}).then((reviews) =>{
      res.status(200).json(reviews)
    })
};

module.exports.saySomething = saySomething;
module.exports.getApp = getApp;
module.exports.getResults = getResults;