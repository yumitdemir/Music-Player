class MusicPlayer{
    constructor(musicList) {
        this.musicList = musicList;
    }
    next() {
        if(index + 1 != this.musicList.length) {
            index++;
            return index
        }
        else {
             index = 0;
             return index
        }
    }
    prev() {
        if(index !=0) {
            index--;
            return index
        }
        else {
             index = 0;
             return index
        }
    }
    

}

let index = 0