//Handle navigation 

$(document).ready(function () {
    $('#home').click(function (e) {
        location.href = 'index.html';
    })

    $('#home-mobile').click(function (e) {
        location.href = 'index.html';
    })

    $('#daytoday').click(function (e) {
        location.href = 'daytoday.html';
    })

    $('#daytoday-mobile').click(function (e) {
        location.href = 'daytoday.html';
    })

    $('#groups').click(function (e) {
        location.href = 'groups.html';
    })

    $('#groups-mobile').click(function (e) {
        location.href = 'groups.html';
    })

    $('#team').click(function (e) {
        featureUnavailable();
    })

    $('#team-mobile').click(function (e) {
        featureUnavailable();
    })

    $('#parents').click(function (e) {
        featureUnavailable();
    })

    $('#parents-mobile').click(function (e) {
        featureUnavailable();
    })

    $('#contact').click(function (e) {
        featureUnavailable();
    })

    $('#contact-mobile').click(function (e) {
        featureUnavailable();
    })

    function featureUnavailable() {
        window.alert('This feature is not available in this prototype');
    }

    //Group icon navigation (applicable only to 'groups' page)

    $('#minimonkeys-icon').click(function (e) {
        location.href = '#minimonkeys';
    })

    $('#littlelions-icon').click(function (e) {
        location.href = '#littlelions';
    })

    $('#jollygiraffes-icon').click(function (e) {
        location.href = '#jollygiraffes';
    })

    //Return to top navigation (applicable only to 'groups' page)

    $('#topofpage-minimonkeys').click(function (e) {
        location.href = '#container';
    })

    $('#topofpage-littlelions').click(function (e) {
        location.href = '#container';
    })

    $('#topofpage-jollygiraffes').click(function (e) {
        location.href = '#container';
    })
});
