$('#searchForFilm').click(function(){
 var input = document.getElementById('userInput').value;
  /* Film Info */
  $.getJSON('https://www.omdbapi.com/?t=' + input + "&y=&plot=full", function(data) {
    if(input = data.Title) {
    $('.results').fadeIn(2000);  
    $('#title').html(data.Title);
    $('#releaseyear').html("Released in " + data.Year);
    $('#synopsis').html(data.Plot);
    $('#starring').html("Starring: " + data.Actors);
    $('#Meta').html("Metascore: " + data.Metascore)
    } else {
      $('#title').html("Sorry, we weren't able to find the film you were looking for. Maybe you made a mistake?");
      $('#releaseyear').html("");
      $('#starring').html("");
      $('#synopsis').html("");
      $('#Meta').html("");
    }
    
  });
});