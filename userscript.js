// ==UserScript==
// @name       AutoLogin for Hyperplanning
// @namespace  		none
// @version    1.0
// @description  Automatically logs you in to HyperPlanning
// @match		https://web.ipsa.fr/hp/etudiant
// @copyright  		created by Chris de Claverie (IPSA)
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

	var login = "[your login here]";
	var password = "[your password here]";

$(document).ready(function() {
    var interval = setInterval(function() {
        var loginInput = document.getElementById("GInterface.Instances[0].Instances[0].idIdentification.bouton_Edit");
        if(loginInput != null) {
            clearInterval(interval);
            
            $(loginInput).val(login.substring(0, login.length-1));
            $(loginInput).blur();
	
            var passwordInput = document.getElementById("GInterface.Instances[0].Instances[0]_password");
            $(passwordInput).focus();
            
            setTimeout(function() {
                $(passwordInput).val(password);
                $(passwordInput).blur();
	
                var connectButton = document.getElementById("GInterface.Instances[0].Instances[0].idBtnConnexion");
                $(connectButton).click();
                
                setTimeout(function() {
                    $("span:contains('en grille')")[0].click();
                }, 2000);
            }, 2000);
        }
    }, 200);
    
});
