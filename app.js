let img = document.getElementById("img");
let artist = document.getElementById("artist");
let title = document.getElementById("music-title");
let time = document.getElementById("time");
let duration = document.getElementById("duration");
let next = document.getElementById("next")
let play = document.getElementById("play")
let prev = document.getElementById("prev")
let audio = document.getElementById("audio")
let progressBar = document.getElementById("progres-bar")
let volumeBar = document.getElementById("volumeBar")
let volume = document.querySelector("#volume");
let musicListul = document.getElementById("listul")


const player = new MusicPlayer(musicList);


window.addEventListener("load", function(){
    displaMusic(musicList[0])
    showMusicList(musicList)
   
})




function displaMusic(music){
    title.innerText=music.title
    artist.innerText=music.maker
    img.src= "img/"+music.image
    audio.src = "mp3/" + music.song;
}



audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = audio.duration;
    
});

audio.addEventListener("timeupdate", function(){
    progressBar.value = Math.floor(audio.currentTime);
    time.textContent = calculateTime(progressBar.value);
})

play.addEventListener("click", function(){
    if (play.classList.contains("playing")){
        play.classList = "fa-solid fa-play  "
        audio.pause();
    }else{
        play.classList ="fa-solid fa-pause  playing"
        audio.play();
    }
    
})



next.addEventListener("click", function(){
    displaMusic(musicList[player.next()])
    play.classList = "fa-solid fa-play  "
    audio.pause();
    
    console.log(index)
})

prev.addEventListener("click", function(){
    displaMusic(musicList[player.prev()])
    play.classList = "fa-solid fa-play  "
    audio.pause();
})


const calculateTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    const updatedTime = sec < 10 ? `0${sec}`: `${sec}`;
    const result = `${min}:${updatedTime}`;
    return result;
}

progressBar.addEventListener("input", function(){
    time.textContent = calculateTime(progressBar.value)
    audio.currentTime = progressBar.value;
})

let soundStatus = "audible";

volumeBar.addEventListener("input", (e) => {
    const value = e.target.value;
    audio.volume = value / 100;
    if(value == 0) {
        audio.muted = true;
        soundStatus = "silent";
        volume.classList = "fa-solid fa-volume-xmark";
    } else {
        audio.muted = false;
        soundStatus = "audible";
        volume.classList = "fa-solid fa-volume-high";
    }
});

volume.addEventListener("click", () => {
    if(soundStatus==="audible") {
        audio.muted = true;
        soundStatus = "silent";
        volume.classList = "fa-solid fa-volume-xmark";
        volumeBar.value = 0;
    } else {
        audio.muted = false;
        soundStatus = "audible";
        volume.classList = "fa-solid fa-volume-high";
        volumeBar.value = 100;
    }
});

function showMusicList(musicList){
    
    for(let i=0; i < musicList.length; i++) {
        let liTag = `
         <li id="li${i}" class="list-group-item d-flex justify-content-between align-items-center">
                <span>${musicList[i].title}-${musicList[i].maker}</span>
                <span id="music-${i}" class="badge bg-primary rounded-pill"></span>
        </li> `;
        
        musicListul.insertAdjacentHTML("beforeend", liTag);

        var el = document.getElementById(`li${i}`);
        if (el){
            el.addEventListener("click", function(){
                index=i;
                displaMusic(musicList[i])
            })
        }

        
    }
}