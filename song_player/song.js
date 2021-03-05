
var songs = [
    {
      "name":"For whom the bells toll",
      "artist":"Metallica",
      "place": "../songs/song_0/song_0.mp3"
    },
    {
      "name":"Livgardet",
      "artist":"Sabaton",
      "place": "../songs/song_1/song_1.mp3"
    },
    {
      "name":"Astronaut In The Ocean",
      "artist":"Masked Wolf",
      "place": "../songs/song_2/song_2.mp3"
    },
    {
      "name":"Devil Eyes",
      "artist":"Hippie Sabotage",
      "place": "../songs/song_3/song_3.mp3"
    },
    {
      "name":"Twisted",
      "artist":"Missio",
      "place": "../songs/song_4/song_4.mp3"
    },
    {
      "name":"Bloodwater",
      "artist":"Grandson",
      "place": "../songs/song_5/song_5.mp3"
    },
    {
      "name":"Ghost Town",
      "artist":"Layto, Neoni",
      "place": "../songs/song_6/song_6.mp3"
    },{
      "name":"Rescue Me",
      "artist":"OneRepublic",
      "place": "../songs/song_7/song_7.mp3"
    },{
      "name":"Absolute Zero",
      "artist":"Stone Sour",
      "place": "../songs/song_8/song_8.mp3"
    },{
      "name":"After the Rain",
      "artist":"Nickelback",
      "place": "../songs/song_9/song_9.mp3"
    },
    {
      "name":"Bosanska artljerja",
      "artist":"sluchaen bosnenec",
      "place": "../songs/song_10/song_10.mp3"
    },
    {
      "name":"",
      "artist":"",
      "place": "../songs/song_11/song_11.mp3"
    },
    {
      "name":"",
      "artist":"",
      "place": "../songs/song_12/song_12.mp3"
    },
    {
      "name":"",
      "artist":"",
      "place": "../songs/song_13/song_13.mp3"
    },
    {
      "name":"",
      "artist":"",
      "place": "../songs/song_14/song_14.mp3"
    }];
//pseudo-databas-i zashtoto nqkakuv sluchaen chrome protokol mi blokira XMLHtpp requestovete

    var song_id=0;
function myFunction() {
  //test za id
  if(song_id!=10){
    song_id++;
  }else{
    song_id=0;
  }

    console.log(document.getElementById('loc'));
    document.getElementById("loc").src=songs[song_id].place;
    document.getElementById("b").load();

}
// function song_switcher(var song_choice){
//   //da napravq 1-4 za fav i 5-8 za recommended
//   //da vzima song_id ot veche kalkulirani recom i fav-ove
// }
