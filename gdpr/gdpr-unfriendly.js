gdprUnfriendlyCode = function(allowed = null) {
            if (allowed!=null) {
                allowed = getCookie("likescookies");
            }
            if (allowed.indexOf("1") !== -1) {
                //Social Allowed
            }
            if (allowed.indexOf("2") !== -1) {
                //Analytics Allowed
            }
        }
