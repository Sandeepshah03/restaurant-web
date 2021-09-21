$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").removeClass('btn-danger').children("span").removeClass('fa-pause');
            $("#carouselButton").addClass('btn-success').children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").removeClass('btn-success').children("span").removeClass('fa-play');
            $("#carouselButton").addClass('btn-danger').children("span").addClass('fa-pause');
        }
    });
    $('#reserveButton').click(function () {
        $('#reservetable').modal('show');
    })
    $('#loginButton').click(function () {
        $('#loginModal').modal('show');
    })
});