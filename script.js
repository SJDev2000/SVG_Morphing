const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
const moonPath = "M12.5 25C12.5 40.1878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 12.5 9.81217 12.5 25Z" 

const svg = document.querySelector('svg')
const mode = document.querySelector('h1')

let toggle = false

svg.addEventListener('click',() => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    })
    timeline.add({
        targets: ".sun",
        d: [{value: toggle ? sunPath : moonPath}]
    })
    .add({
        targets: "svg",
        rotate: 320
    },"-=350")
    .add({
        targets: ".container",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)"
    },"-=700")
    if(!toggle){
        toggle = true
    }
    else{
        toggle = false
    }
})
