//=VAR AND FUNCTIONS.
const printCard = document.getElementById('magic-card');






//=MAGIC CARD OBJECTS.
var magicCard = {
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
};
//=PRINT OBJECTS IN PAGE.
//?IN CASE THERE'S NO 'SUBTYPE'. 

function isSubTypeMissing(elemento) {
    var result = '';
    if (elemento) {
        if (elemento.trim() !== '') {//^NON POSSO METTERLO ALLO STESSO LIVELLO DELL'ALTRO IF, PERCHE ALTRIMENTI MI DAREBBE ERRORE NEL CASO IN CUI NON CI FOSSE DATO CHE NON LO TROVA.
            result = `- ${elemento}`;
        };
    };
    return result;
};


verifiedCardType = isSubTypeMissing(magicCard.subType);


//?FOR-CYCLE IN CASE THERE'S LESS THAN ONE OBJECT IN 'ABILITIES'. 
let abilitiesDetails = '';

for (let i = 0; i < magicCard.abilities.length; i++) {
    if (magicCard.abilities.length > 0) {
        abilitiesDetails += `<li>Launch cost: ${magicCard.abilities[i].launchCost}`;
        abilitiesDetails += `<li>Description: ${magicCard.abilities[i].description}`;
    }
};



let cardTemplate = `
<ul class="card">
<li>Id card: ${magicCard.id}</li>
<li>Name: ${magicCard.name}</li>
<li>Launch cost: ${magicCard.launchCost.join(', ')}</li>
<li>Combined launch cost: ${magicCard.combninedLaunchCost}</li>
<li>Card type: ${magicCard.cardType} ${verifiedCardType}</li>
<li class="red-dot">Expansion:
    <ul>
        <li>Expansion number: ${magicCard.expansion.reprintId}</li>
        <li>Expansion name: ${magicCard.expansion.expansionName}</li>
        <li>Card rarity: ${magicCard.expansion.rarityColor}</li>
    </ul>
</li>
<li class="red-dot">Flavor:
    <ul>
        <li>Flavor text quote: ${magicCard.flavorText.quote}</li>
        <li>Flavor text author: ${magicCard.flavorText.author}</li>
    </ul>
</li>
<li class="red-dot">Abilities:
    <ul>
        ${abilitiesDetails}
    </ul>
</li>
<li>Id card: ${magicCard.collectionNumber}</li>
<li>Constitution: ${magicCard.constitution}</li>
<li>Strength: ${magicCard.strength}</li>
<li class="red-dot">Illustration:
    <ul>
        <li>Illustration id: ${magicCard.illustration.id}</li>
        <li>Illustrator Name: ${magicCard.illustration.name}</li>
    </ul>
</li>
`

printCard.innerHTML = cardTemplate;