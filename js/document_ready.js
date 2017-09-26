$(document).ready(function () {
    setActiveMenuItem();
    $(window).bind( 'hashchange', setActiveMenuItem);

    initProgressBars();
});

function setActiveMenuItem() { 
    var anchor = document.location.hash;

    $('.menu-item').each(function() {
        $(this).hasClass('active') ? $(this).removeClass('active') : '';
        $(this).attr('href') === anchor ? $(this).addClass('active') : '';
    });
}

function initProgressBars() {
    var htmlProgress = new ProgressBar.Circle('#HTML', {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#FF6B6B', width: 1 },
        to: { color: '#FF6B6B', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
        text: { value: 'HTML/CSS' }
    });
    htmlProgress.text.style.fontFamily = '"Roboto", sans-serif';
    htmlProgress.text.style.fontSize = '2rem';

    htmlProgress.animate(1.0);  // Number from 0.0 to 1.0

    var PhpProgress = new ProgressBar.Circle('#PHP', {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#FF6B6B', width: 1 },
        to: { color: '#FF6B6B', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
        text: { value: 'PHP' }
    });
    PhpProgress.text.style.fontFamily = '"Roboto", sans-serif';
    PhpProgress.text.style.fontSize = '2rem';

    PhpProgress.animate(.6);  // Number from 0.0 to 1.0

    var JsProgress = new ProgressBar.Circle('#Javascript', {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#888', width: 1 },
        to: { color: '#888', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
        text: { value: 'Javascript' }
    });
    JsProgress.text.style.fontFamily = '"Roboto", sans-serif';
    JsProgress.text.style.fontSize = '2rem';

    JsProgress.animate(.8);  // Number from 0.0 to 1.0

    var NodeJsProgress = new ProgressBar.Circle('#NodeJs', {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#888', width: 1 },
        to: { color: '#888', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
        text: { value: 'NodeJS' }
    });
    NodeJsProgress.text.style.fontFamily = '"Roboto", sans-serif';
    NodeJsProgress.text.style.fontSize = '2rem';

    NodeJsProgress.animate(.5);  // Number from 0.0 to 1.0

    var MaterialProgress = new ProgressBar.Circle('#MaterialDesign', {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#FF6B6B', width: 1 },
        to: { color: '#FF6B6B', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
        text: { value: 'MaterialDesign' }
    });
    MaterialProgress.text.style.fontFamily = '"Roboto", sans-serif';
    MaterialProgress.text.style.fontSize = '2rem';

    MaterialProgress.animate(.9);  // Number from 0.0 to 1.0

    var WordpressProgress = new ProgressBar.Circle('#Wordpress', {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#888', width: 1 },
        to: { color: '#888', width: 4 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);
        },
        text: { value: 'Wordpress' }
    });
    WordpressProgress.text.style.fontFamily = '"Roboto", sans-serif';
    WordpressProgress.text.style.fontSize = '2rem';

    WordpressProgress.animate(.9);  // Number from 0.0 to 1.0
}