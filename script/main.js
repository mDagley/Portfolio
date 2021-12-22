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
        console.log(height)
        panda.style.height = height;
    }

    else {
        console.log("Min Size")
        panda.style.height = '200px';
    }

}