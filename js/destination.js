let moonSelection = document.getElementById('moon');
let marsSelection  = document.getElementById('mars');
let europaSelection = document.getElementById('europa');
let titanSelection = document.getElementById('titan');
let destinationImage = document.getElementById('destination-image');
let destinationTitle = document.getElementById('destination-title')
let destinationInfo = document.querySelector('.destination-main-info');
let destinationDistance = document.getElementById('distance');
let destinationTime = document.getElementById('time');

moonSelection.addEventListener("click", (event) => alterarDisplay(event, destinations));
marsSelection.addEventListener("click", (event) => alterarDisplay(event, destinations));
europaSelection.addEventListener("click", (event) => alterarDisplay(event, destinations));
titanSelection.addEventListener("click", (event) => alterarDisplay(event, destinations));

const destinations = {
    moon: {
        title: "MOON",
        mainInfo: `See our planet as you’ve never seen it before. A perfect 
                relaxing trip away to help regain perspective and come back 
                refreshed. While you’re there, take in some history by visiting 
                the Luna 2 and Apollo 11 landing sites.`,
        distance: "384,400 KM",
        travelTime: "3 DAYS"
    },

    mars: {
        title: "MARS",
        mainInfo: `Don’t forget to pack your hiking boots. You’ll need 
        them to tackle Olympus Mons, the tallest planetary mountain in 
        our solar system. It’s two and a half times the size of Everest!`,
        distance: "225 MIL. km",
        travelTime: "9 MONTHS",
    },
    
    europa: {
        title: "EUROPA",
        mainInfo: `The smallest of the four Galilean moons orbiting Jupiter, 
        Europa is a winter lover’s dream. With an icy surface, it’s perfect for a 
        bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
        distance: "628 MIL. km",
        travelTime: "3 YEARS",
    },
    
    titan: {
        title: "TITAN",
        mainInfo: `The only moon known to have a dense atmosphere other than Earth, 
        Titan is a home away from home (just a few hundred degrees colder!). As a bonus, 
        you get striking views of the Rings of Saturn.`,
        distance: "1.6 BIL. km",
        travelTime: "7 YEARS",
    },
};

function alterarDisplay(event, destinations) {
    event.preventDefault();
    let destination = event.target.id;
    destinationImage.src = `../images/destination/${destination}.png`;
    destinationTitle.innerHTML = destinations[`${destination}`].title;
    destinationInfo.innerHTML = destinations[`${destination}`].mainInfo;
    destinationDistance.innerHTML = destinations[`${destination}`].distance;
    destinationTime.innerHTML = destinations[`${destination}`].travelTime;  

    let selectedOption = document.getElementById(destination);
    underlineText(selectedOption);
}

function underlineText(option) {
    let underlined = document.querySelector('.underline-text');

    if (option.classList.contains('underline-text')) {
        return; 
    } else {
        if (underlined) {
            underlined.classList.remove('underline-text');  
        }
        option.classList.add('underline-text');  
    }
}
