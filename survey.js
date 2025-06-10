// ==UserScript==
// @name         Eklas survey filler
// @namespace    https://github.com/lkro13
// @version      1.0
// @description  Automatically fill out survey! Only tested with course evaluation
// @author       lkro13
// @match        https://eklas.msu.edu.my/app/mycampus/survey/keyin_run_survey_be_STUDENT.php*
// @icon         https://eklas.msu.edu.my/favicon.ico
// @grant        none
// @updateURL    https://github.com/lkro13/msu_eklas_fix/blob/a8edd3da7f9e471c8a094c68e93ada8cc4955e9a/survey.js
// @downloadURL  https://github.com/lkro13/msu_eklas_fix/blob/a8edd3da7f9e471c8a094c68e93ada8cc4955e9a/survey.js
// ==/UserScript==

(function () {
  "use strict";

  var s = document.createElement("script");
  s.textContent=`
  function autofillform(sub = false) {
    var lists = document.getElementsByTagName("select");

    for (var i = 0; i < lists.length; i++) {
      lists[i].value = lists[i].children[1].value;
    }
    var inputs = document.getElementsByTagName("input");

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "radio") {
        console.log(inputs[i]);
        if (inputs[i].value == "7" || inputs[i].value == "1") {
          inputs[i].click();
        }
      } else if (inputs[i].type == "button") {
        if (inputs[i].value == "Submit") {
          if (sub) inputs[i].click();
        }
      }
    }
  }
    `

  function createButton() {
    var base = document.createElement("div");
    var text = document.createElement("p");

    text.innerText = "Fill form";

    base.appendChild(text);
    base.style.position = "fixed";
    base.style.top = "5px";
    base.style.left = "5px";
    base.style.backgroundColor = "#000";
    base.style.padding = "0px 16px";
    base.style.opacity = "0.4";
    base.style.color = "#fff";
    base.style.width = "90px !important";

    base.onclick = new Function("event", "autofillform()");

    document.body.appendChild(base);

    var base = document.createElement("div");
    var text = document.createElement("p");

    text.innerText = "Fill & submit";

    base.appendChild(text);
    base.style.position = "fixed";
    base.style.top = "5px";
    base.style.left = "90px";
    base.style.backgroundColor = "#000";
    base.style.padding = "0px 16px";
    base.style.opacity = "0.4";
    base.style.color = "#fff";
    base.style.width = "90px !important";

    base.onclick = new Function("event", "autofillform(true)");

    document.body.appendChild(base);
  }

  createButton();

  (document.head || document.documentElement).appendChild(s);
})();
