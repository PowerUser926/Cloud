$(document).ready(function () {
    $('.lang_btn').click(function () {
        if ($('.another_lang').hasClass('lang_chng_down')) {
            $('.another_lang').toggleClass('lang_chng_up')
            $('.lang_btn').toggleClass('arrow_rotate')
        } else {
            $('.another_lang').toggleClass('lang_chng_down')
            $('.lang_btn').toggleClass('arrow_rotate')
        }
    });
});

