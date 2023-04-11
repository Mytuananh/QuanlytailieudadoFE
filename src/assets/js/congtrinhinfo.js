function congtrinhinfo() {
    console.log('congtrinhinfo js');
    const carouselSlide = document.querySelector('.carousel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imageCounter = document.querySelector('.image-counter');
let imageIndex = 1;
let totalImages = carouselSlide.children.length;

function slideToImage() {
    carouselSlide.style.transform = `translateX(-${(imageIndex - 1) * 20}%)`;
    imageCounter.innerHTML = `${imageIndex}/${totalImages}`;
}

prevButton.addEventListener('click', () => {
    if (imageIndex === 1) {
        imageIndex = totalImages;
    } else {
        imageIndex--;
    }
    slideToImage();
});

nextButton.addEventListener('click', () => {
    if (imageIndex === totalImages) {
        imageIndex = 1;
    } else {
        imageIndex++;
    }
    slideToImage();
});

slideToImage();
var selectElement = document.getElementById("mySelect");

selectElement.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value !== "#") {
        window.location.href = selectedOption.value;
    }
});


var selectElement1 = document.getElementById("mySelect1");

selectElement1.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value !== "#") {
        window.location.href = selectedOption.value;
    }
});


var selectElement2 = document.getElementById("mySelect2");

selectElement2.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value !== "#") {
        window.location.href = selectedOption.value;
    }
});


var selectElement3 = document.getElementById("mySelect3");

selectElement3.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value !== "#") {
        window.location.href = selectedOption.value;
    }
});

var selectElement4 = document.getElementById("mySelect4");

selectElement4.addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    if (selectedOption.value !== "#") {
        window.location.href = selectedOption.value;
    }
});
function openSide1() {
    document.getElementById("content").style.marginRight = "30vh";
    document.getElementById("my-side-qlct-1").style.width = "30vh";
}

function closeSide1() {
    document.getElementById("content").style.marginRight= "0";
    document.getElementById("my-side-qlct-1").style.width = "0";
}
const sidebar = document.querySelector('.side-bar-1');
const toggleButton = document.querySelector('.sidebar-toggle');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
toggleButton.addEventListener('click', () => {
    const isSidebarActive = sidebar.classList.contains('active');
    sidebar.classList.toggle('active');
    toggleButton.classList.toggle('active');
    dropdownToggles.forEach(function(toggle) {
        toggle.classList.toggle('disabled', !isSidebarActive);
    });
    dropdownToggles.forEach((toggle) => {
        const dropdownMenu = toggle.nextElementSibling;
        if (dropdownMenu.style.display === 'block') {
            toggle.parentNode.classList.remove('open');
            dropdownMenu.style.display = 'none';
        }
    });
    // Cuộn sidebar lên đầu trang
    sidebar.scrollTop = 0;
});
dropdownToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(event) {
        event.preventDefault();
        if (!sidebar.classList.contains('active')) {
            return;
        }
        this.parentNode.classList.toggle('open');
        var dropdownMenu = this.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");


// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340


tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");


        this.classList.add("active");
        pane.classList.add("active");
    };
});

}