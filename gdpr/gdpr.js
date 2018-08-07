$(document).ready(function() {
var mystuff = $('<div class="gdpr-overlay" style="display: none;"><div class="conors-crunchy-cookie-options" ><h1>Cookie Options:</h1><p><a class="unwanted" href="https://cookies.insites.com/">What are cookies?</a> <a class="unwanted" href="/Pages/cookie.html">Cookie Policy</a></p><p class="disabled"><input type="checkbox" checked="checked" disabled> Required Cookies</p><p><input type="checkbox" id="gdpr-cookies-social" checked="checked"> Social Cookies</p><p><a class="modal" onclick="screwIt(); $(this).parent().parent().parent().hide();">Accept All &amp; Continue</a></p><p><a class="unwanted" onclick="takeSelected();">Save Preferences</a></p><p class="small watermark">SimplyGDPR by Conor Howland</p></div></div>');

var mystuff2 = $('<div class="banner-bottom" id="gdpr-hello" style="display: none;"><p>This Site Uses Cookies to bring you this service and make this more interactive! &middot; <a  href="#" onclick="$(\'.gdpr-overlay\').css(\'display\',\'flex\');">Learn More</a></p><p class="right"><a class="button" onclick="screwIt();">Got It!</a></p></div>');

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
    if (getCookie("likescookies") == null) {
        $("#gdpr-hello").show();
    } else if (getCookie("likescookies") == 1) {
        gdprUnfriendlyCode();
    }
    }, 1);
});

function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    } 

    function screwIt() {
        var expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        document.cookie = "likescookies=1; expires=" + expiryDate.toGMTString(); + "; path=/";
        $("#gdpr-hello").hide();
        gdprUnfriendlyCode();
    }

    function gdprUnfriendlyCode() {
        //Code Here!
    }

    function takeSelected() {
        if($("#gdpr-cookies-social").is(":checked")) {
            var expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 1);
            document.cookie = "likescookies=1; expires=" + expiryDate.toGMTString(); + "; path=/";
            $("#gdpr-hello").hide();
            $(".gdpr-overlay").css("display","none");
            gdprUnfriendlyCode();
        } else {
            var expiryDate = new Date();
            expiryDate.setMonth(expiryDate.getMonth() + 1);
            document.cookie = "likescookies=0; expires=" + expiryDate.toGMTString(); + "; path=/";
            $("#gdpr-hello").hide();
            $(".gdpr-overlay").css("display","none");
        }
    }
