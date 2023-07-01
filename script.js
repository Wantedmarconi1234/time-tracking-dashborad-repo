const dailyOption = document.querySelector(".daily-option");
const weeklyOption = document.querySelector(".weekly-option");
const monthlyOption = document.querySelector(".monthly-option");

//work
let workPreviousHours = document.querySelector(".work-previous-value");
let workCurrentHours = document.querySelector(".work-present-value");
//play
let playPreviousHours = document.querySelector(".play-previous-value");
let playCurrentHours = document.querySelector(".play-present-value");
//study
let studyPreviousHours = document.querySelector(".study-previous-value");
let studyCurrentHours = document.querySelector(".study-present-value");
//exercise
let exercisePreviousHours = document.querySelector(".exercise-previous-value");
let exerciseCurrentHours = document.querySelector(".exercise-present-value");
//social
let socialPreviousHours = document.querySelector(".social-previous-value");
let socialCurrentHours = document.querySelector(".social-present-value");
//self-care
let selfCarePreviousHours = document.querySelector(".selfCare-previous-value");
let selfCareCurrentHours = document.querySelector(".selfCare-present-value");



const getData = async () => {
    response = await fetch("data.json");
    const data = await response.json();
    return data;
}

//solution for daily
getData().then((data) => {
    data.forEach(element => {
        dailyOption.addEventListener("click", () => {
           if (element.title === "Work") {
                let doc = element.timeframes;
                workCurrentHours.innerHTML = `${doc.daily.current}hrs`;
                workPreviousHours.innerHTML = `Yesterday-${doc.daily.previous}hrs`;
            } 
            if (element.title === "Play") {
                let doc = element.timeframes;
                playCurrentHours.innerHTML = `${doc.daily.current}hrs`;
                playPreviousHours.innerHTML = `Yesterday-${doc.daily.previous}hrs`;
            }
            if (element.title === "Study") {
                let doc = element.timeframes;
                studyCurrentHours.innerHTML = `${doc.daily.current}hrs`;
                studyPreviousHours.innerHTML = `Yesterday-${doc.daily.previous}hrs`;
            }
            if (element.title === "Exercise") {
                let doc = element.timeframes;
                exerciseCurrentHours.innerHTML = `${doc.daily.current}hrs`;
                exercisePreviousHours.innerHTML = `Yesterday-${doc.daily.previous}hrs`;
            }
            if (element.title === "Social") {
                let doc = element.timeframes;
                socialCurrentHours.innerHTML = `${doc.daily.current}hrs`;
                socialPreviousHours.innerHTML = `Yesterday-${doc.daily.previous}hrs`;
            }
            if (element.title === "Self Care") {
                let doc = element.timeframes;
                selfCareCurrentHours.innerHTML = `${doc.daily.current}hrs`;
                selfCarePreviousHours.innerHTML = `Yesterday-${doc.daily.previous}hrs`;
            }
        })
    });
})

//solution for weekly
getData().then((data) => {
    data.forEach(element => {
        weeklyOption.addEventListener("click", () => {
           if (element.title === "Work") {
                let doc = element.timeframes;
                workCurrentHours.innerHTML = `${doc.weekly.current}hrs`;
                workPreviousHours.innerHTML = `Last week-${doc.weekly.previous}hrs`;
            } 
            if (element.title === "Play") {
                let doc = element.timeframes;
                playCurrentHours.innerHTML = `${doc.weekly.current}hrs`;
                playPreviousHours.innerHTML = `Last week-${doc.weekly.previous}hrs`;
            }
            if (element.title === "Study") {
                let doc = element.timeframes;
                studyCurrentHours.innerHTML = `${doc.weekly.current}hrs`;
                studyPreviousHours.innerHTML = `Last week-${doc.weekly.previous}hrs`;
            }
            if (element.title === "Exercise") {
                let doc = element.timeframes;
                exerciseCurrentHours.innerHTML = `${doc.weekly.current}hrs`;
                exercisePreviousHours.innerHTML = `Last week-${doc.weekly.previous}hrs`;
            }
            if (element.title === "Social") {
                let doc = element.timeframes;
                socialCurrentHours.innerHTML = `${doc.weekly.current}hrs`;
                socialPreviousHours.innerHTML = `Last week-${doc.weekly.previous}hrs`;
            }
            if (element.title === "Self Care") {
                let doc = element.timeframes;
                selfCareCurrentHours.innerHTML = `${doc.weekly.current}hrs`;
                selfCarePreviousHours.innerHTML = `Last week-${doc.weekly.previous}hrs`;
            }
        })
    });
})


//solution for monthly
getData().then((data) => {
    data.forEach(element => {
        monthlyOption.addEventListener("click", () => {
           if (element.title === "Work") {
                let doc = element.timeframes;
                workCurrentHours.innerHTML = `${doc.monthly.current}hrs`;
                workPreviousHours.innerHTML = `Last month-${doc.monthly.previous}hrs`;
            } 
            if (element.title === "Play") {
                let doc = element.timeframes;
                playCurrentHours.innerHTML = `${doc.monthly.current}hrs`;
                playPreviousHours.innerHTML = `Last month-${doc.monthly.previous}hrs`;
            }
            if (element.title === "Study") {
                let doc = element.timeframes;
                studyCurrentHours.innerHTML = `${doc.monthly.current}hrs`;
                studyPreviousHours.innerHTML = `Last month-${doc.monthly.previous}hrs`;
            }
            if (element.title === "Exercise") {
                let doc = element.timeframes;
                exerciseCurrentHours.innerHTML = `${doc.monthly.current}hrs`;
                exercisePreviousHours.innerHTML = `Last month-${doc.monthly.previous}hrs`;
            }
            if (element.title === "Social") {
                let doc = element.timeframes;
                socialCurrentHours.innerHTML = `${doc.monthly.current}hrs`;
                socialPreviousHours.innerHTML = `Last month-${doc.monthly.previous}hrs`;
            }
            if (element.title === "Self Care") {
                let doc = element.timeframes;
                selfCareCurrentHours.innerHTML = `${doc.monthly.current}hrs`;
                selfCarePreviousHours.innerHTML = `Last month-${doc.monthly.previous}hrs`;
            }
        })
    });
})