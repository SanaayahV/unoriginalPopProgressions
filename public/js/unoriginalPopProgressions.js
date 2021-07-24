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
    if(viewSongNameRequest.trim()=== songName){
        viewSongName.innerHTML = songName;
        viewSongArtist.innerHTML = record.Artist;
        
    }
    }
    
    
    
 });
}