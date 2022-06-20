// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// creazione array post
const posts = [
    {
        id: 1,
        name: 'Phil Mangione',
        profileImage: 'https://unsplash.it/300/300?image=15',
        date: '08-12-2020',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=171',
        likes: 80
    },
    {
        id: 2,
        name: 'Sofia Perlari',
        profileImage: 'https://unsplash.it/300/300?image=2',
        date: '10-04-2020',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=1',
        likes: 120
    },
    {
        id: 3,
        name: 'Mario Rossi',
        profileImage: 'https://unsplash.it/300/300?image=4',
        date: '01-31-2020',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: null,
        likes: 200
    },
    {
        id: 4,
        name: 'John Doe',
        profileImage: 'https://unsplash.it/300/300?image=6',
        date: '12-14-2020',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image: 'https://unsplash.it/600/300?image=15',
        likes: 150
    },
];

// funzione che fa partire ciclo for per far scorrere i post
// e appenderli al DOM
singlePost(posts);

// counter likes
const likeBtn = document.querySelectorAll('.js-like-button');
let likeCounter = document.querySelectorAll('.js-likes-counter');

for(let i = 0; i < likeBtn.length; i++) {
    const singleLikeBtn = likeBtn[i];
    singleLikeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        
        // aggiungo la classe per cambiare il colore
        this.classList.add('like-button--liked');

        // incremento il counter dei likes di uno
        const thisLikeCounter = likeCounter[i];
        let numberOfLikes = parseInt(thisLikeCounter.innerHTML);
        numberOfLikes++;
        thisLikeCounter.innerHTML = numberOfLikes;
        // console.log(numberOfLikes)
        // console.log(thisLikeCounter)
    }
    );
}
// -----------------
// FUNCTIONS
// -----------------
function singlePost(arrayPosts){
    for(let i = 0; i < arrayPosts.length; i++){
        const thisPost = arrayPosts[i];

        appendOnDom()

        // funzione per appendere tutti i post al container
        function appendOnDom(){
            const postContainer = document.getElementById('container');

            // prendo il tamplate dal dom
            const genericPost = `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${thisPost.profileImage}" alt="${thisPost.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${thisPost.name}</div>
                            <div class="post-meta__time">${thisPost.date}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${thisPost.postText}</div>
                <div class="post__image">
                    <img src="${drawImage(thisPost.image)}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${thisPost.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
            `;

            postContainer.innerHTML += genericPost;
        }
    }  

    function drawImage(image){
        return (image === null) ? '' : image;
    }
}
