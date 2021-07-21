$(document).ready(function () {
    $('.menu-btn').click(function(event) {
        $('.navbar-ifel').toggleClass('open-nav');
    });

    $('.bs-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    });

    $('.banner-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          }
        }
      ]
    });

    $('.matchday-slider').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 7,
      slidesToScroll: 1,
      focusOnSelect: true,
      prevArrow: '<button class="slide-arrow prev-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        }
      ]
    });

    $('.club-logo').slick({
      arrows: false,
      infinite: false,
      slidesToShow: 3,
      prevArrow: '<button class="slide-arrow prev-arrow"><ion-icon name="chevron-back-outline"></ion-icon></button>',
      nextArrow: '<button class="slide-arrow next-arrow"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
      responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite:true,
            centerMode: true,
            centerPadding: '40px',
            arrows: true,
            slidesToShow: 3,
            focusOnSelect: true,
          }
        }
      ]
    });

    $('.product-slider').slick({
      arrows: false,
      infinite: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          }
        }
      ]
    });

    // $('.checkbox-circle input[type="checkbox"]').click(function(){ 
    //     $('.checkbox-circle input[type="checkbox"]').prop("checked", false);
    //     $(this).prop("checked", true);
    // });

    $(document).on('click', '.checkbox-circle input[type="checkbox"]', function(){ 
        $('.checkbox-circle input[type="checkbox"]').prop("checked", false);
        $(this).prop("checked", true);
    });

    $(document).on('click', '.checkbox-pill input[type="checkbox"]', function(){ 
        $('.checkbox-pill input[type="checkbox"]').prop("checked", false);
        $(this).prop("checked", true);
    });

    // $('.checkbox-pill input[type="checkbox"]').click(function(){ 
    //     $('.checkbox-pill input[type="checkbox"]').prop("checked", false);
    //     $(this).prop("checked", true);
    // });

    $(document).on('click', '.quiz-gold-a input[type="checkbox"]', function(){ 
        $('.quiz-gold-a input[type="checkbox"]').prop("checked", false);
        $(this).prop("checked", true);
    });

    $(document).on('click', '.quiz-gold-b input[type="checkbox"]', function(){ 
        $('.quiz-gold-b input[type="checkbox"]').prop("checked", false);
        $(this).prop("checked", true);
    });

    $('.btn-number').click(function(e){
        e.preventDefault();
        
        fieldName = $(this).attr('data-field');
        type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                
                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                } 
                if(parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if(type == 'plus') {

                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });

    $('.input-number').focusin(function(){
       $(this).data('oldValue', $(this).val());
    });

    $('.input-number').change(function() {
        
        minValue =  parseInt($(this).attr('min'));
        maxValue =  parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());
        
        name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        
        
    });

    // $('.datepicker').datepicker({
    //     format: 'dd/mm/yyyy'
    // });

    

    

});


(function () {
  var sidebar = document.getElementById("sidebar");
  var sidebarOverlay = document.getElementsByClassName("sidebar-overlay")[0];
  var container = document.getElementsByClassName("container")[0];
  var sidebarBtnClose = document.getElementById("sidebarBtnClose");
  var sidebarBtnOpen = document.getElementById("sidebarBtnOpen");

  var openSidebar = function () {
    sidebarOverlay.style.right = "0";
    sidebar.style.right = "0";
  };

  var closeSidebar = function (e) {
    e.cancelBubble = true;
    sidebarOverlay.style.right = "-100%";
    sidebar.style.right = "-100%";
  };

  sidebarOverlay.addEventListener("click", closeSidebar);
  sidebarBtnClose.addEventListener("click", closeSidebar);
  sidebarBtnOpen.addEventListener("click", openSidebar);
})();

function checkAll(ele) {
      var checkboxes = document.getElementsByTagName('input');
      if (ele.checked) {
          for (var i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].type == 'checkbox' ) {
                  checkboxes[i].checked = true;
              }
          }
      } else {
          for (var i = 0; i < checkboxes.length; i++) {
              if (checkboxes[i].type == 'checkbox') {
                  checkboxes[i].checked = false;
              }
          }
      }
  }




