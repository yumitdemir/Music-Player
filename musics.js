class Music{
    constructor(title,maker,image,song){
        this.title=title
        this.maker=maker
        this.image=image
        this.song=song
    }
}

const musicList = [
    new Music("TestSong1", "musician1","1.jpg","1.mp3"),    
    new Music("TestSong2", "musician2","2.jpg","2.mp3"),    
    new Music("TestSong3", "musician3","3.jpg","3.mp3")    
];

console.log(musicList[0])
