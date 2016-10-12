/* 

    Title: Wordpress Standalone AJAX Posts Pagination
    Author: Russell Ramey
    URL: https://www.github.com/russellramey/wp-ajax-posts

    Description:
    Standalone (no WP plugin) dynamic pagination for Wordpress posts. Uses Wordpress
    Pretty urls and built in pagination functions. Permalinks must be set up so post
    pagination shows as ../page/2, ../page/2, etc... Also requires that you have Wordpress
    post pagination being utilized in your loop. jQuery is also required - luckily Wordpress
    ships with jQuery ready to go out of the box.

    This is not a wordpress plugin, this is simply some code you as a dev can add into your
    themes JS file(s) and have AJAX post pagination built into your theme. No muss no fuss.

    -- Requires jQuery --
*/
/* 
    Set $element to the clickable 
    element in your html
*/
var $element = $(".your-element-class");
/* 
    Set $contnet to the containing div of
    the dynamic hmtl content 
*/
var $content = $(".your-contnet-element");
/* 
    Set default variables
*/
var $loading = false;
var $page = 2;
var $url = '';
/* 
    Initiate the function by clicking
    a button/link with a class of .loadmore
*/
$($element).click(function() {
    if(!$loading){
        $loading = true;
        $url = 'page/' + $page;
        /* 
            Initiate AJAX Call
        */
        $.ajax({
            type       : "GET",
            dataType   : "html",
            url        : $url,
            beforeSend : function(){
                $($element).text('Loading...');
            },
            /* 
                Process returned data
            */
            success    : function(data){
                // Find all .posts wrappers in response
                $data = $(data).find('.post');
                // Hide the returned data
                $data.hide();
                // Append data to $content container
                $content.append($data);
                // Fade in data to $content container
                $data.fadeIn(500, function(){
                    $loading = false;
                    $($element).text('Load More');
                });
            },
            /* 
                Stop action after all have been loaded
                & Prevent action if error is found.
            */
            error : function() {
                $($element).addClass('disabled').text('Nothing more to load');
            }
        });
    /* 
        Page count
    */
    $page++;
    }
    /* 
        Prevent default action
    */
    return false;
});