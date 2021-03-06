
$('#searchForFilm').click(function(){
 
 // When the users clicks the button after entering a string that string is stored in the input variable that is then used to query the APIs
 var input = document.getElementById('userInput').value;
  /* Film Info */
  $.getJSON('https://www.omdbapi.com/?t=' + input + "&y=&plot=full", function(data) {
    if(input = data.Title) {  
 // If the string is a valid title the result fields are populated by the corresponding JSON data
    $('#title').html(data.Title);
    $('#releaseyear').html("Released in " + data.Year);
    $('#synopsis').html(data.Plot);
    $('#starring').html("Starring: " + data.Actors);
    $('#Meta').html("Metascore: " + data.Metascore)
    } else {
 // If the string is invalid or empty the user is alerted and the different result fields are emptied
      $('#title').html("Sorry, we weren't able to find the film you were looking for. Maybe you made a mistake?");
      $('#releaseyear').html("");
      $('#starring').html("");
      $('#synopsis').html("");
      $('#Meta').html("");
    }
    
  });
 /* Poster Info */
  var movieurl = 'https://api.themoviedb.org/3/search/movie?api_key=2f75955b6a38cd374d35406d2cbf9fb4&query=' + input;
  $.ajax({
  url: movieurl,
  type: "GET"
}).then(function(json){
  document.getElementById('poster').style.visibility = 'visible';
document.getElementById('title').innerHTML = json.results[0].title;
const movieImageUrl = 'http://image.tmdb.org/t/p/w185/' + json.results[0].poster_path;
  document.getElementById('poster').src = movieImageUrl; 
}).catch(function(err) {
  document.getElementById('posterFailed').innerHTML = "Sorry, we weren't able to find a poster for this film";
})
});
                          
