$(document).ready(function(){
    $(".fa-bars").click(function(){
        document.getElementById("big-menu").style.width = "100%"; 
        $("#navigation").hide();
    });
    $(".closebtn").click(function(){
        document.getElementById("big-menu").style.width = "0%";
        $("#navigation").show();        
    });
});