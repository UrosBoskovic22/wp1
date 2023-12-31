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
      newSponsorImages.forEach(function (imagePath) {
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
      newSponsorDivs.forEach(function (box) {
          box.style.opacity = 0;

          setTimeout(function () {
              box.remove();
          }, 300);
      });
  }
});





// stone slide
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


// form validation
var btn = document.getElementById("submitBtn");

function proveriPolja(regEx, polje) {
    if (!regEx.test(polje.value)) {
        polje.classList.add('fault');
        return false;
    } else {
        polje.classList.remove('fault');
        return true;
    }
}
function proveriRadio(radioButtons) {
  for (const radioBtn of radioButtons) {
      if (radioBtn.checked) {
          return true;
      }
  }
  return false;
}
function proveriSelect(select) {
  return select.value !== 'null';
}

let regIme = /^[A-Z][a-z]*$/;
let regPrezime = /^[A-Z][a-z]*$/;
let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
let regTelefon = /^\+3816[0-4][0-9]{6,7}$/;

let ime = document.getElementById('name');
document.getElementById('name').addEventListener("blur", function () {
    proveriPolja(regIme, ime);
});

let prezime = document.getElementById('surname');
document.getElementById('surname').addEventListener("blur", function () {
    proveriPolja(regPrezime, prezime);
});

let mail = document.getElementById('mail');
document.getElementById('mail').addEventListener("blur", function () { 
    proveriPolja(regExEmail, mail);
});

let brTel = document.getElementById('phone');
document.getElementById('phone').addEventListener("blur", function () {
    proveriPolja(regTelefon, brTel);
});
let genderMale = document.getElementById('male');
let genderFemale = document.getElementById('female');
let genderRadioButtons = [genderMale, genderFemale];

document.getElementById('form').addEventListener("change", function () {
    proveriRadio(genderRadioButtons);
});
let purposeSelect = document.getElementById('purpose');
document.getElementById('form').addEventListener("change", function () {
    proveriSelect(purposeSelect);
});


function provera() {
    const isImeValid = proveriPolja(regIme, ime);
    const isPrezimeValid = proveriPolja(regPrezime, prezime);
    const isEmailValid = proveriPolja(regExEmail, mail);
    const isTelValid = proveriPolja(regTelefon, brTel);
    const isGenderValid = proveriRadio(genderRadioButtons);
    const isPurposeValid = proveriSelect(purposeSelect);


    console.log("Ime validno:", isImeValid);
    console.log("Prezime validno:", isPrezimeValid);
    console.log("Email validno:", isEmailValid);
    console.log("Telefon validan:", isTelValid);
    console.log("Radio button validan:", isGenderValid);
    console.log("Select lista validna:", isPurposeValid);


    if (!(isImeValid && isPrezimeValid && isEmailValid && isTelValid && isGenderValid && isPurposeValid)) {
        console.log("Forma nije ispravna. Molimo ispravite greške.");
        return false;
    }
    return true;
}

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (provera()) {
        this.submit();
    } else {
        console.log("Forma nije ispravna. Molimo ispravite greške.");
    }
});
