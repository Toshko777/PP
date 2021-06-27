let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Fashion week",
     path: "music/song1.mp3",
     img: "img/img1.jpg",
     singer: "Blackbear"
   },
   {
     name: "Twisted",
     path: "music/song2.mp3",
     img: "img/img2.jpg",
     singer: "Missio"
   },
   {
     name: "Blood//water",
     path: "music/song3.mp3",
     img: "img/img3.jpg",
     singer: "Grandson"
   },
   {
     name: "Livgardet",
     path: "music/song4.mp3",
     img: "img/img4.jpg",
     singer: "Sabaton"
   },
   {
     name: "For whom the bell tolls",
     path: "music/song5.mp3",
     img: "img/img5.jpg",
     singer: "Metallica"
   },
   {
    name: "Astronaut in the ocean",
    path: "music/song6.mp3",
    img: "img/img6.jpg",
    singer: "Masked wolf"
  },
  {
    name: "Devil Eyes",
    path: "music/song7.mp3",
    img: "img/img7.jpg",
    singer: "Hippie sabotage"
  },
  {
    name: "Ghost town",
    path: "music/song8.mp3",
    img: "img/img8.jpg",
    singer: "Layto, Neoni"
  },
  {
    name: "Rescue me",
    path: "music/song9.mp3",
    img: "img/img9.jpg",
    singer: "One Republic"
  },
  {
    name: "After the rain",
    path: "music/song10.mp3",
    img: "img/img10.jpg",
    singer: "Nickelback"
  },
  {
    name: "The great war",
    path: "music/song11.mp3",
    img: "img/img11.jpg",
    singer: "Sabaton"
  },
  {
    name: "Wellerman",
    path: "music/song12.mp3",
    img: "img/img12.jpg",
    singer: "Nathan Evans"
  }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
//	total.innerHTML = All_song.length;
	//present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#48bfe3";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }

	    }
      
     }
     //Alexander Iliev
//Tursene na pesen
function search(){
 var str=document.getElementById('s_b').value;//suzdavame promenliva ime i vzimame teksta ot search_bar
  var ime = str.toLowerCase();// pravi texta
  var link1="../PP-main/song_search_page/song_search_page.html?ime="+ime;//suzdavame promenliva link1

 window.location=link1;//preprashtame kum linka
}


//search SANDo
window.addEventListener('load', function () {
  var qs = new URLSearchParams(window.location.search);
  var v1 = qs.get("song_v");
  console.log(v1);
  load_track(v1);

    // console.log(document.getElementById('loc'));
    // document.getElementById("loc").src=All_song[v1].path;
    // document.getElementById("b").load();

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

