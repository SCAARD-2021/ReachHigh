const gplay = require('google-play-scraper');

var hi;

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
            hi = app.ratings;
            res.status(200).json(app);
        }
    ).catch((err) =>{
        res.status(200).json({title:"SCAARD"});
    }
    )
}

const getResults = (req, res, next) => {
	console.log(5)
    let downloads = 1;
    let editors = 1;
    let free =1;
    let firstAverage = ((downloads+editors+free)/3)*100;
  // TrustWorthiness
  let rating = 4*2;
  let percentage = Math.floor(0.65824*100);
  let status = "Good";
  let secondAverage = ((percentage+rating)/110)*100;
  // Final
  let finalScore = (firstAverage*30+secondAverage*70)/100
    res.status(200).json({
      attractiveness:{
        downloads:downloads,
        editors:editors,
        free:free,
        firstAverage:firstAverage,
      },
      trustworthiness:{
        rating: rating,
        topPositive:["Best","Good","Wonderful App","Bestest","Super"],
        topNegative:["I won't recommend","Not good","Awful","Very Bad","Bad"],
        percentage: percentage,
        status: status,
        secondAverage:secondAverage
      },
      finalScore:finalScore,
      finalStatus:"Good"
    })
  };

module.exports.saySomething = saySomething;
module.exports.getApp = getApp;
module.exports.getResults = getResults;