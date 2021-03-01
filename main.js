function dropdown(id){
  document.getElementById("answer" + id).classList.toggle("show");
  if(document.getElementById("question" + id).style.fontWeight !== "700"){
    document.getElementById("question" + id).style.fontWeight = "700";
    document.getElementById("arrow" + id).style.transform = "rotate(180deg)";
  }else {
    document.getElementById("question" + id).style.fontWeight = "400";
    document.getElementById("arrow" + id).style.transform = "rotate(0deg)";
  }

}
