const cards = document.querySelector('.cards');

fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f305b625a831b59ac3860c237234faae')
    .then(res => res.json())
    .then(data => {
        let results = data.results;
        // console.log(data.results[0].title);

        for (let key in results) {
            if (results.hasOwnProperty(key)) {
                // console.log(key + " -> " + results[key]);
                const card = `
                <div class="card">
                    <div class="image">
                    <img src="http://image.tmdb.org/t/p/w780/${data.results[key].poster_path}">
                    </div>
                    <div class="content">
                        <h3>${data.results[key].title}</h3>
                        <p>${data.results[key].vote_average} / 10</p>
                    </div>
                </div>`;
                cards.innerHTML += card;
            }
        }
    });

