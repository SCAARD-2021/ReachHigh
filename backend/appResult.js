let downloadBorder = 100000

class appResult{
    constructor() {
         this.attractiveness = {downloads:0,editors:0,free:0,firstAverage:0.0};  
         this.trustworthiness= {
                rating: 0.0,
                topPositive:["Best","Good","Wonderful App","Bestest","Super"],
                topNegative:["I won't recommend","Not good","Awful","Very Bad","Bad"],
                percentage: 50.0,
                status: "Believable",
                secondAverage:0.0
              };
        this.finalScore = 0.0;
        this.finalStatus= "Good";}
        
//   finalScore:finalScore,
//   finalStatus:"Good"
      setAttractiveness(minInstalls,editors,free){
        let a = 0 
        let b = 0 
        let c = 0;
        if(minInstalls>downloadBorder){
            this.attractiveness.downloads = 1;
            a = 1;
        }
        if(editors==true){
            this.attractiveness.ediotrs = 1;
            b = 1;
        }
        if(free==true){
            this.attractiveness.free = 1;
            c = 1;
        }
        this.attractiveness.firstAverage = ((a+b+c)/3)*100;
    }

    setTrustworthiness(rate,score,arrPositive,arrNegative){
        this.trustworthiness.rating = rate*2;
        this.trustworthiness.percentage = Math.floor(score*100);
        if(this.trustworthiness.percentage>=70){
            this.trustworthiness.status = "Good"
        }else if(this.trustworthiness.percentage>=40){
            this.trustworthiness.status = "Okay"
        }else{
            this.trustworthiness.status = "Bad"
        }
        this.trustworthiness.topPositive = arrPositive;
        this.trustworthiness.topNegative = arrNegative;
        this.trustworthiness.secondAverage = ((this.trustworthiness.percentage+this.trustworthiness.rating)/110)*100;
    }
}

module.exports = {
    appResult
};
