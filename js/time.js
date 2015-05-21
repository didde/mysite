// time.js

(function() {
    'use strict';
	var x = new Date();	
	// Minus sign is ahead of UTC; Sweden is UTC-2
	var currentTimeZoneOffsetInHours = Math.round((x.getTimezoneOffset() / 60));
	var h = Math.abs(currentTimeZoneOffsetInHours+2);
	var hn = h.toString();

	var strINIT = "Your browser indicates that";

	var strA = ""; 
	var strB = " your time zone is ";
	var strC = strB.concat(hn);

	var strD = "";
	var strTimePos ="";
	var strFinalMsg ="";
	
	// client West of London <= UTC	
	if (currentTimeZoneOffsetInHours >= 0) {
		strD = strINIT.concat(strC);
		strTimePos = " hours behind my time zone.";
		strFinalMsg = strD.concat(strTimePos);
	}

	// client in London UTC+1
	if (currentTimeZoneOffsetInHours === -1) {
		strD = strINIT.concat(strC);
		strTimePos = " hour behind my time zone.";
		strFinalMsg = strD.concat(strTimePos);
	}

	// client in Sweden UTC+2
	if (currentTimeZoneOffsetInHours === -2) {
		strA = " you are located in the same time zone as I am.";
		strFinalMsg = strINIT.concat(strA);
	}
	
	// client in Moscow UTC+3
	if (currentTimeZoneOffsetInHours === -3) {
		strD = strINIT.concat(strC);
		strTimePos = " hour in advance of my time zone.";
		strFinalMsg = strD.concat(strTimePos);
	}
	// client East of Moscow >= UTC+3
	if (currentTimeZoneOffsetInHours <= -4) {
		strD = strINIT.concat(strC);
		strTimePos = " hours in advance of my time zone.";
		strFinalMsg = strD.concat(strTimePos);

	}

	if (h>3) {
		strFinalMsg = strFinalMsg.concat(" It might take a day for me to respond.");

	}

	document.getElementById("timeOffset").innerHTML = strFinalMsg;
})();