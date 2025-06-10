// ==UserScript==
// @name         Eklas attendance fix
// @namespace    https://github.com/lkro13
// @version      1.0
// @description  Fix the issue where submitting attendace only result in a forever loading
// @author       lkro13
// @include      https://eklas.msu.edu.my/app/pl_att/sub_attx.php*
// @icon         https://eklas.msu.edu.my/favicon.ico
// @grant        none
// @updateURL    https://github.com/lkro13/msu_eklas_fix/raw/refs/heads/main/userscript.js
// @downloadURL  https://github.com/lkro13/msu_eklas_fix/raw/refs/heads/main/userscript.js
// ==/UserScript==

(function() {
    'use strict';
     var s = document.createElement('script');
     s.textContent = 'var igt_kok = "yes";function ingat_ingat_lo(lorrr){igt_kok = lorrr};';
     (document.head || document.documentElement).appendChild(s);
})();
