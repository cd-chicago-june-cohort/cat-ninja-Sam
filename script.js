var imagePairs = {
    ninja0 : 'cat0.png',
    ninja1 : 'cat1.png',
    ninja2 : 'cat2.png',
    ninja3 : 'cat3.png',
    ninja4 : 'cat4.png',
    
    cat0 : 'ninja0.png',
    cat1 : 'ninja1.png',
    cat2 : 'ninja2.png',
    cat3 : 'ninja3.png',
    cat4 : 'ninja4.png'
};

function imgSwitch (imgob, pic) {
    var newsrc = "";
    var oldsrc = ($(pic).attr('src'));
    if (oldsrc[0] == 'c') {
        var key = oldsrc.slice(0,4);
        newsrc = imgob[key];
        console.log(newsrc);
    } else {
        var key = oldsrc.slice(0,6);
        newsrc = imgob[key];
        console.log(newsrc);
    }
        return newsrc;
}

$(document).ready(function () {
     $('img').click(function() {
         $(this).fadeOut(100, function () {
            $(this).attr('src', function () {
                return imgSwitch(imagePairs, this);   
            });
        });
        $(this).fadeIn(100);
    });
});




