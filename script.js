
$(document).ready(function(){
    function generateQuote(){
        setTimeout(function(){
            $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data) {
            var quote = data.quoteText;
            var author = data.quoteAuthor;
            author === "" ? $("#author").text("-unknown"): $("#author").text("-" + author);
            $("#quote").html("<i class='fas fa-quote-left fa-lg fa-spin'></i>"  +  quote);
        });
        var randomColor = "rgb(" + String(Math.floor(Math.random()*256)) + "," + String(Math.floor(Math.random()*256)) + "," + String(Math.floor(Math.random()*256)) +")"; 
     
        $("body").css("backgroundColor", randomColor);
        $("div").css({
            "color": randomColor,
            "opacity": 0.9
        });
        $("button").css("backgroundColor", randomColor);
        }, 1000);
    };
    generateQuote();

    $("#btn").on("click", function(){
        generateQuote();

    });
    $("#tweet").on("click", function(){
        window.open("https://twitter.com/intent/tweet?hashtags=quotes&" +"text=" + '"' + encodeURIComponent($("#quote").text()) + '"' + encodeURIComponent($("#author").text()) );
    });
    $("#share").on("click", function(){
        window.open("https://www.facebook.com/dialog/feed?");
    });
});
    
