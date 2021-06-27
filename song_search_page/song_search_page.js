//js file
//js file

var songs = [
    {
      "name":"fashion week",
    },
    {
      "name":"twisted",
    },
    {
      "name":"bloodwater",
    },
    {
      "name":"livgardet",
    },
    {
      "name":"for whom the bell tolls",
    },
    {
      "name":"astronaut in the ocean",
    },
    {
      "name":"devil eyes",
    },{
      "name":"ghost town",
    },{
      "name":"rescue me",
    },{
      "name":"after the rain",
    },
    {
      "name":"the great war",
    },
    {
      "name":"wellerman",
    },
    {
      "name":"",
    },
    {
      "name":"",
    },
    {
      "name":"",
    }];
//pseudo-databas-i zashtoto nqkakuv sluchaen chrome protokol mi blokira XMLHtpp requestovete

//function za dali se sudurja ime v imenata na pesnite
function search(ime){
  console.log(ime);
  var matching_songs_id = new Array(15);
  var broi_pesni=0;
  for(var i=0;i<15;i++){
    console.log(songs[i].name.includes(ime));
    if(songs[i].name.includes(ime)){
      matching_songs_id[broi_pesni]=i;
      broi_pesni++;
    }
  }
  console.log(broi_pesni);

  //pechatane na namerenite pesni
  var button = new Array(15);
  var button_link = new Array(15);
  var j = 0;
  for (var i = 0; i < broi_pesni; i++) {
    var id_name = "b_" + i;
    button[i] = document.createElement('button');
    button[i].innerHTML=songs[matching_songs_id[i]].name;
    button_link[i]="../home.html?song_v="+matching_songs_id[i];

    console.log(button_link[i] + " " + i)
    button[i].onclick = function(){
      var str = this.id;
      str = str.charAt(2);
      window.location=button_link[str];
    }
    console.log(button[i].onclick)
    button[i].id = id_name;
    document.body.appendChild(button[i]);
  }
  for (var i = 0; i < broi_pesni; i++) {
    console.log(button_link[i])
    console.log(button[i].onclick)
  }
}

/*function nz(){
  for (var i = 0; i < broi_pesni; i++) {
    var id_name = "b_" + i;

    document.getElementById(id_name).style="position: absolute; left: 5%; top: 20%; height: 10%; width: 90%; background-color: white; border:none;";
    document.getElementById(id_name).onclick="location.href='example.com'"";
  }
}*/



window.addEventListener('load', function () {
  var qs = new URLSearchParams(window.location.search);
  var ime = qs.get("ime");
  console.log(ime);
  search(ime);
});
