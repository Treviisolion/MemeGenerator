function createMeme(memes, image, ttext, btext) {

    //Element creation
    let meme = document.createElement("div");
    let top = document.createElement("p");
    let img = document.createElement("img")
    let bottom = document.createElement("p");
    let cancelOverlay = document.createElement("div");
    let cancelIcon = document.createElement("i");

    //Meme info filled out
    top.innerText = ttext.value;
    top.className = "top";
    img.src = image.value;
    img.alt = "meme_image";
    img.className = "image"
    bottom.innerText = btext.value;
    bottom.className = "bottom";
    cancelOverlay.className = "overlay";
    cancelIcon.innerText = "clear";
    cancelIcon.className = "material-icons";
    meme.className = "meme";

    //Relations set
    meme.append(top);
    meme.append(img);
    meme.append(bottom);
    cancelOverlay.append(cancelIcon);
    meme.append(cancelOverlay);
    memes.append(meme);

    //Form cleared
    image.value = null;
    ttext.value = null;
    btext.value = null;
}

document.addEventListener("DOMContentLoaded", function () {

    //Form values
    let newMeme = document.querySelector("#info");
    let memes = document.querySelector("#memes");
    let image = document.querySelector("#image");
    let topText = document.querySelector("#ttext");
    let bottomText = document.querySelector("#btext");

    //Create meme upon submission
    newMeme.addEventListener("submit", function (event) {
        event.preventDefault();

        createMeme(memes, image, topText, bottomText);
    })

    //Remove memes upon clicking on them (shows an x when hovering over the meme)
    memes.addEventListener("click", function (event) {
        event.preventDefault();

        //Note, do I need to worry about memory leakage here?
        if (event.target.tagName === "P" || event.target.tagName === "IMG" || event.target.className === "overlay")
        {
            event.target.parentElement.remove();
        }
        else if (event.target.tagName === "I")
        {
            event.target.parentElement.parentElement.remove();
        }
        else if (event.target.className === "meme")
        {
            event.target.remove();
        }
    })
})