document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const images = ['assets/img/lancic.jpg', 'assets/img/prsten8.jpg', 'assets/img/pozadina.jpg'];
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
      "Diamond bracelet", "Diamond bracelet", "Diamond bracelet",
      "Diamond ring", "Diamond ring", "Diamond ring"
    ];
    var jewelryPrices = [50, 75, 100, 30, 40, 50, 80, 100, 120];

    for (let i = 0; i < jewelryImages.length; i++) {
        var jewelDiv = document.createElement("div");
        jewelDiv.className = "jewel";

        var img = document.createElement("img");
        img.src = "assets/img/" + jewelryImages[i];
        img.alt = jewelryNames[i];

        var jewelInfoDiv = document.createElement("div");
        jewelInfoDiv.className = "jewelInfo";

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

  



  