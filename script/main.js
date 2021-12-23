function scrollDown(section, event) {
    event.preventDefault();

    var element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
}

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

let closeButton = document.getElementById("closeModal");

closeButton.addEventListener("click", function () {
    let modal = document.getElementById("projectModal");
    modal.style.display = "none";

    let modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "none";
})

function openModal() {
    let modal = document.getElementById("projectModal");
    modal.style.display = "block";

    let modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "block";
}

for (i = 0; i < projects.length; i++) {
    console.log("Title: ", projects[i].title);
    let projectCardString = `
        <div class='project-card'>
            <div class='project-image'>
                <img src='/assets/` + projects[i].thumbnail + `'>
                <div class='project-overlay' onclick="openModal()">
                    <button type='button' class='view-more-button' onclick="openModal()">VIEW MORE</button>
                </div>
            </div>
            <h3 class='project-title'>` + projects[i].title + `</h3>
            <p class='project-description'>` + projects[i].description + `</p>
        </div>
    `
    let projectGrid = document.getElementById("personalProjectGrid");
    projectGrid.innerHTML += projectCardString;
}