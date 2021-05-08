async function windowActions(){
     
        
        const form = document.querySelector('#create')
        const user = document.querySelector('#user').value
        const playlistName = document.querySelector('#namePlaylist').value
        const songs = document.querySelector('#songs').value
        const artist = document.querySelector('#followers').value
        const duration = document.querySelector('#totalTime').value
        
        form.addEventListener('submit', async(event)=> {
            event.preventDefault();
            console.info('submitted form', event.target);
            
            
                
            
            const post = await fetch('/api/playlists',
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({ 
                    'user_id': user,
                    'playlist_name': playlistName,
                    'number_of_songs': songs,
                    'number_of_followers': artist,
                    'total_time': duration})
            })
        });
}
        
    




   

window.onload = windowActions; 
