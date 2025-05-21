// ==UserScript==
// @name         Eklas attendance fix
// @namespace    https://github.com/lkro13
// @version      1.0
// @description  Fix the issue where submitting attendace only result in a forever loading
// @author       lkro13
// @include      https://eklas.msu.edu.my/app/pl_att/sub_attx.php*
// @icon         https://eklas.msu.edu.my/favicon.ico
// @grant        none
// @updateURL    https://github.com/lkro13/msu_eklas_fix/blob/c2d7f6c2143f2bb509d8fca918fbd4abba8b97b0/userscript.js
// @downloadURL  https://github.com/lkro13/msu_eklas_fix/blob/c2d7f6c2143f2bb509d8fca918fbd4abba8b97b0/userscript.js
// ==/UserScript==

(function() {
    'use strict';
     var s = document.createElement('script');
     s.textContent = 'var igt_kok = "yes";function ingat_ingat_lo(lorrr){igt_kok = lorrr};';
     (document.head || document.documentElement).appendChild(s);
})();
