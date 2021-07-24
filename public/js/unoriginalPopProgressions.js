function viewMessages(){
    const messageRef= firebase.database().ref();
    messageRef.on('value', (snapshot) => { 
        const data= snapshot.val();
        const viewSongNameRequest = document.querySelector ("#viewSongName").value;
        const viewSongArtist = document.querySelector ("#viewSongArtist");
        const viewSongName = document.querySelector ("#viewSongName");
        console.log(data);

    for (const recordkey in data){
        const record= data[recordkey];
        const songName= record.Song_Name ;
        const songArtist= record.Artist;
        console.log(record);

    if(viewSongNameRequest.trim()=== songName){
        viewSongName.innerHTML = songName;
        viewSongArtist.innerHTML = songArtist;
        console.log( " I'm here! <3"); 
    }
    }
 });
}

function addSongs (){
    const nameInput = document.querySelector ("#addSongName");
    const artistInput = document.querySelector ("#addSongArtist");
    const nameValue = (document.querySelector ("#addSongName").value).trim();
    const artistValue = (document.querySelector ("#addSongArtist").value).trim();

    firebase.database().ref().push({
        Song_Name:nameValue, Artist:artistValue
    });

    nameInput.value= "";
    artistInput.value= "";
};




