// write your code here
//Declaring and initializing the cardInfo variable
let cardInfo;

//Creating the card-rendering function
function cardDisp(card) {
    cardInfo = card;
    cardTitle = document.querySelector('#card-title'),
    cardImageName = document.querySelector("#card-image"),
    cardLikes = document.getElementById("like-count"),
    cardLikesBtn = document.querySelector("#like-button"),
    cardCommentList = document.querySelector('#comments-list'),
    cardCommentForm = document.querySelector("#comment-form"),
    cardCommentInput = document.querySelector('#comment'),


    cardTitle.textContent = card.title;
    cardImageName.src = card.image;
    cardLikes.textContent = `${card.likes} Likes`;


    while (cardCommentList.hasChildNodes()) {
        cardCommentList.removeChild(cardCommentList.lastChild);
    }
}

//Adding comments
card.comments.forEach(comment => {
    let com = document.createElement('li');
    com.textContent = comment.content;
    cardCommentList.appendChild(com);
})

//Likes increment
cardLikesBtn.addEventListener('click', () => {
    card.likes += 1;
    cardLikes.textContent = `${card.likes} Likes`;
})

//Comment input on form
cardCommentForm.addEventListener('submit', (e) => {
    const commentInput = document.querySelector('#comment');
    e.preventDefault();
    let commentTag = document.createElement('li');
    commentTag.textContent = cardCommentInput.value;
    cardCommentList.appendChild(commentTag);

    const newCom = {
        id: card.comments.length + 1,
        imageId: 1,
        content: cardCommentInput.value
    }
    card.comments.push(newCom);
})

