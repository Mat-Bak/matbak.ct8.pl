// Scroll to top 
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navbar Icon Animation
function myFunction(x) {
    x.classList.toggle("change");
    displayMenu();
}

//Animate menu on phones
async function displayMenu(){
    const x = document.querySelectorAll(".menuOptions");
    const y = document.querySelectorAll(".menuOptionsText");
    const contact = document.querySelector(".contact");
    if(x[1].style.display == "block"){
        contact.style.display = "none";
        for(let i = x.length-1; i >= 0; --i){    
            for(let j = 70; j > 0; j-=5){
                x[i].style.height = j + "px";
                if(j == 44){
                    y[i].style.display = "none"; 
                }
                await sleep(.1);
            }
            x[i].style.display = "none";
        }
        
    }else{
        for(let i = 0; i < x.length; ++i){
            x[i].style.display = "block";
            x[i].style.height = "0";
            for(let j = 1; j <=70; j+=5){
                x[i].style.height = j + "px";
                if(j == 41){
                    y[i].style.display = "block";
                }
                await sleep(.1);
            }
            
        }
        contact.style.display = "flex";
    }
    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



// Scroll to Menu
document.getElementById("AboutMeButton").addEventListener("click", function(){
    document.querySelector(".aboutMeConatiner").scrollIntoView({ behavior: "smooth", block: "start"});
})

document.getElementById("SkillsButton").addEventListener("click", function(){
    document.querySelector(".skillsContainer").scrollIntoView({ behavior: "smooth", block: "start"});
})

document.getElementById("ProjectsButton").addEventListener("click", function(){
    document.querySelector(".projectsContainer").scrollIntoView({ behavior: "smooth", block: "start"});
})

//Check if element is in view
function inView(element) {
    let windowHeight = window.innerHeight;
    let scrollY = window.scrollY || window.pageYOffset;
    let scrollPosition = scrollY + windowHeight;
    let elementHeight = element.clientHeight;
    let elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    
    if (scrollPosition > elementPosition) {
      return true;
    }
    
    return false;
}


//chaeck if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

//Set active button
function changeButtonActivity(){
    let about = document.querySelector(".AboutMe");
    if(isInViewport(about)){
        document.getElementById("AboutMeButton").classList.add("active");
    }else{
        document.getElementById("AboutMeButton").classList.remove("active");
    }

    let skills = document.getElementById("Skills");
    if(isInViewport(skills)){
        document.getElementById("SkillsButton").classList.add("active");
    }else{
        document.getElementById("SkillsButton").classList.remove("active");
    }

    // let projects = document.getElementById("Projects");
    // if(isInViewport(projects)){
    //     document.getElementById("ProjectsButton").classList.add("active");
    // }else{
    //     document.getElementById("ProjectsButton").classList.remove("active");
    // }
}



document.addEventListener('scroll', changeButtonActivity);

//Typing text at start
async function AnimateTextIntro(){
    let time = 50;
    let HiStart = "<Hi>";
    for(let i = 0; i < HiStart.length; ++i){
        document.querySelector("#HiStart").innerHTML += HiStart.charAt(i);
        await sleep(time);   
    }

    let myName = "I'm Mateusz"
    for(let j = 0; j < myName.length; ++j){
        document.querySelector(".name").innerHTML += myName.charAt(j);
        await sleep(time);
    } 

    let myJob = "FrontEnd Developer | Graphics Designer"
    for(let j = 0; j < myJob.length; ++j){
        document.querySelector(".myJob").innerHTML += myJob.charAt(j);
        await sleep(time);
    } 

    let HiEnd = "</Hi>";
    for(let k = 0; k < HiEnd.length; ++k){
        document.getElementById("HiEnd").innerHTML += HiEnd.charAt(k);
        await sleep(time);
    }
}

AnimateTextIntro();


//Line Skills animation
function lineAnimationTest(){
    const line = document.querySelector(".skillsLine");
    const observer = new IntersectionObserver( () => {
        if(isInViewport(line)){
            line.classList.add("skillsLineAnimation");
        }
        // else{
        //     line.classList.remove("skillsLineAnimation");
        // }
        // line.classList.toggle("skillsAnimation", line.isIntersecting)
    });
    observer.observe(line);
}

document.addEventListener("scroll", lineAnimationTest);



//Clear website cookies
function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

//Skills icons aniamtion 
async function skillsAnimation(){
    let skills = document.querySelectorAll(".skill");
    let skill = document.getElementById("Skills");
    if(isInViewport(skill)){
        skills.forEach((element) => {
            element.style.visibility = "visible";
            element.classList.add('skillsAnimation');
          });
        // for(let i = 0; i < skills.length; ++i){
        //     skills[i].style.visibility = "visible";
        //     skills[i].classList.add("skillsAnimation");
        //     // await sleep(100);
        // }
    }
    // }else{
    //     for(let i = 0; i < skills.length; ++i){
    //         skills[i].style.visibility = "hidden";
    //         skills[i].classList.remove("skillsAnimation");
    //     }
    // }
    
}

document.addEventListener("scroll", skillsAnimation);

// fadeIn animation aboutMe section & education Animation
function aboutMeAnimation(){
    let aboutMeConatiner = document.querySelector(".startAnim");
    let aboutMe = document.querySelector(".AboutMe");
    let masterEdu = document.querySelector(".masterEdu");
    let bachelorEdu = document.querySelector(".bachelorEdu");
    const observer = new IntersectionObserver( () => {
        if(isInViewport(aboutMeConatiner)){
            aboutMe.classList.add("AboutMeAnimIn");
            masterEdu.classList.add("educationAnimation");
            bachelorEdu.classList.add("educationAnimation");
        }
    });
    observer.observe(aboutMe);
}

document.addEventListener('scroll', aboutMeAnimation);


// //Education animation
// function educationAnimation(){
//     let educationContainer = document.querySelector(".educationContainer");
//     let education = document.querySelector(".education");
//     const observer = new IntersectionObserver( () => {
//         if(isInViewport(educationContainer)){
//             education.classList.add("education");
//         }
//     });
//     observer.observe(education);
// }
// document.addEventListener('scroll', educationAnimation);