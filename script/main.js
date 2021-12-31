function scrollDown(section, event) {
    event.preventDefault();

    var element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
}

if (window.innerWidth > 1199) {
    let wrapper = document.getElementById("wrapper");
    wrapper.onscroll = function () {
        let y = wrapper.scrollTop;
        let panda = document.getElementById("pandaImage");

        if ((wrapper.offsetHeight - y) > 200) {
            let height = wrapper.offsetHeight - y + 'px';
            panda.style.height = height;
        }

        else {
            panda.style.height = '200px';
        }

    }
}

let closeButton = document.getElementById("closeModal");

closeButton.addEventListener("click", function () {
    let modal = document.getElementById("projectModal");
    modal.style.display = "none";

    let modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "none";
})

function openModal(index) {
    let modal = document.getElementById("projectModal");
    modal.style.display = "block";

    let modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "block";

    let modalTitle = document.getElementById("modalTitle");
    modalTitle.innerHTML = projects[index].title;

    let modalDescription = document.getElementById("modalDescription");
    modalDescription.innerHTML = projects[index].description;

    let modalDate = document.getElementById("modalDate");
    modalDate.innerHTML = projects[index].date;

    let modalTechnology = document.getElementById("modalTechnology");
    modalTechnology.innerHTML = projects[index].technology;

    let modalPurpose = document.getElementById("modalPurpose");
    modalPurpose.innerHTML = projects[index].purpose;

    let modalOutcomes = document.getElementById("modalOutcomes");
    modalOutcomes.innerHTML = projects[index].outcomes;

    let liveLink = document.getElementById("modalLiveLink");
    if (projects[index].url != "") {
        liveLink.setAttribute("href", projects[index].url);
        liveLink.style.display = "flex";
    }

    else {
        liveLink.style.display = "none";
    }

    let gitHubLink = document.getElementById("modalGitHubLink");

    if (projects[index].github != "") {
        gitHubLink.setAttribute("href", projects[index].github);
        gitHubLink.style.display = "flex";
    }

    else {
        gitHubLink.style.display = "none";
    }

    buildModalGallery(projects[index].photos);

}

function buildModalGallery(photos) {
    let photoContainer = document.getElementById("carousel");
    let photoString = "";
    for (i = 0; i < photos.length; i++) {
        photoString += `
            <img class="carousel__slide" data-caption="` + photos[i].caption + `" data-fancybox data-src="assets/` + photos[i].url + `" src="assets/` + photos[i].url + `" alt="` + photos[i].alt + `" title="` + photos[i].title + `">
    `
    }

    photoContainer.innerHTML = photoString;
    const myCarousel = new Carousel(document.querySelector("#carousel"), {
        center: true,
        infinite: true
    });
    Fancybox.bind("#modalGallery img", {
        groupAll: true
    });

}

for (i = 0; i < projects.length; i++) {
    let projectCardString = `
        <div class='project-card'>
            <div class='project-image'>
                <img src='assets/` + projects[i].thumbnail + `'>
                <div class='project-overlay' onclick="openModal(` + i + `)">
                    <button type='button' class='view-more-button' onclick="openModal(` + i + `)">VIEW MORE</button>
                </div>
            </div>
            <h3 class='project-title'>` + projects[i].title + `</h3>
            <p class='project-description'>` + projects[i].description + `</p>
        </div>
    `
    let projectGrid = document.getElementById("personalProjectGrid");
    if (projects[i].type === "personal") {
        projectGrid.innerHTML += projectCardString;
    }

    let proProjectGrid = document.getElementById("proProjectGrid");
    if (projects[i].type === "professional") {
        proProjectGrid.innerHTML += projectCardString;
    }

}

var d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();