window.onload = function () {
     var table = document.getElementById('table');
     var db = document.getElementById('db');
     var fj = document.getElementById('fj');
     db.onclick = function () {
     table.className = fj.className=table.className === 'hide'?'show':'hide';
     }
     var payprev = document.getElementById('payprev');
     var payover = document.getElementById('payover');
     payprev.onclick = function () {
         payprev.style.display = 'none';
         payover.style.display = 'block';

     }

     jump = function(web){
         window.location.href = web;
     }
 }
