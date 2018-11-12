let landingSilderIndex = 0;
let reviewIndex = 1;
const classSlider = "slide-item__container";
const classReview = "reviews__item";

//create slide
//carouselSlider();
showSlideDivs(classSlider, 0);
if (window.orientation !== undefined) {
  carousel();
}


function plusDivs(className, num) {
  const newIndex = className === classSlider ? (landingSilderIndex += num) : (reviewIndex += num);
  className === classSlider ? showSlideDivs(className, newIndex) : showRewiewDivs(className, newIndex);
}

function carouselSlider() {
  const ele = document.getElementsByClassName(classSlider);
  for (let i = 0; i < ele.length; i++) {
     ele[i].style.display = "none";
  }
  landingSilderIndex++;
  if (landingSilderIndex > ele.length) landingSilderIndex = 1;
  ele[landingSilderIndex-1].style.display = "block";
  setTimeout(carouselSlider, 5000);
}

function showSlideDivs(className, num) {
  const ele = document.getElementsByClassName(className);
  if(num > ele.length) landingSilderIndex = 1;
  if (num < 1) landingSilderIndex = ele.length;
  for (let i = 0; i < ele.length; i++) {
    ele[i].style.display = "none";
  }
  ele[landingSilderIndex-1].style.display = "block";
}

function showRewiewDivs(className, num) {
  const ele = document.getElementsByClassName(className);
  if(num > ele.length) reviewIndex = 1;
  if (num < 1) reviewIndex = ele.length;
  for (let i = 0; i < ele.length; i++) {
    ele[i].style.display = "none";
  }
  ele[reviewIndex-1].style.display = "block";
}

function carousel() {
  const ele = document.getElementsByClassName(classReview);
  for (let i = 0; i < ele.length; i++) {
     ele[i].style.display = "none";
  }
  reviewIndex++;
  if (reviewIndex > ele.length) reviewIndex = 1;
  ele[reviewIndex-1].style.display = "block";
  setTimeout(carousel, 10000);
}

$(function() {
    if (window.orientation !== undefined) {
        $('#menu-bar').click(function() {
            let parent = $(this).parent();
            parent.find('.header-center').toggle();
            parent.find('.header-right').toggle();
        });
    }
    $('a').click(function(e) {
        e.preventDefault();
        if ($(this).attr('href').indexOf('#') >=0) {
          const target = $(this)[0].hash;
          $('html, body').animate({scrollTop : $(target).offset().top}, 2000);
        }
    });
    const $tagA = 'ul.menu li';
    $(`${$tagA} a`).click(function(e) {
      $($tagA).removeClass('active');
      $(e.target).parent().addClass('active');
    });
});
