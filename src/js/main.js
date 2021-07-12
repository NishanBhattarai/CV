
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