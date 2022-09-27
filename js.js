/**
 * file: js/js.js
 */
 console.log("Hi from js/js.js")

 const myFooter = `
 <ul id="footer">
     <li><small>Opening Hours:<br>
         Mon - Fri 09:00 - 18:00<br>
         Sat - Sun 10:00 - 16:00</small></li>
     <li><small><br>Frederiksgade 74, st th<br>
         8000 Aarhus C</small></li>
     <li><small><br>© Copyright, 2022</small></li>
 </ul>
 `;
 
 const footerElement = document.getElementById("my-footer");
 
 footerElement.innerHTML = myFooter;
 
 /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
 var prevScrollpos = window.pageYOffset;
 window.onscroll = function() {
   var currentScrollPos = window.pageYOffset;
   if (prevScrollpos > currentScrollPos) {
     document.getElementById("navbar").style.top = "0";
   } else {
     document.getElementById("navbar").style.top = "-50px";
   }
   prevScrollpos = currentScrollPos;
 }