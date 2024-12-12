const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;

const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
}

trailer.animate(keyframes, { 
    duration: 100, 
    fill: "forwards" 
});
}
window.onmousemove = e => {
const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
animateTrailer(e, interacting); 
}




// Heading change

const mainHeadings = ["STUDENT LEADERSHIP","EXPERTISE", "A MOVEMENT", "For the students By the students Of the students", "NASA INDIA"];
const subHeadings = ["Enriching learning, Exploring the new.","Crafting unique experiences, Student made.","Imparting change, Empowering students","Strengthened by students, Executed by students, An all students association of Architecture.", "In pursuit of knowledge, together."];

let index = 0;
function updateText() {
    // Get heading elements
    const mainHeading = document.getElementById("main-heading");
    const subHeading = document.getElementById("sub-heading");

    // Apply scroll-out animation
    mainHeading.style.animation = 'scrollUpOut 1s ease forwards';
    subHeading.style.animation = 'scrollUpOutSub 1s ease forwards';
    mainHeading.style.fontSize = '3rem'
    subHeading.style.fontSize = '2rem'

    // Delay to allow the scroll-out animation to complete
    setTimeout(() => {
        // Update text content to the next item in the list
        index = (index + 1) % mainHeadings.length;
        mainHeading.textContent = mainHeadings[index];
        subHeading.textContent = subHeadings[index];

        // Apply scroll-in animation
        mainHeading.style.animation = 'scrollUpIn 1s ease forwards';
        subHeading.style.animation = 'scrollUpInSub 1s ease forwards';
    }, 1000); // Match this delay with the scroll-out animation duration
}

// Change text every 3 seconds
setInterval(updateText, 3000);
// updateText();

//  Change background image

const images = ['assets/background/img1.jpg', 'assets/background/img2.jpg', 'assets/background/img3.jpg', 'assets/background/img4.jpg','assets/background/img5.jpg','assets/background/img6.jpg','assets/background/img7.jpg','assets/background/img8.jpg'];
let index2 = 0;

function changeBackground() {
    let bgchange = document.getElementById("backgroundDiv");
    bgchange.style.backgroundImage = `url(${images[index2]})`;
    index2 = (index2 + 1) % images.length;
}

// Change the background every 3 seconds
setInterval(changeBackground, 3500);
changeBackground(); // Initial call to set the first background


  