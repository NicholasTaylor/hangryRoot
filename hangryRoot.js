const theHost = window.location.hostname;
const theUrl = window.location.href;
const hungryRootHosts = [
    'hungryroot.com',
    'www.hungryroot.com'
]
const dashUrls = [
    'https://hungryroot.com/myhungryroot/',
    'https://www.hungryroot.com/myhungryroot/',
];

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

const dismissOnboardOverlay = () => {
    if (dashUrls.indexOf(theUrl) !== -1){
        const onboardOver = document.querySelector('div[data-cy="106-onboarding-overlay"]');
        if (onboardOver){
            onboardOver.querySelector('button[data-cy="106-onboarding-overlay-dismiss"]').click()
        }
    }
}

const hangryRootMain = () => {
    if (hungryRootHosts.indexOf(theHost) !== -1){
        dismissOnboardOverlay();
    }
}