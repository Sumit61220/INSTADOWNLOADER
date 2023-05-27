var x = document.getElementById('bars');
var me = document.getElementsByClassName('menu')[0];  

x.addEventListener("click", () => {
  if(me.style.display=="none"){
    me.style.display = "block";
  }  else{ 
    me.style.display = "none";
  }
});

