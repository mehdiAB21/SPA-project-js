let $ = document


/////////////////////////////////////////////////////////
import router from "./router.js";

let content = document.querySelector(".content")

document.addEventListener("click", (event)=>{
    event.preventDefault()
    if(event.target.className.includes("blog")){
        window.history.pushState({},"",event.target.parentElement.href)
        
        locationhandler()
    }
})

async function locationhandler(){
    const loc = window.location.pathname
    const rout = router[loc] || router[404]
    console.log(rout)
    let html = await fetch(rout).then(res => res.text())

    content.innerHTML = html
}

window.onpopstate = locationhandler

