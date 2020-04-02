/* 
 Make slide show function.
 Andrew Larkins
 */

function MakeSlideShow(ssId, folderName, picObjList) {

    // Get a reference to the DOM object.
    var slideShow = document.getElementById(ssId);

    // Add a div that will hold the image.
    var div = document.createElement("div");
    slideShow.appendChild(div);

    // Add a caption.
    var caption = document.createElement("p");

    // Add an image element that will display the current image.
    var myImage = document.createElement("img");
    // Add image to the slideshow div.
    div.appendChild(myImage);
    // Add caption to the slideshow div.
    div.appendChild(caption);
    
    myImage.src = folderName + picObjList[0].src;
    caption.innerHTML = picObjList[0].caption;

    // Create buttons.
    // Back button.
    var backButton = document.createElement("button");
    backButton.innerHTML = " prev ";
    slideShow.appendChild(backButton);

    // Forward button.
    var fwdButton = document.createElement("button");
    fwdButton.innerHTML = " next ";
    slideShow.appendChild(fwdButton);

    // Private variable that keeps track of which picture is showing.
    var picNum = 0;

    // Private method for next picture.
    function nextPic() {
        // Increment the current pic.
        picNum++;
        // If current picture number is greater than the length of
        // the list of pictures then go to the first picture.
        if (picNum >= picObjList.length) {
            picNum = 0;
        }
        // Change the image and caption source.				
        myImage.src = folderName + picObjList[picNum].src;
        caption.innerHTML = picObjList[picNum].caption;
    }

    // Private method to go back a picture.
    function prevPic() {
        // Decrement current picture.
        picNum--;
        if (picNum < 0) {
            picNum = picObjList.length - 1;
        }
        myImage.src = folderName + picObjList[picNum].src;
        caption.innerHTML = picObjList[picNum].caption;
    }

    // When the user clicks on the back button, fire the prevPic function.
    backButton.onclick = prevPic;
    // When the user clicks on the forward button, fire the nextPic function.
    fwdButton.onclick = nextPic;

    // Function for slideshow to go automatically.
    var interval;
    slideShow.auto = function (milliseconds)
    {
        interval = setInterval(nextPic, milliseconds);
    };

    // Stop auto.
    slideShow.stop = function ()
    {
        clearInterval(interval);
    };

    // Set the picture.
    slideShow.setPic = function (newNum)
    {
        if (newNum >= 0 && newNum < picObjList.length)
        {
            myImage.src = folderName + picObjList[newNum].src;
            caption.innerHTML = picObjList[newNum].caption;
        }
    };

    return slideShow;
}
