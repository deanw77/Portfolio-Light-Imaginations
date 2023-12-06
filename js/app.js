const overlay = $('overlay');
const hamburger = $('#hamburgerMenu');
const offScreenMenu = $('#offScreenMenu');
const projectGallery = $('#projectGallery');
const subList = $('#subList');
const menuButton = $('.menuButton');
const barProjectGallery = $('#barProjectGallery');
const barSubList = $('#barSubList');
const barMenuButton = $('.barMenuButton');

hamburger.on('click', function() {
    hamburger.toggleClass('active');
    offScreenMenu.toggleClass('active');
});

projectGallery.on('click', function() {
    subList.toggleClass('active');
});

menuButton.on('click', function() {
    hamburger.removeClass('active');
    offScreenMenu.removeClass('active');
    subList.removeClass('active');
});

barProjectGallery.on('click', function() {
    barSubList.toggleClass('active');
});

barMenuButton.on('click', function() {
    barSubList.removeClass('active');
});