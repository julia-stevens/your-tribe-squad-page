const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselList = document.querySelector('.carousel-list');
    const carouselItems = document.querySelectorAll('.carousel-list li');
    let index = 0;

    // Get the width of each carousel item (this assumes all items have the same width)
    const itemWidth = carouselItems[0].getBoundingClientRect().width;
    const totalItems = carouselItems.length;

    // Calculate how many items fit within the visible area (e.g., 3 on desktop)
    const itemsPerView = window.innerWidth >= 768 ? 3 : 1;

    nextButton.addEventListener('click', () => {
        // Move to the next item if there are more items to show
        if (index < totalItems - itemsPerView) {
            index++;
            carouselList.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });

    prevButton.addEventListener('click', () => {
        // Move to the previous item if we're not at the first item
        if (index > 0) {
            index--;
            carouselList.style.transform = `translateX(-${index * itemWidth}px)`;
        }
    });

    // Optional: Add a resize event listener to update itemWidth and itemsPerView when window size changes
    window.addEventListener('resize', () => {
        const itemWidth = carouselItems[0].getBoundingClientRect().width;
        const itemsPerView = window.innerWidth >= 768 ? 3 : 1;
        carouselList.style.transform = `translateX(-${index * itemWidth}px)`;
    });

     // Optional: Add a resize event listener to update itemWidth and itemsPerView when window size changes
    window.addEventListener('resize', () => {
        const itemWidth = carouselItems[0].getBoundingClientRect().width;
        const itemsPerView = window.innerWidth >= 1000 ? 2 : 1;
        carouselList.style.transform = `translateX(-${index * itemWidth}px)`;
    });


function myFunction() {
    var input, filter, ul, li, h2, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        h2 = li[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
