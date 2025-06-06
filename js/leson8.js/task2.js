// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];

const deletedcard = cards.splice(1, 1);
console.log(deletedcard)
console.log(cards)

// 3. Видалити

const cardToRemove = 'Карточка-3';
console.log(cards.indexOf(cardToRemove))

// 4. Додати

const cardToInsert = 'Карточка-6';
console.log(cards.push(cardToInsert))

// 5. Оновити

const cardToUpdate = 'Карточка-4';
// я не зррозумів що тут треба зробити

console.log(cards)