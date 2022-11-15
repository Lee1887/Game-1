document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'Pommes fries',
            img: 'images/Pommes.png'
          },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
            name: 'Eis-Creme',
            img: 'images/Eis-Creme.png'
          },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'Milchshake',
          img: 'images/Milchshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
        {
          name: 'Pommes fries',
          img: 'images/Pommes.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'Eis-Creme',
          img: 'images/Eis-Creme.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
            name: 'Milchshake',
            img: 'images/Milchshake.png'
          },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
      ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Du hast das gleiche Bild gedrückt !')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Treffer, Glückwunsch :)')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Leider Falsch, Versuche es nochmal')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Glückwunsch, du hast alle Gefunden :-)!'
      }
    }
  
 
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })