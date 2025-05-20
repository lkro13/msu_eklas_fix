// ==UserScript==
// @name         Eklas fix
// @version      2025-05-20
// @description  Eklas attendance fix
// @author       lkro13
// @include      https://eklas.msu.edu.my/app/pl_att/sub_attx.php*
// @icon         https://eklas.msu.edu.my/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var s = document.createElement('script');
     s.textContent = 'var igt_kok = "yes";function ingat_ingat_lo(lorrr){igt_kok = lorrr};';
     (document.head || document.documentElement).appendChild(s);
})();
