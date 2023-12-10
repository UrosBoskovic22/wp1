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




// form check

// //funkcija u koju prosledjujemo parametre regex izraza i polja koje proveravamo
// function proveriPolja(regEx,polje){
//   if(!regEx.test(polje.value))
//       polje.nextElementSibling.classList.add('fault');
//   else
//       polje.nextElementSibling.classList.remove('fault');
// }

// //regularni izrazi
// let regIme = /^[A-Z][a-z]*$/;
// let regPrezime = /^[A-Z][a-z]*$/;
// let regExEmail=/^@$/;
// let regTelefon = /^\+381[0-9]{6,7}$/;

// //pozivanje funkcije za svako polje koje proveravamo
// let ime = document.getElementById('name');
// document.getElementById('name').addEventListener("blur",function(){
//   proveriPolja(regIme,ime);
// });

// let prezime=document.getElementById('surname');
// document.getElementById('surname').addEventListener("blur",function(){
//   proveriPolja(regPrezime,prezime);
// });

// let mail=document.getElementById('mail');
// document.getElementById('mmail').addEventListener("blur",function(){
//   proveriPolja(regExEmail,mail);
// });

// let brTel=document.getElementById('phone');
// document.getElementById('phone').addEventListener("blur",function(){
//   proveriPolja(regTelefon,brTel);
// });

// //provera checkBoxa
// var isChecked = false;
//       var formErrors = 0;
//       var greskaPol = document.getElementById('divGenders');
//       let rbGender = document.getElementsByName("genders");
//       function checkGender(){
//       for(let i=0; i<rbGender.length; i++)
//       {
//           if(rbGender[i].checked)
//           {
//              isChecked=true;
//           }

//       }
//       if(!isChecked)
//       {
//           greskaPol.classList.add("fault");
//           formErrors++;
//       }
//       else{
//           greskaPol.classList.remove("fault");
//           formErrors=0;
//       }
//   }

//   let checkbox = document.getElementById('checkbox');
//   function proveraCheckBoxa(){
//   if (!checkbox.checked) 
//       document.getElementById('checkGreska').classList.remove('d-none');
//   else 
//       document.getElementById('checkGreska').classList.add('d-none');
//   }


// document.getElementById('readMore').addEventListener("click",function(){
//   submit();//dugme za proveru svih polja na kliktaj dugmeta submit
// });

// //provera za textarea
// function proveriMessage(){
//   let textBox=document.getElementById('message').value;
//   let poruka=document.getElementById('greskaPoruka');
//   if(textBox<10)
//       poruka.classList.remove('d-none');
//   else 
//       poruka.classList.add('d-none');
// }

// function submit(){
  
//       proveriPolja(regImePrezime,ime);
//       proveriPolja(regImePrezime,prezime);
//       proveriPolja(regExEmail,mail);
//       proveriPolja(regTelefon,brTel);
      
//       checkGender();
//       proveriMessage();
//       proveraCheckBoxa();
// }



// var btn = document.querySelector(".submitBtn");





// function proveriPolja(regEx,polje){
//   if(!regEx.test(polje.value))
//       polje.nextElementSibling.classList.add('fault');
//   else
//       polje.nextElementSibling.classList.remove('fault');
// }

// //regularni izrazi
// let regIme = /^[A-Z][a-z]*$/;
// let regPrezime = /^[A-Z][a-z]*$/;
// let regExEmail=/^@$/;
// let regTelefon = /^\+381[0-9]{6,7}$/;

// //pozivanje funkcije za svako polje koje proveravamo
// let ime = document.getElementById('name');
// document.getElementById('name').addEventListener("blur",function(){
//   proveriPolja(regIme,ime);
// });

// let prezime=document.getElementById('surname');
// document.getElementById('surname').addEventListener("blur",function(){
//   proveriPolja(regPrezime,prezime);
// });

// let mail=document.getElementById('mail');
// document.getElementById('mail').addEventListener("blur",function(){
//   proveriPolja(regExEmail,mail);
// });

