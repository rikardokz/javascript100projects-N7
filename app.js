const img = document.getElementById("img");
const name = document.getElementById("name");
const stars = document.getElementById("stars");
const text = document.getElementById("text");
const btnBack = document.getElementById("back");
const btnNext = document.getElementById("next");

const opinions = {
    feedbackOne: {
        personUrl: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Megatron",
        stars: "⭐⭐⭐⭐",
        opinion: "Wonderfull website, such WOW"
    },
    feedbackTwo: {
        personUrl:"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Alien",
        stars: "⭐⭐⭐",
        opinion: "Basic stuff, but still better than Predator"
    },
    feedbackThree: {
        personUrl: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Kermit",
        stars: "⭐⭐⭐⭐⭐",
        opinion: "My pig loved it from the start. Really great"
    },
    feedbackFour: {
        personUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "Oh Long John",
        stars: "⭐",
        opinion: "ohhhhhhhh lonnnnng johnnnnnn"
    },
    feedbackFive: {
        personUrl: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        name: "T-Rex",
        stars: "⭐⭐⭐",
        opinion: "I will change my review after i've received the product"
    }
}

function feedbackChange(feedback) {
    name.innerText = feedback.name;
    stars.innerText = feedback.stars;
    img.src = feedback.personUrl;
    text.innerText = feedback.opinion;
}

// My noob event listeners

btnNext.addEventListener("click", () => {
    if(name.innerText === opinions.feedbackOne.name) {
        feedbackChange(opinions.feedbackTwo)
    } else if (name.innerText === opinions.feedbackTwo.name) {
        feedbackChange(opinions.feedbackThree)
    } else if (name.innerText === opinions.feedbackThree.name) {
        feedbackChange(opinions.feedbackFour)
    } else if(name.innerText === opinions.feedbackFour.name){
        feedbackChange(opinions.feedbackFive)
    } else {
        feedbackChange(opinions.feedbackOne)
    }
})

btnBack.addEventListener('click', () => {
    if(name.innerText === opinions.feedbackOne.name) {
        feedbackChange(opinions.feedbackFive)
    } else if (name.innerText === opinions.feedbackFive.name) {
        feedbackChange(opinions.feedbackFour)
    } else if (name.innerText === opinions.feedbackFour.name) {
        feedbackChange(opinions.feedbackThree)
    } else if(name.innerText === opinions.feedbackThree.name){
        feedbackChange(opinions.feedbackTwo)
    } else {
        feedbackChange(opinions.feedbackOne)
    }
})

