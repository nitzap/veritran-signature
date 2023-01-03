function addtelefono()
{
var telefono = document.getElementById("telefono");
var s = telefono.value;
document.getElementById('telefono1').innerHTML = s
}

function addcelular()
{
var celular = document.getElementById("celular");
var s = celular.value;
document.getElementById('celular1').innerHTML = s
}

function adddomicilio()
{
var domicilio = document.getElementById("domicilio");
var s = domicilio.value;
document.getElementById('domicilio1').innerHTML = s
}

function addemail()
{
var email = document.getElementById("email");
var s = email.value;
document.getElementById('email1').innerHTML = s
document.getElementById('email1').href="mailto:"+s;
}

function addemailuo()
{
var emailuo = document.getElementById("emailuo");
var s = emailuo.value;
document.getElementById('emailuo1').innerHTML = s;
document.getElementById('emailuo1').href="mailto:"+s;

document.getElementById('separador1').innerHTML = " | ";
}
$(document).ready(function (e) {
$("#uploadimage").on('submit',(function(e) {
e.preventDefault();
$("#message").empty();
$('#loading').show();
$.ajax({
url: "ajax_php_file.php", // Url to which the request is send
type: "POST", // Type of request to be send, called as method
data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
contentType: false, // The content type used when sending data to the server.
cache: false, // To unable request pages to be cached
processData:false, // To send DOMDocument or non processed data file it is set to false
success: function(data) // A function to be called if request succeeds
{
if(data=="Invalid file Size or Type")
{
$('#message1').html(data);
$("#message").css("color","red");
$("#message").html("(size should be less then 2 mb)");
}
else{
$('#previewing1').attr('src',data);
$('#message1').html('image uploaded successfully');
$('#image_preview1').css('display', 'inline-block');
/*$('#previewing').attr('src',data);
$('#previewing').attr('src',"upload/DSC_0126.jpg");
$('#previewing').attr('src',"http://localhost/Create-Email-Signature/upload/DSC_0126.jpg");*/
}
}
});
}));
// Function to preview image after validation
$(function() {
$("#file").change(function() {
$("#message").empty(); // To remove the previous error message
var file = this.files[0];
var imagefile = file.type;
var match= ["image/jpeg","image/png","image/jpg"];
if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
{
$('#previewing').attr('src','noimage.png');
$("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
return false;
}
else
{
var reader = new FileReader();
reader.onload = imageIsLoaded;
reader.readAsDataURL(this.files[0]);
$( "#uploadimage" ).submit();
}
});
});
function imageIsLoaded(e) {
$("#file").css("color","green");
$('#image_preview').css("display", "block");
/*$('#previewing').attr('src', e.target.result);*/
$('#previewing').attr('width', '250px');
$('#previewing').attr('height', '230px');
$('#previewing1').attr('width', '81');
$('#previewing1').attr('height', '80');
};
});