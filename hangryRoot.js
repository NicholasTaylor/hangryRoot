const getAllCards = () => {
    const allArticles = document.querySelector('div [data-cy="displayed-cards"]').querySelectorAll('article');
    const allCards = [];
    for (let article in allArticles){
        let theArticle = allArticles[article];
        if (typeof theArticle === 'object'){
            allCards.push(theArticle)
        }
    }
    return allCards;
}

const filterOn = (creditsArr) => {
    let allCards = getAllCards();
    for (let card in allCards){
        let theCard = allCards[card];
        const credits = theCard.querySelector('h6').innerText;
        const isInFilter = creditsArr.indexOf(credits) > -1;
        theCard.style.display = isInFilter ? 'initial' : 'none';
    }
}

const filterOff = () => {
    let allCards = getAllCards();
    for (let card in allCards){
        let theCard = allCards[card];
        theCard.style.display = 'initial';
    }
}