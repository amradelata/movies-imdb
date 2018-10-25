const cards = document.querySelector('.cards');

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f305b625a831b59ac3860c237234faae')
    .then(res => res.json())
    .then(data => {
        const results = data.results
        results.forEach(movie => {
            const card = `
                <div class="card">
                    <div class="image">
                    <img src="http://image.tmdb.org/t/p/w780/${movie.poster_path}">
                    </div>
                    <div class="content">
                        <h3>${movie.title}</h3>
                        <p>${movie.vote_average} / 10</p>
                    </div>
                </div>`;
            cards.innerHTML += card;

        });

    });

