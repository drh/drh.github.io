/*
 * menuDropdown.js - implements an dropdown menu based on a HTML list
 * Author: Dave Lindquist (http://www.gazingus.org)
 */

var currentMenu = null;

if (!document.getElementById)
    document.getElementById = function() { return null; }

function initializeMenu(menuId, actuatorId) {
    
    var actuator = document.getElementById(actuatorId);
    if (menuId == null && actuator != null) {
    	actuator.onmouseover = function() {
    		if (currentMenu)
    			currentMenu.style.visibility = "hidden";
    	}
    	return;
    }
    
    var menu = document.getElementById(menuId);

    if (menu == null || actuator == null) return;

    //if (window.opera) return; // I'm too tired
    
    actuator.onmouseover = function() {
        if (currentMenu)
            currentMenu.style.visibility = "hidden";
        this.showMenu();
    }
  
    actuator.onclick = function() {
        if (currentMenu == null) {
            this.showMenu();
        }
        else {
            currentMenu.style.visibility = "hidden";
            currentMenu = null;
        }

        return false;
    }

    actuator.showMenu = function() {
        menu.style.left = this.offsetLeft + "px";
        menu.style.top = this.offsetTop + this.offsetHeight + "px";
        menu.style.visibility = "visible";
        currentMenu = menu;
    }
}
