
 //YOUTUBE CLASS START FROM HERE
 /*
 NAME,
 ID,
 SUBCRIBER,
 LIKES,
 DISLIKE,
 VIEWS,
 TIME,
 */
class Youtube{
    nameOfHost : string;
    title : string;
    id : number;
    subcriber : number;
    likes : number;
    dislike : number;
    views : number;
    time : string;

    constructor(nameOfHost:string, title:string, id:number, subcriber: number, likes:number, dislike: number, views:number, timeOfupload:string){
        this.nameOfHost = nameOfHost;
        this.title = title;
        this.id = id;
        this.subcriber = subcriber;
        this.likes = likes;
        this.dislike = dislike;
        this.views = views;
        this.time = timeOfupload;
    }//constructor end 
    getYoutubeName = ()=>{
        return this.title;
    }
    getNameOfHost = ()=>{
        return(this.nameOfHost);
    }
}// end of class

let YoutubeDetails = new Youtube("saurabh","concept of angular2",60009,6565,5000,3000,5,"5 month ago")
console.log("title of the video :" + " " + YoutubeDetails.getYoutubeName());
console.log("Name of the host :" + " " + YoutubeDetails.getNameOfHost());
