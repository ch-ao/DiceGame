$('.btn').click(function() {

    const dice1 = $('.dice')[0];
    const dice2 = $('.dice')[1];
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const imageSource1 = "dice" + randomNumber1 + ".png";
    const imageSource2 = "dice" + randomNumber2 + ".png";

    $(dice1).children('img').attr('src', imageSource1);
    $(dice2).children('img').attr('src', imageSource2);

    if (randomNumber1 > randomNumber2) {
        $('h1').html('🚩 Player 1 Win !');
    } else if (randomNumber2 > randomNumber1) {
        $('h1').html('Player 2 Win ! 🚩');
    } else {
        $('h1').html('Draw !');
    }

});





