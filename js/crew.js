let circleButton = document.querySelectorAll('.circle-button');
let crewImage = document.getElementById('crew-image');
let crewTitle = document.querySelector('.crew-title');
let crewName = document.querySelector('.crew-title-name');
let crewInfo = document.querySelector('.crew-main-info');

circleButton.forEach(button => {
    button.addEventListener('click', (event) => {
        alterarInfo(event);
    });
});

const crewInformations = {
    douglas: {
        title: "COMMANDER",
        name: "DOUGLAS HURLEY",
        mainInfo: `Douglas Gerald Hurley is an American engineer, 
                former Marine Corps pilot and former NASA astronaut. He launched 
                into space for the third time as commander of Crew Dragon Demo-2.`
    },

    mark: {
        title: "MISSION SPECIALIST",
        name: "MARK SHUTTLEWORTH",
        mainInfo: `Mark Richard Shuttleworth is the founder and CEO of Canonical, 
        the company behind the Linux-based Ubuntu operating system. Shuttleworth 
        became the first South African to travel to space as a space tourist.`
    },

    victor: {
        title: "PILOT",
        name: "VICTOR GLOVER",
        mainInfo: `Pilot on the first operational flight of the SpaceX Crew Dragon 
        to the International Space Station. Glover is a commander in the U.S. Navy 
        where he pilots an F/A-18.He was a crew member of Expedition 64, and served 
        as a station systems flight engineer.`
    },

    anousheh: {
        title: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        mainInfo: `Anousheh Ansari is an Iranian American engineer and co-founder of 
        Prodea Systems. Ansari was the fourth self-funded space tourist, the first 
        self-funded woman to fly to the ISS, and the first Iranian in space. `
    }
};

function alterarInfo(event) {
    event.preventDefault();
    let paginationSelected = event.target.id;
    crewImage.src = `/images/crew/${paginationSelected}.png`;
    crewTitle.innerHTML = crewInformations[`${paginationSelected}`].title;
    crewName.innerHTML = crewInformations[`${paginationSelected}`].name;
    crewInfo.innerHTML = crewInformations[`${paginationSelected}`].mainInfo;

    let buttonSelected = document.getElementById(paginationSelected);
    destacarBotao(buttonSelected);
};

function destacarBotao(pagination) {
    let highlightButton = document.querySelector('.selected-button');
    
    if (pagination.classList.contains('selected-button')) {
            return;
        } else {
            if (highlightButton) {
                highlightButton.classList.remove("selected-button");
            }
            pagination.classList.add("selected-button");
        }
};
