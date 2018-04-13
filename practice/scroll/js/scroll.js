$(document).ready(function() {


    $(document).mousewheel(function(event) {
        console.log(event.deltaX, event.deltaY, event.deltaFactor);

        if(event.deltaY == -1)
        {
            $(document).scrollTo("+=20px");
        }
        if(event.deltaY == 1)
        {
            $(document).scrollTo("-=20px");
        }

        return false;
    });



    $('#home').parallax("50%", 0.1);


    $('#home .sprite1').parallax("50%", 0 - 0.5);
    $('.sprite').parallax("50%", 0);
});
