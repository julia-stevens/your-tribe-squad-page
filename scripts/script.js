// Bron: https://www.w3schools.com/howto/howto_js_filter_lists.asp
function myFunction() {
    var input, filter, ul, li, h3, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName("h3")[0];
        txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


const duck = document.querySelector("#duck")
duck.addEventListener("click", function() {
    duck.classList.toggle("active")    
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 100,
    centeredSlides: true,
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
    breakpoints: {
        0: {
            slidesPerView: 1,
        }, 
        783: {
            slidesPerView: 2
        },
        1310: {
            slidesPerView: 3
        },
    }

  });

  