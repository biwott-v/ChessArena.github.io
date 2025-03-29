document.addEventListener("DOMContentLoaded",()=>
  {
      let background = document.body;
      let brightness = document.querySelector("#brightnessImage");
      
      if (brightness) {
        console.log("hello")
        brightness.addEventListener("click", (event) => {
          if (brightness.getAttribute('src').endsWith("components/brightness-high-fill.png")) {
            brightness.src = "components/moon-stars-fill.png";
            background.style.backgroundColor = "#10131c";
          } else {
            brightness.src = "components/brightness-high-fill.png";
            background.style.backgroundColor = "#e4edf4";
          }
        });
      } 
    /*let imageScroll=document.querySelectorAll(".scroll");
    imageScroll.addEventListener("mouseover",(event)=>{
      imageScroll.boxShadow ="2px 2px 8px #4d8fc8a"   
    })*/
    let mainDiv=document.querySelector("#main"),i=0;
    fetch("www.chess.com.json")
    .then(response=>response.json())
    .then((data)=>{
      console.log(data)
      data.events.forEach((adata)=>{
        let newDiv=document.createElement("div");
        let btn =document.createElement("button");
        btn.innerHTML="<big>▽</big>"
        btn.addEventListener("click",(event)=>{
          if(btn.textContent==="▽"){
            btn.innerHTML="<big>△</big>";
            let childDiv=document.createElement("div");
          }
          else if(btn.textContent==="△"){
            btn.innerHTML="<big>▽</big>";
          }
        })
        newDiv.innerHTML=`<img src="${data.images[i]}" height="100" width="156"><p>${adata}</p><br>`
        //newDiv.appendChild(btn);
        btn.style.height="30px";
        btn.style.width="30px";
        btn.style.backgroundColor="#2c2a29"
        newDiv.setAttribute("class","box")
        mainDiv.appendChild(newDiv);
        i+=1;
   })
    .catch((error)=>{
      alert("An error occured")
    })
 })
})
