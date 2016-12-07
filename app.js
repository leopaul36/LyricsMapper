var billboard = require("billboard-top-100").getChart;
//var lyr = require("lyrics-fetcher");
var l = require("lyric-get");

var charts = [];

//First we get the Top 100 of a given date
billboard('hot-100', '2016-08-27', function(songs, err){

    songs.forEach(function(song) {
      var songArray = [song.artist, song.title, song.rank];
      charts.push(songArray);
    });

    console.log(charts);
});

//Lyrics fetch
l.get("Justin Bieber", "Sorry", function(err, res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
});