// let brTel=document.getElementById('phone');
// document.getElementById('phone').addEventListener("blur",function(){
//   proveriPolja(regTelefon,brTel);
// });




// function provera(){
  
//       proveriPolja(regIme,ime);
//       proveriPolja(regPrezime,prezime);
//       proveriPolja(regExEmail,mail);
//       proveriPolja(regTelefon,brTel);
// }
// btn.addEventListener('click',provera)

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
  // Proveri da li je barem jedan radio button cekiran
  for (const radioBtn of radioButtons) {
      if (radioBtn.checked) {
          return true;
      }
  }
  return false;
}
function proveriSelect(select) {
  // Proveri da li je izabrana opcija, osim one sa value "null"
  return select.value !== 'null';
}

// Regularni izrazi
let regIme = /^[A-Z][a-z]*$/;
let regPrezime = /^[A-Z][a-z]*$/;
let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Ispravljeni regex za email
let regTelefon = /^\+3816[0-4][0-9]{6,7}$/;

// Pozivanje funkcije za svako polje koje proveravamo
let ime = document.getElementById('name');
document.getElementById('name').addEventListener("blur", function () {
    proveriPolja(regIme, ime);
});

let prezime = document.getElementById('surname');
document.getElementById('surname').addEventListener("blur", function () {
    proveriPolja(regPrezime, prezime);
});

let mail = document.getElementById('mail');
document.getElementById('mail').addEventListener("blur", function () { // Ispravljeni id sa 'mmail' na 'mail'
    proveriPolja(regExEmail, mail);
});

let brTel = document.getElementById('phone');
document.getElementById('phone').addEventListener("blur", function () {
    proveriPolja(regTelefon, brTel);
});
let genderMale = document.getElementById('male');
let genderFemale = document.getElementById('female');
let genderRadioButtons = [genderMale, genderFemale];
// Dodajte event listener za proveru radio buttona
document.getElementById('form').addEventListener("change", function () {
    proveriRadio(genderRadioButtons);
});
let purposeSelect = document.getElementById('purpose');
// Dodajte event listener za proveru select liste
document.getElementById('form').addEventListener("change", function () {
    proveriSelect(purposeSelect);
});


function provera() {
    // Proveri rezultate validacije za sva polja
    const isImeValid = proveriPolja(regIme, ime);
    const isPrezimeValid = proveriPolja(regPrezime, prezime);
    const isEmailValid = proveriPolja(regExEmail, mail);
    const isTelValid = proveriPolja(regTelefon, brTel);
    const isGenderValid = proveriRadio(genderRadioButtons);
    const isPurposeValid = proveriSelect(purposeSelect);


    // Loguj rezultate validacije za svako polje
    console.log("Ime validno:", isImeValid);
    console.log("Prezime validno:", isPrezimeValid);
    console.log("Email validno:", isEmailValid);
    console.log("Telefon validan:", isTelValid);
    console.log("Radio button validan:", isGenderValid);
    console.log("Select lista validna:", isPurposeValid);


    // Spriječi podnošenje forme ako je bilo koje polje neispravno
    if (!(isImeValid && isPrezimeValid && isEmailValid && isTelValid && isGenderValid && isPurposeValid)) {
        console.log("Forma nije ispravna. Molimo ispravite greške.");
        return false;
    }

    // Dodatna logika ako su sva polja ispravna
    // ...

    // Dozvoli podnošenje forme ako su sva polja ispravna
    return true;
}

// Dodajte event listener za podnošenje forme
document.getElementById('form').addEventListener('submit', function (event) {
    // Spriječi podrazumevano podnošenje forme
    event.preventDefault();

    // Izvrši dodatnu validaciju ako je potrebno
    if (provera()) {
        // Ako su sva polja ispravna, podnesite formu
        this.submit();
    } else {
        // Obrada slučaja kada forma nije ispravna
        console.log("Forma nije ispravna. Molimo ispravite greške.");
    }
});
