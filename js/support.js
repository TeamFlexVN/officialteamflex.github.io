/*!
 * Start Bootstrap - Grayscale v5.0.8 (https://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
 */

var navbar=document.getElementById("navbar");function updateNavbar(){(void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)<125?navbar.classList.remove("navBarMode"):navbar.classList.add("navBarMode")}function changeInstall(e){var t=e.innerText.toLowerCase();"ios"==t?document.getElementById("pillSelectorPill").style.left="0%":"windows"==t?document.getElementById("pillSelectorPill").style.left="50%":"macos"==t?document.getElementById("pillSelectorPill").style.left="25%":"linux"==t&&(document.getElementById("pillSelectorPill").style.left="75%");var n=document.getElementsByClassName("installInfo");for(i=0;i<n.length;i++)n[i].style.display="none";document.getElementById(t+"Guide").style.display="block"}function changeIpswInstall(e){var t=e.innerText.toLowerCase();"windows"==t?document.getElementById("pillSelectorPill2").style.left="50%":"macos"==t&&(document.getElementById("pillSelectorPill2").style.left="0%");var n=document.getElementsByClassName("ipswInstallInfo");for(i=0;i<n.length;i++)n[i].style.display="none";document.getElementById(t+"IpswGuide").style.display="block"}window.addEventListener("scroll",function(){updateNavbar()});var oldRelease,blurredMountain=document.getElementById("blurredMountain");function loadFile(e,t){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState&&200==n.status){try{var e=n.responseText}catch(e){return void console.log(e.message+" in "+n.responseText)}t(e)}},n.open("GET",e,!0),n.send()}blurredMountain.style.minHeight=document.getElementsByClassName("mainContent")[0].offsetHeight-200+"px",loadFile("releases.json",function(e){var t=JSON.parse(e)[0];oldRelease=JSON.parse(e);var n=t.browser_download_url;window.navigator.userAgent;document.getElementById("latestDownloadURL").href=n,document.getElementById("altStoreLink").href="altstore://install?url=https://unc0ver.dev"+n,document.getElementById("latestButton").innerText="Download "+t.tag_name;var o=t.body,d=new showdown.Converter;document.getElementById("changelogText").innerHTML=d.makeHtml(o.replace(/^((?!^- .*).)*$/gm,""))});var loadedOldReleases=!1;function getOldReleases(e){for(i=e.length-1;-1<i;i--){var t=e[i],n=createElement("div","releaseTableView"),o=createElement("span","releaseVersion");o.innerText=t.name,n.appendChild(o);var d=createElement("span","releaseDate");d.innerText=new Date(t.published_at).toLocaleDateString(),n.appendChild(d);var r=createElement("div","button");r.innerText="Download";var l=createElement("a");l.href=t.browser_download_url,l.appendChild(r),n.appendChild(l);var s=new showdown.Converter;n.innerHTML+=s.makeHtml(t.body.replace(/^((?!^- .*).)*$/gm,""));try{if(1<n.getElementsByTagName("ul")[0].childElementCount){var a=createElement("div","viewMoreButton");a.setAttribute("onClick","expandChangelog(this)"),a.innerText="more",n.appendChild(a)}}catch(e){}document.getElementById("legacyReleases").prepend(n)}loadedOldReleases=!0}function updateProgessBar(e){document.getElementById("progressBar").style.transform="translateX(-"+(100-e)+"%)",document.getElementById("currentProgress").innerText+=" ("+e+"%)"}function createElement(e,t){var n=document.createElement(e);return t&&(n.className=t),n}function goTo(e){var t=0;e&&(t=document.getElementById(e).getBoundingClientRect().top-document.body.getBoundingClientRect().top+100),document.body.scrollTop=t,document.documentElement.scrollTop=t}function expandChangelog(e){"more"==e.innerText?e.innerText="less":e.innerText="more",e.parentNode.classList.toggle("expanded")}function viewLegacyVersions(){viewLegacyVersionsButton=document.getElementById("viewLegacyVersions"),"View Previous Versions"==viewLegacyVersionsButton.innerText?(loadedOldReleases||getOldReleases(oldRelease),document.getElementById("legacyReleases").style.display="inline",viewLegacyVersionsButton.innerText="Hide Previous Versions"):(document.getElementById("legacyReleases").style.display="none",viewLegacyVersionsButton.innerText="View Previous Versions")}function viewTested(){var e=document.getElementById("viewTested");"View Tested Devices"==e.innerText?(document.getElementById("testedDevicesList").style.display="inline",e.innerText="Hide Tested Devices"):(document.getElementById("testedDevicesList").style.display="none",e.innerText="View Tested Devices")}window.onload=updateNavbar(),updateProgessBar(97);var animateHTML=function(){var t,n;function e(){t=document.querySelectorAll(".hidden"),n=window.innerHeight,window.addEventListener("scroll",o),window.addEventListener("resize",e),o()}function o(){for(var e=0;e<t.length;e++){t[e].getBoundingClientRect().top-n<=-200&&(t[e].className=t[e].className.replace("hidden","fadeInElement"))}}return{init:e}};animateHTML().init();var darkMode=!1;function toggleDarkMode(){createCookie("darkMode",darkMode=darkMode?(document.getElementsByTagName("html")[0].classList.remove("darkMode"),!1):(enableDarkMode(),!0),999999)}function enableDarkMode(){document.getElementsByTagName("html")[0].classList.add("darkMode")}function readCookie(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var d=n[o];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(t))return"true"==d.substring(t.length,d.length)||"false"!=d.substring(t.length,d.length)&&d.substring(t.length,d.length)}return null}function createCookie(e,t,n){if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var d="; expires="+o.toGMTString()}else d="";document.cookie=e+"="+t+d+"; path=/"}null!=readCookie("darkMode")?readCookie("darkMode")&&(darkMode=!0,enableDarkMode()):window.matchMedia("(prefers-color-scheme: dark)").matches&&(enableDarkMode(),darkMode=!0);var iOSVersion=navigator.userAgent.match(/OS ((\d+_?){2,3})\s/);null!=iOSVersion&&(document.getElementById("altStoreSection").style.display="block",iOSVersion=iOSVersion[0].replace(/\_/g,"."),document.getElementById("iOSVersion").innerText="| i"+iOSVersion);var releaseDate=new Date(Date.UTC(2020,4,23,22,0,0)),releaseDateFormatted=releaseDate.getTime();function updateTimer(){var e=releaseDateFormatted-(new Date).getTime(),t="",n=Math.floor(e/864e5),o=Math.floor(e%864e5/36e5),d=Math.floor(e%36e5/6e4),i=Math.floor(e%6e4/1e3);0<n&&(t=n+"d "),0<o&&(t+=o+"h "),0<e?(t+=d+"m "+i+"s",document.getElementById("timer").innerHTML=t):document.getElementById("etaCounter").style.display="none"}updateTimer();var x=setInterval(function(){updateTimer()},1e3);function rebelReadMore(){document.getElementById("rebelMoreBtn").classList.toggle("hideMore"),document.getElementById("rebelMore").classList.toggle("expanded")}var devices=[[["iPhone 11 Pro Max","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09869/3F4A0160-CE9F-4D7F-87E4-6C07F1003A3B/iPhone11,2,iPhone11,6,iPhone12,3,iPhone12,5_13.5.5_17G5035d_Restore.ipsw"],["iPhone 11 Pro","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09869/3F4A0160-CE9F-4D7F-87E4-6C07F1003A3B/iPhone11,2,iPhone11,6,iPhone12,3,iPhone12,5_13.5.5_17G5035d_Restore.ipsw"],["iPhone 11","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09889/1B3DFE99-EFD5-4FEC-A666-6CC086B4CBDD/iPhone11,8,iPhone12,1_13.5.5_17G5035d_Restore.ipsw"],["iPhone XS Max","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09869/3F4A0160-CE9F-4D7F-87E4-6C07F1003A3B/iPhone11,2,iPhone11,6,iPhone12,3,iPhone12,5_13.5.5_17G5035d_Restore.ipsw"],["iPhone XS","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09869/3F4A0160-CE9F-4D7F-87E4-6C07F1003A3B/iPhone11,2,iPhone11,6,iPhone12,3,iPhone12,5_13.5.5_17G5035d_Restore.ipsw"],["iPhone XR","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09889/1B3DFE99-EFD5-4FEC-A666-6CC086B4CBDD/iPhone11,8,iPhone12,1_13.5.5_17G5035d_Restore.ipsw"],["iPhone X","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09962/48757714-3B18-40C9-91A4-B6BDF26ACCD4/iPhone10,3,iPhone10,6_13.5.5_17G5035d_Restore.ipsw"],["iPhone SE (2020)","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09851/7986A20C-E86B-4204-A541-0C7A96FD9AF2/iPhone12,8_13.5.5_17G5035d_Restore.ipsw"],["iPhone SE","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09870/B622CB75-CB4E-45DC-B3E4-0BA373B24AFF/iPhone_4.0_64bit_13.5.5_17G5035d_Restore.ipsw"],["iPhone 8 Plus","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09891/4D81C23F-881A-403E-9874-4CFDE368068F/iPhone_5.5_P3_13.5.5_17G5035d_Restore.ipsw"],["iPhone 8","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09975/082A75BF-C0F4-41D1-85FA-0F6CAE7DB8E3/iPhone_4.7_P3_13.5.5_17G5035d_Restore.ipsw"],["iPhone 7 Plus","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09891/4D81C23F-881A-403E-9874-4CFDE368068F/iPhone_5.5_P3_13.5.5_17G5035d_Restore.ipsw"],["iPhone 7","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09975/082A75BF-C0F4-41D1-85FA-0F6CAE7DB8E3/iPhone_4.7_P3_13.5.5_17G5035d_Restore.ipsw"],["iPhone 6S Plus","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-10002/D64B63F3-60BC-44D9-9638-8AC2191DCDDD/iPhone_5.5_13.5.5_17G5035d_Restore.ipsw"],["iPhone 6S","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09900/A72E0E82-C651-4BA6-87A4-43F866AA9CD8/iPhone_4.7_13.5.5_17G5035d_Restore.ipsw"]],[['12.9" iPad Pro (4th Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09854/3A61D5B5-0BC5-4700-A991-778DA0DFD4F7/iPad8,11,iPad8,12_13.5.5_17G5035d_Restore.ipsw"],['12.9" iPad Pro (3rd Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09993/D75D9DA5-314D-4FB0-8304-85FEDE1C93F2/iPad_Fall_2018_13.5.5_17G5035d_Restore.ipsw"],['12.9" iPad Pro (2nd Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09840/A0677F0C-1033-4BC3-BF98-66B62A722B84/iPad_Pro_HFR_13.5.5_17G5035d_Restore.ipsw"],['12.9" iPad Pro (1st Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-10016/3DD92272-C4F7-4B6D-9F32-FEE7548D12A0/iPadPro_12.9_13.5.5_17G5035d_Restore.ipsw"],['11" iPad Pro (2nd Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09875/BBAD1319-E610-4ED5-9B8E-B0CD0548BA1B/iPad_Spring_2020_13.5.5_17G5035d_Restore.ipsw"],['11" iPad Pro (1st Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09993/D75D9DA5-314D-4FB0-8304-85FEDE1C93F2/iPad_Fall_2018_13.5.5_17G5035d_Restore.ipsw"],['10.5" iPad Pro (1st Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09840/A0677F0C-1033-4BC3-BF98-66B62A722B84/iPad_Pro_HFR_13.5.5_17G5035d_Restore.ipsw"],['9.7" iPad Pro (1st Gen)',"http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09970/520DE300-07BF-4867-8156-76721215F23C/iPadPro_9.7_13.5.5_17G5035d_Restore.ipsw"],["iPad Air 3","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09831/36DD5833-EBED-448D-9FAA-8F9B45281092/iPad_Spring_2019_13.5.5_17G5035d_Restore.ipsw"],["iPad Air 2","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09990/6AE9C423-FD2E-4EB1-9B9C-5093DD49B1DC/iPad_64bit_TouchID_13.5.5_17G5035d_Restore.ipsw"],["iPad (6th Gen)","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09866/44E33E0D-7FFE-4DAC-B1C6-4B2659D93DEA/iPad_64bit_TouchID_ASTC_13.5.5_17G5035d_Restore.ipsw"],["iPad (5th Gen)","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09866/44E33E0D-7FFE-4DAC-B1C6-4B2659D93DEA/iPad_64bit_TouchID_ASTC_13.5.5_17G5035d_Restore.ipsw"],["iPad Mini (5th Gen)","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09831/36DD5833-EBED-448D-9FAA-8F9B45281092/iPad_Spring_2019_13.5.5_17G5035d_Restore.ipsw"],["iPad Mini (4th Gen)","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09990/6AE9C423-FD2E-4EB1-9B9C-5093DD49B1DC/iPad_64bit_TouchID_13.5.5_17G5035d_Restore.ipsw"]],[["iPod Touch (7th Gen)","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-09940/DE3F4E53-9330-445A-83B7-4A1C6474DFC4/iPodtouch_7_13.5.5_17G5035d_Restore.ipsw"]],[["Apple TV HD","http://updates-http.cdn-apple.com/2020WinterSeed/fullrestores/001-11389/DFA769B1-A0BD-478A-88E4-34A1FDA1E30D/AppleTV5,3_13.4.8_17M5535f_Restore.ipsw"]]];function betaDeviceChange(){var e=document.getElementById("betaDeviceType").value;for(document.getElementById("betaDeviceModel").innerHTML="",i=0;i<devices[e].length;i++)document.getElementById("betaDeviceModel").innerHTML+="<option value='"+devices[e][i][1]+"'>"+devices[e][i][0]+"</option>"}function betaDownload(){downloadURL(document.getElementById("betaDeviceModel").value),goTo("rebelInfo")}function downloadURL(e){var t=document.createElement("a");t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t),delete t}function ipswMore(){document.getElementById("ipswMoreBtn").classList.toggle("hideMore"),document.getElementById("ipswViewMore").classList.toggle("expanded")}betaDeviceChange();