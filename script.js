//=VAR AND FUNCTIONS.


const deck = [
    {
        id: 1,
        name: 'Bloodfire Colossus',
        launchCost: ['6', 'R', 'R'],
        combninedLaunchCost: 8,
        cardType: 'creature',
        subType: 'giant',
        expansion: {
            reprintId: 9,
            expansionName: 'Exodus',
            rarityColor: 'silver',
        },
        flavorText: {
            quote: 'bla bla bla...',
            author: 'Lochness Monster',
        },
        abilities: [
            {
                launchCost: ['R', 'T'],
                description: '...alb alb alb',
            },
            {//^IN CASE OF OTHER ABILITIES.
                launchCost: ['U', 'T'],
                description: 'some random text',
            },
        ],
        collectionNumber: '177/350',
        constitution: 13,
        strength: 13,
        cardBorderColor: '#f00',
        illustration: {
            id: 1,
            name: 'Greg Staples',
        },
    },
    {
        id: 2,
        name: 'Behemoth',
        launchCost: ['7', 'U', 'U'],
        combninedLaunchCost: 9,
        cardType: 'creature',
        subType: 'giant',
        expansion: {
            reprintId: 10,
            expansionName: 'Exodus',
            rarityColor: 'Golden',
        },
        flavorText: {
            quote: 'bla bla bla...',
            author: 'Abraham Lincoln',
        },
        abilities: [
            {
                launchCost: ['U'],
                description: 'Lorem',
            },
            {//^IN CASE OF OTHER ABILITIES.
                launchCost: ['U', 'T'],
                description: 'Ipsum',
            },
        ],
        collectionNumber: '198/350',
        constitution: 18,
        strength: 18,
        cardBorderColor: '#000',
        illustration: {
            id: 2,
            name: 'Simon Caravel',
        },
    },
    {
        id: 3,
        name: 'Oryx',
        launchCost: ['3', 'B'],
        combninedLaunchCost: 4,
        cardType: 'creature',
        subType: '',
        expansion: {
            reprintId: 3,
            expansionName: 'Exodus',
            rarityColor: 'Silver',
        },
        flavorText: {
            quote: 'Defende nos in proelio',
            author: 'Michael',
        },
        abilities: [
            {
                launchCost: ['B'],
                description: '',
            },
            {//^IN CASE OF OTHER ABILITIES.
                launchCost: ['B', 'T'],
                description: '',
            },
        ],
        collectionNumber: '34/350',
        constitution: 11,
        strength: 11,
        cardBorderColor: '#000',
        illustration: {
            id: 3,
            name: 'Stewart Cane',
        },
    },
];


//=MAGIC CARD OBJECTS.



const createCardTemplate = firstCard => {
    function isSubTypeMissing(elemento) {
        var result = '';
        if (elemento) {
            if (elemento.trim() !== '') {//^NON POSSO METTERLO ALLO STESSO LIVELLO DELL'ALTRO IF, PERCHE ALTRIMENTI MI DAREBBE ERRORE NEL CASO IN CUI NON CI FOSSE DATO CHE NON LO TROVA.
                result = `- ${elemento}`;
            };
        };
        return result;
    };


    verifiedCardType = isSubTypeMissing(firstCard.subType);


    //?FOR-CYCLE IN CASE THERE'S LESS THAN ONE OBJECT IN 'ABILITIES'. 
    let abilitiesDetails = '';

    for (let i = 0; i < firstCard.abilities.length; i++) {
        if (firstCard.abilities.length > 0) {
            abilitiesDetails += `<li><strong>Launch cost:</strong> ${firstCard.abilities[i].launchCost}`;
            abilitiesDetails += `<li><strong>Description:</strong> ${firstCard.abilities[i].description}`;
        }
    };


    let cardTemplate = `
    <ul class="card">
        <li><strong>Id card:</strong> ${firstCard.id}</li>
        <li><strong>Name:</strong> ${firstCard.name}</li>
        <li><strong>Launch cost:</strong> ${firstCard.launchCost.join(', ')}</li>
        <li><strong>Combined launch cost:</strong> ${firstCard.combninedLaunchCost}</li>
        <li><strong>Card type:</strong> ${firstCard.cardType} ${verifiedCardType}</li>
        <li class="red-dot"><strong>Expansion:</strong>
            <ul>
                <li><strong>Expansion number:</strong> ${firstCard.expansion.reprintId}</li>
                <li><strong>Expansion name:</strong> ${firstCard.expansion.expansionName}</li>
                <li><strong>Card rarity:</strong> ${firstCard.expansion.rarityColor}</li>
            </ul>
        </li>
        <li class="red-dot"><strong>Flavor:</strong>
            <ul>
                <li><strong>Flavor text quote:</strong> ${firstCard.flavorText.quote}</li>
                <li><strong>Flavor text author:</strong> ${firstCard.flavorText.author}</li>
            </ul>
        </li>
        <li class="red-dot"><strong>Abilities:</strong>
            <ul>
                ${abilitiesDetails}
            </ul>
        </li>
        <li><strong>Id card:</strong> ${firstCard.collectionNumber}</li>
        <li><strong>Constitution:</strong> ${firstCard.constitution}</li>
        <li><strong>Strength:</strong> ${firstCard.strength}</li>
        <li class="red-dot"><strong>Illustration:</strong>
            <ul>
                <li><strong>Illustration id:</strong> ${firstCard.illustration.id}</li>
                <li><strong>Illustrator Name:</strong> ${firstCard.illustration.name}</li>
            </ul>
        </li>
    </ul>
    `;
    return cardTemplate;
};

const printCard = document.getElementById('magic-card');

const renderDeck = (myDeck, targetElement) => {


    let deckTemplate = '';

    for (let i = 0; i < deck.length; i++) {

        const currentCard = deck[i];
        deckTemplate += createCardTemplate(currentCard);
    };





    targetElement.innerHTML = deckTemplate;
};

//=PRINT FUNCTION IN PAGE.
renderDeck(deck, printCard);

const inputField = document.getElementById('search');
const selectField = document.getElementById('filter');
const button = document.getElementById('button');

selectField.addEventListener('change', () => {
    const currentValue = selectField.value;

    if (currentValue !== 'all') {
        inputField.classList.remove('hidden');
    } else {
        inputField.classList.add('hidden');
    }
});
