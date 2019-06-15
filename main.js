$(document).ready(function(){

    var date = new Date();

    var day = date.getUTCDate();
    var month = date.getUTCMonth() + 1;
    var year = date.getUTCFullYear();
    
    $("#time").html( day + '/' + month + '/' + year );
    $('#year').html('@' + year)
});