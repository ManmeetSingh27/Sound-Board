const sounds =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25']

sounds.forEach(sound => {

    const btn = document.createElement('button')
    btn.classList.add('btn')

    

    btn.addEventListener('click',() => {
        stopSongs()

        document.getElementById(sound).play()
    })

    document.getElementById('button').appendChild(btn)

})

function stopSongs() {
    sounds.forEach(sound => {
        const song =document.getElementById(sound)
        song.pause()
        song.currentTime=0;

    })
}