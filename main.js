let landingSilderIndex = 1;
let ele = document.getElementsByClassName("slide-item__container");
//carousel();
showDivs(landingSilderIndex);
function plusDivs(num) {
  showDivs(landingSilderIndex += num);
}

function carousel() {
    for (let i = 0; i < ele.length; i++) {
       ele[i].style.display = "none";
    }
    landingSilderIndex++;
    if (landingSilderIndex > ele.length) landingSilderIndex = 1;
    ele[landingSilderIndex-1].style.display = "block";
    setTimeout(carousel, 5000);
}
function showDivs(num) {
  if(num > ele.length) landingSilderIndex = 1;
  if (num < 1) landingSilderIndex = ele.length;
  for (let i = 0; i < ele.length; i++) {
    ele[i].style.display = "none";
  }
  ele[landingSilderIndex-1].style.display = "block";
}

$(function() {
    window.isMobile = /Android|webOS|iPhone|iPad/i.test(navigator.userAgent);
    if (window.isMobile) {
        $('#menu-bar').click(function() {
            let parent = $(this).parent();
            parent.find('.header-center').toggle();
            parent.find('.header-right').toggle();
        });
        $(document).mouseup(function (e) {
            let $menu = $('.header-center');
            if (!$menu.is(e.target) && $menu.has(e.target).length === 0 && !$(e.target).hasClass('fa-bars')) {
                $menu.hide();
                $('.header-right').hide();
            }
        });
    }
});