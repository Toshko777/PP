
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
    var song_wanted=null;

    var song_id_chosen = new Array(null, null, null, null);

function songPreprashtach(i){
  //promenqme song_wanted s id na pesenta, koqto iskame
  song_wanted=i;

  console.log(document.getElementById('loc') + "       j");
  //
  document.getElementById("loc").src=songs[song_id].place;
  document.getElementById("b").load();

}
window.addEventListener('load', function () {
  var qs = new URLSearchParams(window.location.search);
var v1 = qs.get("song_v");
console.log(v1);

    console.log(document.getElementById('loc'));
    document.getElementById("loc").src=songs[v1].place;
    document.getElementById("b").load();

    //test
    var logo_width;
    var w = window.innerWidth;
    var h = window.innerHeight;
    logo_width = Math.round((h/100)*5);
    console.log(logo_width);
    document.getElementById("logo_button").style.width=logo.width;
    console.log(Math.round((h/100)*5));
})
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
//recommend_button functions
function b0(){
  window.location="../spotify_clone_VBVS/song_player/song_player.html?song_v="+song_id_chosen[0];
}
function b1(){
  window.location="../spotify_clone_VBVS/song_player/song_player.html?song_v="+song_id_chosen[1];
}
function b2(){
  window.location="../spotify_clone_VBVS/song_player/song_player.html?song_v="+song_id_chosen[2];
}
function b3(){
  window.location="../spotify_clone_VBVS/song_player/song_player.html?song_v="+song_id_chosen[3];
}
//prepares recommended songs
window.onload = function recommender(){
  var id_temp = "b_r_";

  //tazi chast e za sluchaini pesni
  for(var i = 0; i<4; i++){
    id_temp = "b_r_" + i;
    console.log(id_temp);
    song_id_chosen[i]=Math.round(Math.random()*10);
    //proverqva za duplikati i gi promenq
    for(var j = 0; j<i; j++){
        if(song_id_chosen[i]==song_id_chosen[j]){
          song_id_chosen[i]=Math.round(Math.random()*10);
        }
    }
    //zapisva imeto na pesenta na suotvetnite im butoni
    var span = document.getElementById(id_temp);
    var txt = document.createTextNode(songs[song_id_chosen[i]].name);
    span.appendChild(txt);
  }
}
//Alexander Iliev
//Tursene na pesen
function search(){
    var str=document.getElementById('s_b').value;//suzdavame promenliva ime i vzimame teksta ot search_bar
    var ime = str.toLowerCase();// pravi texta
    var link1="../spotify_clone_VBVS/song_search_page/song_search_page.html?ime="+ime;//suzdavame promenliva link1

    window.location=link1;//preprashtame kum linka
}


// function song_switcher(var song_choice){
//   //da napravq 1-4 za fav i 5-8 za recommended
//   //da vzima song_id ot veche kalkulirani recom i fav-ove
// }
