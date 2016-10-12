# Simple WP AJAX Pagination

Standalone (no WP plugin) dynamic pagination for Wordpress posts. Uses Wordpress
Pretty urls and built in pagination functions. Permalinks must be set up so post
pagination shows as ../page/2, ../page/2, etc... Also requires that you have Wordpress
post pagination being utilized in your loop. jQuery is also required - luckily Wordpress
ships with jQuery ready to go out of the box.

This is not a wordpress plugin, this is simply some code you as a dev can add into your
themes JS file(s) and have AJAX post pagination built into your theme. No muss no fuss.

This code requires jQuery.

## Installation

Simply include the included js file, or add the fuction to your themes js file.

Again, make sure you are using Pretty Permalinks and are utilizing Wordpress standard pagination.

## Usage

1) Create a butotn or link:
```html
<a href="#" class="button loadmore">Load more posts</a>
```

2) Add your link/button to your themes template file.

3) Change the global variables in the JS function:
```javascript
var $element = $(".your-element-class");
var $content = $(".your-contnet-element");
```
`$element` is the class of the button/link you want to use to initiate the function.
`$content` is the content wrapper from the AJAX data that is returned (in HTML form). 

4) Profit...