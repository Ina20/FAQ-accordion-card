function dropdown(id){
  document.getElementById("answer" + id).classList.toggle("show");
  if(document.getElementById("question" + id).style.fontWeight !== "700"){
    document.getElementById("question" + id).style.fontWeight = "700";
  }else {
    document.getElementById("question" + id).style.fontWeight = "400";
  }

}
