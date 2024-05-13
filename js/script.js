$(document).ready(function(){
    $('#drawerToggle').click(function(){
        $('.drawer').toggleClass('active');
    });

    $(document).click(function(e){
        if (!$(e.target).closest('.drawer').length && !$(e.target).closest('#drawerToggle').length) {
            $('.drawer').removeClass('active');
        }
    });
});
