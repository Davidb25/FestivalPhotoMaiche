var fullUrl = window.location.href;

// Récupérer l'origine (protocole + domaine)
var origin = window.location.origin;

// Récupérer le chemin (sans le dernier segment)
var pathWithoutPage = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);

// Construire l'URL sans le nom de la page
var urlWithoutPageName = origin + pathWithoutPage;

    const listeImages = [
        { nomImage: 'martinPecheur.jpg'},
        { nomImage: 'martinPecheur2.jpg'},
        { nomImage: 'renard1.jpg'},
        { nomImage: 'ecureuil.jpg'},
        { nomImage: 'lynx.jpg'},
        { nomImage: 'faon.jpg'},
        { nomImage: 'chevreuil.jpg'},
        { nomImage: 'renard2.jpg'}
      ];

      var indexPhoto = generateRandomDigit();

      var imageBackground = document.getElementById('imageBackground')

document.addEventListener('DOMContentLoaded', function () {

    const nomImage = listeImages[indexPhoto].nomImage;

    var hrefImage = urlWithoutPageName + "ressources/imgJumelles/" + nomImage;

    imageBackground.setAttribute('href',hrefImage)

})

const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const rectangle1 = document.getElementById('rectangle1');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const svg = document.getElementById('svg');
    const width = svg.clientWidth;
    //const height = svg.clientHeight;
    //const smallerDimension = Math.min(width, height);
    const radius = (9 / 100) * width;


    circle1.setAttribute('r', radius);
    circle2.setAttribute('r', radius);

    console.log(radius);

    // Mettre à jour la position des cercles pour créer le masque en forme de 8
    circle1.setAttribute('cx', mouseX - radius + ((2/100) * width));
    circle1.setAttribute('cy', mouseY);
    circle2.setAttribute('cx', mouseX + radius - ((2/100) * width));
    circle2.setAttribute('cy', mouseY);
});


function generateRandomDigit() {

    const nbImage = listeImages.length
    
    return Math.floor(Math.random() * nbImage);
}
    
window.addEventListener("keydown", handleRestart)

function handleRestart(e) {
    e.preventDefault()
    if(e.keyCode === 32) {

        var indexPhoto = generateRandomDigit();

        const nomImage = listeImages[indexPhoto].nomImage;

        var hrefImage = urlWithoutPageName + "ressources/imgJumelles/" + nomImage;

        imageBackground.setAttribute('href',hrefImage)
    }
}

changeImage = document.getElementById("changeImage");

changeImage.addEventListener("click", () => {

    var indexPhoto = generateRandomDigit();

    const nomImage = listeImages[indexPhoto].nomImage;

    var hrefImage = urlWithoutPageName + "ressources/imgJumelles/" + nomImage;

    imageBackground.setAttribute('href',hrefImage)

})
