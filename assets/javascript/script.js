window.onload = function(){
var buttons = [];

$("#search-exec").on("click", function(event) {
    event.preventDefault();
    var gifsrch =$("#srchinput").val();
    const api_key = "&api_key=Tu55M0ctc39IXfgfMa78YUFLKqCrQzPH"
    const limit = "&limit=10"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifsrch + api_key + limit;
    var trimmed = gifsrch.replace(/ +/g, "");

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        buttons.push(gifsrch);
        console.log(buttons);
        console.log(response);
        $("#results").prepend("<div id='"+trimmed+"'><h5>"+gifsrch+":</h5></div>")

          for(i=0; response.data.length; i++){
            $("#"+trimmed).append("<img class='m-1' src='"+response.data[i].images.fixed_height_small.url+"' alt='srchresult'>")
          }
    })

      $("#recent").append("<button id='"+trimmed+"btn' type='button' class='btn button-info m-2'>"+gifsrch+"</button>");
      $("#srchinput").val('');
})

};