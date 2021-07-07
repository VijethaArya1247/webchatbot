person = {}
num = false;
opts = ["Human Resource", "Manager", "Personal Asistance", "Information Technology", "Developer", "Tester", "Personal Asistance", "Greater than 2", "1 to 2"];
function bot(msg){
  if(msg == "Human Resource"|| msg == "Information Technology"){
    person["l1"]=msg;
  }else if(msg == "Developer"||msg == "Personal Asistance"||msg == "Manager"||msg == "Tester" ){
    person["l2"] = msg;
  }else if(msg == "Greater than 2"||msg == "1 to 2"){
    person["l3"] = msg;
  }

  
  if(msg == "Human Resource"){
    botChat("Which Category?");
    options("Manager","Personal Asistance");
  }
   if(msg == "Information Technology"){
    botChat("Which Category?");
    options("Developer","Tester");
  }
  if(msg == "Developer"||msg == "Personal Asistance"||msg == "Manager"||msg == "Tester" ){
    botChat("PREVIOUS WORK EXPERIENCE?");
    options("Greater than 2","1 to 2");
  }
  if(msg == "Greater than 2"||msg == "1 to 2"){
    botChat("Enter Your Number");
   num = true; $("#textInput").attr('placeholder','Enter your Phone Number');
  }
}
function userChat(msg){
  if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(msg) && num){
    var userHtml = '<p id="number" class="userText"><span>' + msg + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
   botChat("Thank you we will get back you soon!!!");
    person["l4"] = msg;
 console.log(person);   document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
  }
  else if(opts.includes(msg)){
    var userHtml = '<p class="userText"><span>' + msg + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(userHtml); document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
}else{
   $("#textInput").val("");
}
}
function botChat(msg){
    var botHtml = '<p class="botText"><span>' + msg + '</span></p>';
    $("#textInput").val("");
    $("#chatbox").append(botHtml);
    document.getElementById('userInput').scrollIntoView({block: 'start', behavior: 'smooth'});
}
$("#textInput").keypress(function(e) {
  if(e.which == 13) {
    var rawText = $("#textInput").val();
    if(rawText!=""){
    userChat(rawText);}
  }
});
$("#buttonInput").click(function() {
    var rawText = $("#textInput").val();
  if(rawText!=""){
    userChat(rawText);
  }
});
function options(op1, op2){
var option1 = document.createElement("button");
option1.setAttribute("id",op1);
option1.innerHTML = op1;
$("#option").append(option1);
 var option2 = document.createElement("button");
option2.setAttribute("id",op2);
option2.innerHTML = op2;
$("#option").append(option2);
$("#textInput").attr('placeholder','Select an option');
 $("button").click(function(e){
var data = this.innerHTML
  userChat(data);
  $("#option").empty();
   bot(data);
})
}
options("Human Resource","Information Technology");