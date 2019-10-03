$(document).ready(function() {
var mystuff = $('<div class="gdpr-overlay" style="display: none;"><div class="crunchy-cookie-options" ><h1>Cookie Options:</h1><p><a class="unwanted" href="https://cookies.insites.com/">What are cookies?</a> <a class="unwanted" href="/Pages/cookie.html">Cookie Policy</a></p><p class="disabled"><input type="checkbox" checked="checked" disabled> Required Cookies</p><p><input type="checkbox" id="gdpr-cookies-social"> Social Cookies</p><p><input type="checkbox" id="gdpr-cookies-analytics"> Analytical Cookies</p><p><a class="modal" onclick="takeSelected(); $(this).parent().parent().parent().hide();">Save Preferences</a></p><p class="small watermark">HonestGDPR v2.0.1 &copy; Conor Howland</p></div></div>');

var mystuff2 = $('<div class="banner-bottom" id="gdpr-hello" style="display: none;"><p>This Site Uses Cookies to bring you this service and make it more interactive! &middot; <a  href="#" onclick="$(\'.gdpr-overlay\').css(\'display\',\'flex\');">Advanced</a></p><p class="right"><a class="button" onclick="screwIt();">Accept</a><a class="button" onclick="decline();">Decline</a></p></div>');

mystuff.appendTo("body");

mystuff2.appendTo("body");

$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://snaddyvitch-dispenser.github.io/gdpr/gdpr.css"
}).appendTo("head");

$("<link/>", {
   rel: "stylesheet",
   type: "text/css",
   href: "https://fonts.googleapis.com/css?family=Ubuntu"
}).appendTo("head");
    
    
});

$("#gdpr-hello").ready(function() {
setTimeout(function() {
    console.log(getCookie("lc"));
    if (getCookie("lc") == null) {
        $("#gdpr-hello").show();
    } else {
        gdprUnfriendlyCode(getCookie("lc"));
    }
    }, 1);
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

    function screwIt() {
        var expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        document.cookie = "lc=G12; expires=" + expiryDate.toGMTString(); + "; path=/";
        $("#gdpr-hello").hide();
        gdprUnfriendlyCode("G12");
    }

    function decline() {
        var expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        document.cookie = "lc=0; expires=" + expiryDate.toGMTString(); + "; path=/";
        $("#gdpr-hello").hide();
        gdprUnfriendlyCode("G12");
    }

    function takeSelected() {
        if($("#gdpr-cookies-social").is(":checked") || $("#gdpr-cookies-analytics").is(":checked")) {
            var expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 1);
            var cookiable = "G";
            if ($("#gdpr-cookies-social").is(":checked")) {cookiable += "1"}
            if ($("#gdpr-cookies-analytics").is(":checked")) {cookiable += "2"}
            document.cookie = "lc=" + cookiable + "; expires=" + expiryDate.toGMTString(); + "; path=/";
            $("#gdpr-hello").hide();
            $(".gdpr-overlay").css("display","none");
            gdprUnfriendlyCode(cookiable);
        } else {
            var expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 1);
            document.cookie = "lc=0; expires=" + expiryDate.toGMTString(); + "; path=/";
            $("#gdpr-hello").hide();
            $(".gdpr-overlay").css("display","none");
        }
    }
