/**
 * 
 */

$(document).ready(function () {
    $("a[data-href]").click(function (event) {
        event.preventDefault();
        $(".secondCol").load($(this).attr("data-href"));
    });
});