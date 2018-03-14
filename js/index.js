'use strict';
(function () {

    var anchorLinks = document.querySelectorAll('.category-link');
    var bgImgDivs = document.querySelectorAll('.bg-img');

    anchorLinks.forEach(function(eachLink) {
        eachLink.addEventListener('click', changeImgCategory);
    });

    function changeImgCategory(evt) {
        evt.preventDefault();

        bgImgDivs.forEach(function(bgImgDiv, idx) {
            bgImgDiv.style.backgroundImage = `url('../img/${evt.target.innerText}/image${idx+1}.jpeg`;
        });
    }
})();