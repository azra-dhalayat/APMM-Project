var cards = [
    { number: 1, class: "color-1" },
    { number: 2, class: "color-2" },
    { number: 3, class: "color-3" },
    { number: 4, class: "color-2" },
    { number: 5, class: "color-3" },
    { number: 6, class: "color-4" },
    { number: 7, class: "color-4" },
    { number: 8, class: "color-1" },
    { number: 9, class: "color-3" }
];

const renderHTML = (list) => {
    var ul = document.getElementById("listOfCards");
    ul.innerHTML = "";
    var i;
    for (i = 0; i < list.length; i++) {
        var text = list[i].number;
        var li = document.createElement('li');
        li.className = list[i].class;
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);
    }
};
const shuffle = () => {
    var i, j, temp;
    for (i = cards.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * (i + 1));

        temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    renderHTML(cards);
};

const sort = () => {
    cards.sort((a, b) => {
        return a.number - b.number;
    });
    renderHTML(cards);
};

renderHTML(cards);

document.getElementById("btnShuffle").addEventListener("click", shuffle);
document.getElementById("btnSort").addEventListener("click", sort);


