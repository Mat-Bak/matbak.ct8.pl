import { Quote } from './Quote.js';
class Game {
    quotesWord = "";
    currentStep = 0;
    lastStep = 7;

    quotes = [{
        text: 'african penguin',
        category: 'Animal'
    }, {
        text: 'american cocker spaniel',
        category: 'Animal'
    }, {
        text: 'black bear',
        category: 'Animal'
    }, {
        text: 'hamster',
        category: 'Animal'
    }, {
        text: 'cookiecutter shark',
        category: 'Animal'
    }, {
        text: 'doberman pinscher',
        category: 'Animal'
    }, {
        text: 'fiddler crab',
        category: 'Animal'
    }, {
        text: 'flying squirrel',
        category: 'Animal'
    }, {
        text: 'lightning bug',
        category: 'Animal'
    }, {
        text: 'luminous shark',
        category: 'Animal'
    }, {
        text: 'red panda',
        category: 'Animal'
    }, {
        text: 'snow leopard',
        category: 'Animal'
    }, {
        text: 'esophagus',
        category: 'Body'
    }, {
        text: 'throat',
        category: 'Body'
    }, {
        text: 'fingernail',
        category: 'Body'
    }, {
        text: 'skeleton',
        category: 'Body'
    }, {
        text: 'cheeks',
        category: 'Body'
    }, {
        text: 'eyebrows',
        category: 'Body'
    }, {
        text: 'shoulder',
        category: 'Body'
    }, {
        text: 'muscle',
        category: 'Body'
    }, {
        text: 'intestines',
        category: 'Body'
    }, {
        text: 'waist',
        category: 'Body'
    }, {
        text: 'slippers',
        category: 'Clothes'
    }, {
        text: 'sweatshirt',
        category: 'Clothes'
    }, {
        text: 'battledress',
        category: 'Clothes'
    }, {
        text: 'shocummerbundes',
        category: 'Clothes'
    }, {
        text: 'pajamas',
        category: 'Clothes'
    }, {
        text: 'underclothes',
        category: 'Clothes'
    }, {
        text: 'raincoat',
        category: 'Clothes'
    }, {
        text: 'slacks',
        category: 'Clothes'
    }, {
        text: 'stockings',
        category: 'Clothes'
    }, {
        text: 'trousers',
        category: 'Clothes'
    }, {
        text: 'gabardine',
        category: 'Clothes'
    }, {
        text: 'broil',
        category: 'Cooking'
    }, {
        text: 'potholder',
        category: 'Cooking'
    }, {
        text: 'scramble',
        category: 'Cooking'
    }, {
        text: 'mandolin',
        category: 'Cooking'
    }, {
        text: 'percolator',
        category: 'Cooking'
    }, {
        text: 'microwave',
        category: 'Cooking'
    }, {
        text: 'refrigerator',
        category: 'Cooking'
    }, {
        text: 'strainer',
        category: 'Cooking'
    }, {
        text: 'tablespoon',
        category: 'Cooking'
    }, {
        text: 'utensils',
        category: 'Cooking'
    }, {
        text: 'colander',
        category: 'Cooking'
    }, {
        text: 'boysenberry',
        category: 'Fruit'
    }, {
        text: 'mandarin orange',
        category: 'Fruit'
    }, {
        text: 'tangerine',
        category: 'Fruit'
    }, {
        text: 'pineapple',
        category: 'Fruit'
    }, {
        text: 'persimmon',
        category: 'Fruit'
    }, {
        text: 'crabapple',
        category: 'Fruit'
    }, {
        text: 'grapefruit',
        category: 'Fruit'
    }, {
        text: 'honeydew',
        category: 'Fruit'
    }, {
        text: 'lingonberry',
        category: 'Fruit'
    }, {
        text: 'persimmon',
        category: 'Fruit'
    }, {
        text: 'tangerine',
        category: 'Fruit'
    }, {
        text: 'cartography',
        category: 'Geography'
    }, {
        text: 'desert',
        category: 'Geography'
    }, {
        text: 'northeast',
        category: 'Geography'
    }, {
        text: 'mountain',
        category: 'Geography'
    }, {
        text: 'southwest',
        category: 'Geography'
    }, {
        text: 'valley',
        category: 'Geography'
    }, {
        text: 'waterfall',
        category: 'Geography'
    }, {
        text: 'topography',
        category: 'Geography'
    }, {
        text: 'southeast',
        category: 'Geography'
    }, {
        text: 'parallel',
        category: 'Geography'
    }, {
        text: 'latitude',
        category: 'Geography'
    }, {
        text: 'hammer',
        category: 'Tools'
    }, {
        text: 'bellows',
        category: 'Tools'
    }, {
        text: 'pliers',
        category: 'Tools'
    }, {
        text: 'scissors',
        category: 'Tools'
    }, {
        text: 'screwdriver',
        category: 'Tools'
    }, {
        text: 'wrench',
        category: 'Tools'
    }, {
        text: 'pitchfork',
        category: 'Tools'
    }, {
        text: 'airplane',
        category: 'Transportation'
    }, {
        text: 'bicycle',
        category: 'Transportation'
    }, {
        text: 'helicopter',
        category: 'Transportation'
    }, {
        text: 'motorcycle',
        category: 'Transportation'
    }, {
        text: 'subway',
        category: 'Transportation'
    }, {
        text: 'truck',
        category: 'Transportation'
    }, {
        text: 'train',
        category: 'Transportation'
    }, {
        text: 'accumulation',
        category: 'Weather'
    }, {
        text: 'climatology',
        category: 'Weather'
    }, {
        text: 'condensation',
        category: 'Weather'
    }, {
        text: 'hydrosphere',
        category: 'Weather'
    }, {
        text: 'landspout',
        category: 'Weather'
    }, {
        text: 'beautiful',
        category: 'Adjectives for People'
    }, {
        text: 'careless',
        category: 'Adjectives for People'
    }, {
        text: 'dangerous',
        category: 'Adjectives for People'
    }, {
        text: 'exciting',
        category: 'Adjectives for People'
    }, {
        text: 'famous',
        category: 'Adjectives for People'
    }, {
        text: 'friendly',
        category: 'Adjectives for People'
    }, {
        text: 'interesting',
        category: 'Adjectives for People'
    }, {
        text: 'unlucky',
        category: 'Adjectives for People'
    }, {
        text: 'popular',
        category: 'Adjectives for People'
    }, {
        text: 'account',
        category: 'Bank'
    }, {
        text: 'borrow',
        category: 'Bank'
    }, {
        text: 'cashier',
        category: 'Bank'
    }, {
        text: 'currency',
        category: 'Bank'
    }, {
        text: 'customer',
        category: 'Bank'
    }, {
        text: 'deposit',
        category: 'Bank'
    }, {
        text: 'interest',
        category: 'Bank'
    }, {
        text: 'mortgage',
        category: 'Bank'
    }, {
        text: 'manager',
        category: 'Bank'
    }, {
        text: 'savings',
        category: 'Bank'
    }, {
        text: 'withdraw',
        category: 'Bank'
    }, {
        text: 'restaurant',
        category: 'Buildings & Places'
    }, {
        text: 'supermarket',
        category: 'Buildings & Places'
    }, {
        text: 'library',
        category: 'Buildings & Places'
    }, {
        text: 'museum',
        category: 'Buildings & Places'
    }, {
        text: 'astrophysics',
        category: 'Science'
    }, {
        text: 'climatologist',
        category: 'Science'
    }, {
        text: 'entomology',
        category: 'Science'
    }, {
        text: 'ichthyology',
        category: 'Science'
    }, {
        text: 'lepidoptery',
        category: 'Science'
    }, {
        text: 'paleontology',
        category: 'Science'
    }, {
        text: 'seismology',
        category: 'Science'
    }, {
        text: 'virologist',
        category: 'Science'
    }, {
        text: 'volcanology',
        category: 'Science'
    }, {
        text: 'observatory',
        category: 'Science'
    }, {
        text: 'magnetism',
        category: 'Science'
    }, {
        text: 'aquamarine',
        category: 'Color'
    }, {
        text: 'complementary',
        category: 'Color'
    }, {
        text: 'mahogany',
        category: 'Color'
    }, {
        text: 'persimmon',
        category: 'Color'
    }, {
        text: 'periwinkle',
        category: 'Color'
    }, {
        text: 'shamrock',
        category: 'Color'
    }, {
        text: 'turquoise',
        category: 'Color'
    }, {
        text: 'apple blossom',
        category: 'Flowers'
    }, {
        text: 'chrysanthemum',
        category: 'Flowers'
    }, {
        text: 'goldenrod',
        category: 'Flowers'
    }, {
        text: 'jessamine',
        category: 'Flowers'
    }, {
        text: 'championship',
        category: 'Sports'
    }, {
        text: 'doubleheader',
        category: 'Sports'
    }, {
        text: 'figure skating',
        category: 'Sports'
    }, {
        text: 'hammer throw',
        category: 'Sports'
    }, {
        text: 'high jump',
        category: 'Sports'
    }, {
        text: 'lawn bowling',
        category: 'Sports'
    }, {
        text: 'roller skating',
        category: 'Sports'
    }];

