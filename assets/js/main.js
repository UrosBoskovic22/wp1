// automatic slider
document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    var images = ['assets/img/lancic.jpg', 'assets/img/prsten8.jpg', 'assets/img/pozadina.jpg'];
    let trntIndex = 0;
  
    function nextImage() {
      trntIndex = (trntIndex + 1) % images.length;
      header.style.backgroundImage = `url('${images[trntIndex]}')`;
    }
  
    setInterval(() => {
      header.classList.add('transition');
      nextImage();
  
      setTimeout(() => {
        header.classList.remove('transition');
      }, 1000);
    }, 2000);
  });


// dinamicki ispis prozivoda
document.addEventListener("DOMContentLoaded", function () {
    var jewelryDiv = document.querySelector(".jewelry");

    // Niz sa nazivima slika
    var jewelryImages = [
        "ogrlica7.jpeg", "ogrlica8.jpeg", "ogrlica11.jpeg",
        "narukvica2.jpg", "narukvica1.jpg", "narukvica3.jpg",
        "prsten13.jpg", "prsten4.jpg", "prsten10.jpg"
    ];
    var jewelryNames = [
      "Diamond necklace", "Diamond necklace", "Diamond necklace",
      "Silver bracelet", "Diamond bracelet", "Diamond bracelet",
      "Diamond ring", "Diamond ring", "Diamond ring"
    ];
    var jewelryPrices = [1050, 1150, 1000, 130, 450, 600, 120, 100, 110];

    for (let i = 0; i < jewelryImages.length; i++) {
        var jewelDiv = document.createElement("div");
        jewelDiv.className = "jewel";

        var img = document.createElement("img");
        img.src = "assets/img/" + jewelryImages[i];
        img.alt = jewelryNames[i];
        img.className = "imgRadius";

        var jewelInfoDiv = document.createElement("div");
        jewelInfoDiv.className = "jewelInfo";
        jewelInfoDiv.classList.add("jewelInfoRadius");

        var name = document.createElement("h3");
        name.textContent = jewelryNames[i];
        name.className = "jewelInfoStyle";

        var price = document.createElement("h2");
        price.textContent = jewelryPrices[i] + "$";
        price.className = "jewelInfoStyle";
        

        jewelInfoDiv.appendChild(name);
        jewelInfoDiv.appendChild(price);

        jewelDiv.appendChild(img);
        jewelDiv.appendChild(jewelInfoDiv);
        
        jewelryDiv.appendChild(jewelDiv);
    }
});



// jquery scroll animation
$(document).ready(function () {
  $('.scrollLink').click(function (e) {
      e.preventDefault();
      var targetId = $(this).attr('href');
      $(targetId).animatescroll({ scrollSpeed: 2000, easing: 'easeInOutBack' });
  });
});



// sponsor button show more
document.addEventListener("DOMContentLoaded", function () {
  var sponsorsDiv = document.querySelector('.sponsors');
  var newSponsorImages = [
    'assets/img/versace.jpeg',
    'assets/img/gucci2.jpeg',
    'assets/img/lv.jpeg',
    'assets/img/lacoste.jpeg'
  ];
  var seeMoreBtn = document.getElementById('seeMoreBtn');
  var isExpanded = false;

  seeMoreBtn.addEventListener('click', function () {
      isExpanded = !isExpanded;

      if (isExpanded) {
          showNewSponsors();
          seeMoreBtn.textContent = 'Show Less';
      } else {
          hideNewSponsors();
          seeMoreBtn.textContent = 'Show More';
      }
  });

  function showNewSponsors() {
      newSponsorImages.forEach(function (imagePath, index) {
          var newSponsorDiv = document.createElement('div');
          newSponsorDiv.className = 'sponsorBox';

          var newImage = document.createElement('img');
          newImage.src = imagePath;
          newImage.alt = imagePath + 'logo';
          newImage.type = 'image/jpeg';

          newSponsorDiv.appendChild(newImage);
          sponsorsDiv.appendChild(newSponsorDiv);

          setTimeout(function () {
              newSponsorDiv.style.opacity = 1;
          }, 0);
      });
  }

  function hideNewSponsors() {
      var newSponsorDivs = document.querySelectorAll('.sponsors .sponsorBox:nth-child(n+5)');
      newSponsorDivs.forEach(function (box, index) {
          box.style.opacity = 0;

          setTimeout(function () {
              box.remove();
          }, 300);
      });
  }
});






var sliderImg = document.querySelector(".stoneSliderImg");
var images = [ 'assets/img/kamen9.jpeg',
                'assets/img/kamen17.jpeg',
                'assets/img/kamen10.jpeg',
                'assets/img/kamen18.jpeg',
                'assets/img/kamen14.jpeg'
              ];
let j = 0;

function prev(){
  if(j <= 0) j = images.length;
  j--;
  return setImg();
} 

function next(){
  if( j == images.length - 1) j = -1;
  j++;
  return setImg();  
}

function setImg(){
  return sliderImg.setAttribute('src', images[j]);

}






// 'assets/img/kamen1.jpg',
//       'assets/img/kamen2.jpg',
//       'assets/img/kamen3.jpg',
//       'assets/img/kamen2.jpg',
//       'assets/img/kamen3.jpg'


  