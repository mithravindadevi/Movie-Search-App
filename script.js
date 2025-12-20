const API_KEY = "beb2bdc3";

function searchMovie() {
  const movieName = document.getElementById("movieInput").value;
  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("movieContainer");
      container.innerHTML = "";

      if (data.Response === "True") {
        data.Search.forEach(movie => {
          container.innerHTML += `
            <div class="movie">
              <img src="${movie.Poster}" alt="Poster">
              <h3>${movie.Title}</h3>
              <p>${movie.Year}</p>
            </div>
          `;
        });
      } else {
        container.innerHTML = "<p>Movie not found ❌</p>";
      }
    });
}
