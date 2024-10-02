let paginationButton = document.querySelectorAll('.pagination-button');
let technologyImage = document.getElementById('technology-image');
let selectedTitle = document.querySelector('.technology-title-name');
let mainInfo = document.querySelector('.technology-main-info');

paginationButton.forEach(button =>
    button.addEventListener('click', (event) => {
        alterarDisplayTerminology(event);
    })
);

const terminologyInformations = {
    launchVehicle: {
        title: "LAUNCH VEHICLE",
        mainInfo: `A launch vehicle or carrier rocket is a rocket-propelled 
        vehicle used to carry a payload from Earth's surface to space, usually 
        to Earth orbit or beyond. Our WEB-X carrier rocket is the most 
        powerful in operation. Standing 150 metres tall, it's quite an 
        awe-inspiring sight on the launch pad!`
    },

    spaceport: {
        title: "SPACEPORT",
        mainInfo: `A spaceport or cosmodrome is a site for launching (or receiving) 
        spacecraft, by analogy to the seaport for ships or airport for aircraft. 
        Based in the famous Cape Canaveral, our spaceport is ideally situated to take 
        advantage of the Earth’s rotation for launch.`
    },

    spaceCapsule: {
        title: "SPACE CAPSULE",
        mainInfo: `A space capsule is an often-crewed spacecraft that uses a blunt-body 
        reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is 
        where you'll spend your time during the flight. It includes a space gym, cinema, 
        and plenty of other activities to keep you entertained.`
    }
};

function alterarDisplayTerminology(event) {
    event.preventDefault();
    let paginationSelected = event.target.id;
    technologyImage.src = `./images/technology/${paginationSelected}.png`;
    selectedTitle.innerHTML = terminologyInformations[paginationSelected].title;
    mainInfo.innerHTML = terminologyInformations[paginationSelected].mainInfo;

    let selectedButton = document.getElementById(paginationSelected);
    destacarBotao(selectedButton);
};

function destacarBotao(button) {
    let highlightedButton = document.querySelector('.selected-button');

    if (button.classList.contains('selected-button')) {
            return;
        } else {
            if (highlightedButton) {
                highlightedButton.classList.remove("selected-button");
            }
            button.classList.add("selected-button");
        }
            
};








