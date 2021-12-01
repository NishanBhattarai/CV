//Not Working Email Handler
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    Email.send({
        Host: "smtp.gmail.com",
        To : 'nishanbhatt60@gmail.com',
        From : email,
        Subject : subject + name,
        Body : message,
    })
    .then(function(message){
        alert("mail sent successfully")
    });
}

// Toggle The About Me Properties
$(".details").hide();
$(".skillsdetails").show();
$("#skills").addClass("highlight");

$("#skills").click(function(){
    $(".skillsdetails").show();
    $(".awardsdetails").hide();
    $(".experiencedetails").hide();
    $(".qualificationdetails").hide();
    $("#awards").removeClass("highlight");
    $("#experience").removeClass("highlight");
    $("#qualification").removeClass("highlight");
    $("#skills").addClass("highlight");
});
$("#awards").click(function(){
    $("#skills").removeClass("highlight");
    $("#experience").removeClass("highlight");
    $("#qualification").removeClass("highlight");
    $("#awards").addClass("highlight");
    $(".skillsdetails").hide();
    $(".awardsdetails").show();
    $(".experiencedetails").hide();
    $(".qualificationdetails").hide();
});
$("#experience").click(function(){
    $("#skills").removeClass("highlight");
    $("#awards").removeClass("highlight");
    $("#qualification").removeClass("highlight");
    $("#experience").addClass("highlight");
    $(".skillsdetails").hide();
    $(".awardsdetails").hide();
    $(".experiencedetails").show();
    $(".qualificationdetails").hide();
});
$("#qualification").click(function(){
    $("#skills").removeClass("highlight");
    $("#awards").removeClass("highlight");
    $("#experience").removeClass("highlight");
    $("#qualification").addClass("highlight");
    $(".skillsdetails").hide();
    $(".awardsdetails").hide();
    $(".experiencedetails").hide();
    $(".qualificationdetails").show();
});


//about me end

//hire me start
var currentyear = new Date();
document.getElementById('year').innerHTML = currentyear.getFullYear();