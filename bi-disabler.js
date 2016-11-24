var t = setInterval(function () {
    var isModalActive = $('body.tp-modal-open').length > 0;
    if (isModalActive) {
        clearInterval(t);
        $('body.tp-modal-open').removeClass('tp-modal-open');
        $('.tp-modal').remove();
        $('.tp-iframe-wrapper').remove();
        $('.tp-backdrop').remove();
        console.log('Anti AdBlocker notification cleared');
    }
}, 100);
