var ArticleController = (function ($) {
    return {
        view: function () {
            ArticleController.View.init();
        }
    };
}(jQuery));

ArticleController.View = (function ($) {

    var attachEvents = function () {

        var fullExcerptHeight = $('.article_main .news__main').height();
        $($('.news__sidebar a.card').get().reverse()).each(function () {
            var sidebarHeight = $('.article_main .news__sidebar').height();
            if (fullExcerptHeight < sidebarHeight) {
                $(this).addClass('hide');
            }
        });
    };

    return {
        init: function () {
            attachEvents();
        }
    };

}(jQuery));
