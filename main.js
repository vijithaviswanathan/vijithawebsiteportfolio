
var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right ="0";
    }
    function closemenu(){
        sidemenu.style.right ="-200px";
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyo_-sMZ4vB1VatNJj4YO_ekNPfgKG0LiQfwaXsG56ZKRh5Xdw6_ILfvI_lVhA0cW_IAg/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Meesage Sent Successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    } )

    document.addEventListener('DOMContentLoaded', function() {
        const slides = document.querySelector('.slides');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        
        let index = 0;
        const totalSlides = document.querySelectorAll('.slides > div').length;
    
        function showSlide(i) {
            index = (i + totalSlides) % totalSlides; // Ensure index is within bounds
            slides.style.transform = `translateX(${-index * 100}%)`;
        }
    
        prevButton.addEventListener('click', function() {
            showSlide(index - 1);
        });
    
        nextButton.addEventListener('click', function() {
            showSlide(index + 1);
        });
    
        // Show the first slide initially
        showSlide(index);
    });