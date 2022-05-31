const submitBtn = document.querySelector('.submit-btn');
const component = document.querySelector('.component');
const componentResponse = document.querySelector('.component-response');
const ratingBoxNumber = document.querySelectorAll('.component-rating-number-box-number');
const resultRating = document.querySelector('.result-rating');
let userRatingChoice = 1; // default value

submitBtn.addEventListener('click', onSubmit);
ratingBoxNumber.forEach(item => {
    item.addEventListener('click', handleRatingBtnClick);
});

function onSubmit() {
    component.style.display = 'none';
    resultRating.textContent = userRatingChoice;
    componentResponse.style.visibility = 'visible';
}

function handleRatingBtnClick(e) {
    ratingBoxNumber.forEach(item => {
        item.classList.remove('active-box');
    });

    if (e.target.classList.contains('component-rating-number-box-number')) {
        e.target.classList.add('active-box');
    } else {
        e.target.parentElement.classList.add('active-box');
    }
    userRatingChoice = e.target.textContent;
}

