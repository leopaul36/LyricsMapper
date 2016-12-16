var billboard = require("billboard-top-100").getChart;
var l = require("lyric-get");
var fs = require('fs');

var charts = [];
var lyrics = [];

var date = '2016-12-10'

//First we get the Top 100 of a given date
billboard('hot-100', date, function(songs, err){

    songs.forEach(function(song) {
      var songArray = [song.artist, song.title, song.rank];
      charts.push(songArray);
    });

    charts.forEach(function(song) {
      l.get(song[0], song[1], function(err,res) {
        //Lyrics not found
        if(err){
            console.log(err);
        }

        //Lyrics found
        else{

            //First we remove all the commas and \n and quotes and stuff like this
            res = res.replace(/,|\n|\'/g , " ").toLowerCase();
            lyrics.push([[song[0]+song[1],res]]);
            console.log(song[0]+song[1]);

            fs.appendFile('test.json', JSON.stringify({ artist:song[0], title:song[1], date:date, rank:song[2], lyrics:res }, null, 4));
            fs.appendFile('test.json', ',');
        }
      });
    });
});
