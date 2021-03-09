(document).ready(function () {
('.radio-group .radio').click(function () {
('.selected .fa').removeClass('fa-check');
('.radio').removeClass('selected');
(this).addClass('selected');
});
});