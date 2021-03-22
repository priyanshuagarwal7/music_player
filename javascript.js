
let playingAudio = document.getElementById('playbutton')
let nextbtn = document.getElementById('nextbutton')
let prevbtn = document.getElementById('prevbutton')
let loopbtn = document.getElementById('loopbtn')
let range = document.getElementById('hp_range')

const arr = ['src1','src2','src3','src4']

let i=0
let count =0
let nextcount = 0
let prevcount= 0
let audioelement = document.getElementById(arr[i])

playingAudio.addEventListener('click',()=>{
    count = count +1
    let time  = audioelement.duration
    let currentTime = audioelement.currentTime
    if(count%2!=0){
        audioelement.play()
    }
    else{
        audioelement.pause()
    }
    // console.log(time)
    // console.log(currentTime)
    range.style.width = 0
    range.style.backgroundColor = "black"
    range.style.animationDuration = time
    range.style.animationIterationCount = 1
})

nextbtn.addEventListener('click',()=>{
    if(i!=arr.length){
        audioelement.pause()
        audioelement.currentTime = 0
        i = i+1
        audioelement = document.getElementById(arr[i])
        nextcount = nextcount+1
        let time  = audioelement.duration
        if(nextcount%2!=0){
            audioelement.play()
        }
        else{
            audioelement.pause()
        }
        // range.style.animation = "move time 1"
        range.style.width = 0
        range.style.backgroundColor = "black"
        range.style.animationDuration = time
        range.style.animationIterationCount = 1
    }
})

prevbtn.addEventListener('click',()=>{
    if(i!=0){
        audioelement.pause()
        audioelement.currentTime = 0
        i = i-1
        audioelement = document.getElementById(arr[i])
        prevcount = prevcount+1
        let time  = audioelement.duration
        if(prevcount%2!=0){
            audioelement.play()
        }
        else{
            audioelement.pause()
        }
        // range.style.animation = "move time 1"
        range.style.width = 0
        range.style.backgroundColor = "black"
        range.style.animationDuration = time
        range.style.animationIterationCount = 1
    }
})

loopbtn.addEventListener('click',()=>{
    audioelement.loop = true
    audioelement.load()
    let time  = audioelement.duration
    // range.style.animation = "move time 1"
    range.style.width = 0
    range.style.backgroundColor = "black"
    range.style.animationDuration = time
    range.style.animationIterationCount = Infinity
})