    constructor({
        lettersWrapper,
        categoryWrapper,
        wordWrapper,
        outputWrapper,
        resetButton
    }) {
        this.lettersWrapper = lettersWrapper;
        this.categoryWrapper = categoryWrapper;
        this.wordWrapper = wordWrapper;
        this.outputWrapper = outputWrapper;
        this.resetButton = resetButton;

        const { text, category } = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quotesWord = text;
        console.log("haslo", text);
        this.quote = new Quote(text);
    }
    guess(letter) {
        event.target.disabled = true;
        event.target.style.backgroundColor = "grey";
        event.target.style.color = "lightgrey";
        if (this.quote.guess(letter)) {
            this.drawQuote();
        } else {
            document.getElementsByClassName('step')[this.currentStep].style.opacity = 0;
            this.currentStep++;
            document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
            if (this.currentStep == this.lastStep) {
                this.loosing();
            }

        }

    }
    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', (event) => this.guess(label, event))
            this.lettersWrapper.appendChild(button);

        }
    }

    drawQuote() {
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
        if (!content.includes('_')) {
            this.winning();
        }
    }

    start() {
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();

    }
    winning() {
        this.wordWrapper.innerHTML = 'GRATULACJE, WYRGAŁEŚ!';
        this.lettersWrapper.innerHTML = '';
        this.categoryWrapper.innerHTML += ": " + this.quotesWord;
        this.resetButton.style.display = 'flex';
    }
    loosing() {
        this.wordWrapper.innerHTML = 'PRZEGRAŁEŚ, KONIEC GRY!';
        this.categoryWrapper.innerHTML += ": " + this.quotesWord;
        this.lettersWrapper.innerHTML = '';
        this.resetButton.style.display = 'flex';
    }
}
const game = new Game({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output'),
    resetButton: document.getElementById('reset')
});
game.start();