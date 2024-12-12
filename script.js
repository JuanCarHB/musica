// Mostrar y ocultar formulario de agregar álbum
document.getElementById('agregar-albumes').addEventListener('click', function(event) {
    event.preventDefault(); // Evita la acción predeterminada
    const formulario = document.getElementById('formulario');
    
    // Alternar visibilidad del formulario
    if (formulario.style.display === 'block') {
        formulario.style.display = 'none';
    } else {
        formulario.style.display = 'block';
    }
});

// Datos de álbumes predefinidos
const albumsData = [
    {
        title: "21",
        artist: "Adele",
        quote: "We could have had it all.",
        review: "Un álbum que marca un antes y después en la carrera de Adele, con canciones de amor, dolor y crecimiento personal.",
        img: "https://i.scdn.co/image/ab67616d0000b2732118bf9b198b05a95ded6300",
        audio: "https://www.youtube.com/watch?v=rYEDA3JcQqw",
        lyrics: "You're gonna wish you never had met me ..."
    },
    {
        title: "The Rise and Fall of Ziggy Stardust",
        artist: "David Bowie",
        quote: "Ziggy played guitar.",
        review: "Un álbum conceptual que sigue la historia de un extraterrestre llamado Ziggy Stardust.",
        img: "https://m.media-amazon.com/images/I/81YLSzm09SL._SY200_QL15_.jpg",
        audio: "https://www.youtube.com/watch?v=na8xgu-KLAk",
        lyrics: "Ziggy played guitar, jamming good with Weird and Gilly."
    },
    {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        quote: "The dark side of the moon is the only thing that makes me feel alive.",
        review: "El álbum más famoso de Pink Floyd, que explora temas como el tiempo, la locura y la condición humana.",
        img: "https://graffica.info/wp-content/uploads/The-Dark-Side-of-the-Moon-03.jpg",
        audio: "https://www.youtube.com/watch?v=jcz0YxYl6Ac",
        lyrics: "Breathe, breathe in the air."
    },
    {
        title: "Harry's House",
        artist: "Harry Styles",
        quote: "You don't have to say you love me.",
        review: "El tercer álbum de estudio de Harry Styles, lleno de canciones con un sonido pop moderno.",
        img: "https://i.discogs.com/IRoQbj6ewtecVjSeroFNvvH3kRBM582_vJnzcXyJQX0/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI0MTQw/MTU2LTE2NTk5ODYx/ODAtMzcwMS5qcGVn.jpeg",
        audio: "https://www.youtube.com/watch?v=H5v3kku4y6Q",
        lyrics: "You know it's not the same as it was. In this world, it's just us"
    },
    {
        title: "Evolve",
        artist: "Imagine Dragons",
        quote: "Whatever it takes.",
        review: "Un álbum de alt-rock con himnos inspiradores sobre la superación personal.",
        img: "https://pm1.aminoapps.com/7517/e811df31d9dc907c0b719477f3b7ad1b6b3a841er1-640-360v2_hq.jpg",
        audio: "https://www.youtube.com/watch?v=gOsM-DYAEhY",
        lyrics: "'Cause I love the adrenaline in my veins. I do whatever it takes. 'Cause I love how it feels when I break the chains"
    },
    {
        title: "Endless Summer Vacation",
        artist: "Miley Cyrus",
        quote: "We went to hell, but we never came back.",
        review: "Un álbum que captura el espíritu del verano con una fusión de pop y rock.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdM-ZEEII2M_F8izEkyVq-xKVZuwYFhTn4YA&s",
        audio: "https://www.youtube.com/watch?v=G7KNmW9a75Y",
        lyrics: "I can buy myself flowers. Write my name in the sand. Talk to myself for hours. Say things you don't understand. I can take myself dancing. And I can hold my own hand. Yeah, I can love me better than you can."
    },
    {
        title: "Hit Me Hard and Soft",
        artist: "Billie Eilish",
        quote: "Did I cross the line?",
        review: "Un álbum oscuro y experimental que abarca temas de juventud, dolor y autodescubrimiento.",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Billie_Eilish_-_Hit_Me_Hard_and_Soft.png/220px-Billie_Eilish_-_Hit_Me_Hard_and_Soft.png",
        audio: "https://www.youtube.com/watch?v=d5gf9dXbPi0",
        lyrics: "Birds of a feather, we should stick together."
    },
];

// Función para mostrar los álbumes
function displayAlbums() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Limpiar los posts actuales

    albumsData.forEach(album => {
        const post = document.createElement('div');
        post.classList.add('post');

        post.innerHTML = `
            <img src="${album.img}" alt="${album.title}">
            <h2>${album.title}</h2>
            <p><strong>${album.artist}</strong></p>
            <p>${album.review}</p>
            <p class="quote">"${album.quote}"</p>
            <a href="${album.audio}" target="_blank">Escuchar canción representativa</a>
            <p><strong>Letra:</strong> ${album.lyrics}</p>
        `;

        postsContainer.appendChild(post);
    });
}

// Función para manejar la navegación en el carrusel
let currentIndex = 0;

function showPost(index) {
    const postsContainer = document.getElementById('posts');
    const posts = document.querySelectorAll('.post');
    
    if (index < 0) currentIndex = posts.length - 1;
    else if (index >= posts.length) currentIndex = 0;
    else currentIndex = index;

    postsContainer.style.transform = `translateX(-${currentIndex * 320}px)`; // Ajustar el desplazamiento
}

// Navegar a la siguiente o anterior álbum
document.getElementById('next').addEventListener('click', () => showPost(currentIndex + 1));
document.getElementById('prev').addEventListener('click', () => showPost(currentIndex - 1));

// Cargar los álbumes al iniciar la página
window.onload = () => {
    displayAlbums();
    showPost(currentIndex); // Mostrar el primer álbum
};




