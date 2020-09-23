window.onload=function(){
  if(window.localStorage.getItem("color")!=null){
    themes.forEach((theme)=>{
      document.body.classList.remove(theme);
    })
    //delete all active from color
    arrColor.forEach((el)=>{
      el.classList.remove('active');
    })
    //all color chose
    let colorLi=window.localStorage.getItem("color");
    let Li;
    arrColor.forEach((e)=>{
      if(e.getAttribute("data-theme")==colorLi)
        Li=e;
    })
    Li.classList.add("active");
    document.body.classList.add(Li.getAttribute("data-theme"));
  }
}
document.getElementById("menu").onclick=(e)=>{
  document.getElementById("menu").classList.toggle("menu-close");
  document.getElementById("nav").classList.toggle("nav-open");
  document.getElementById("first").classList.toggle("first-open");
  document.getElementById("second").classList.toggle("second-open");
  var arr=Array.from(document.querySelectorAll("ul li"));
  arr.forEach((i)=>{
    i.classList.toggle("show");
  })
}
document.getElementById('icon').onclick=function()
{
  document.getElementById('icon').children[0].classList.toggle("active");
  document.getElementById('icon').parentElement.classList.toggle("colors-hide");

}

var arrColor=Array.from(document.querySelectorAll(".color li"));
var themes=[]
arrColor.forEach((e)=>{
  themes.push(e.getAttribute("data-theme"));
})

arrColor.forEach((e)=>{
  e.onclick=function(){
    //delete all themes from body
    themes.forEach((theme)=>{
      document.body.classList.remove(theme);
    })
    //delete all active from color
    arrColor.forEach((el)=>{
      el.classList.remove('active');
    })
    //all color chose
    this.classList.add("active");
    document.body.classList.add(this.getAttribute("data-theme"));
    window.localStorage.setItem("color",this.getAttribute("data-theme"));
  }
})