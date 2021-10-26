var $ = jQuery
class Millwood {
    constructor() {
        this.page = {
            'url': location.href,
            'name': document.title,
            'location':location
        },
        this.vars = {},
        this.stripe_utils = {

        },
        this.test =function () {
            console.log('hi');
            console.log( php_vars );
            console.log(this.fn.test());
        }
        this.fn = {
            'init': function () {
                try {millwood.vars['home_url'] = php_vars['home_url']} catch(e) {console.log(e);};
                try {millwood.vars['menu'] = php_vars['menu']} catch(e) {console.log(e);};
                try {millwood.vars['rest_url'] = php_vars['rest_url']} catch(e) {console.log(e);};
                try {millwood.vars['site_url'] = php_vars['site_url']} catch(e) {console.log(e);};
                try {millwood.vars['stylesheet_dir'] = php_vars['stylesheet_dir']} catch(e) {console.log(e);};
                try {millwood.vars['is_admin'] = php_vars['is_admin']} catch(e) {console.log(e);};


                millwood.page.current = this.get_current_page();

                if ($('.force-full-width').length > 0 ) {
                    millwood.fn.force_fullwidth();
                }

                if ($(window).width() > 1500==true) {
                    millwood.fn.center_slider();
                }


                if (millwood.page.current == 'home') {
                 //   millwood.fn.center_slider();
                }

                millwood.fn.set_header_height();
                if (millwood.fn.is_mobile()==true) {
                    setTimeout(function () {
                        millwood.fn.set_header_height();
                    },500);
                }

            },
            'is_mobile' : function () {return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);},
            'force_fullwidth': function () {
                let windowwidth = $('body').width();
                let divleft = $('.force-full-width').position().left
                $('.force-full-width').each(function () {
                    $(this).css({'width': windowwidth+'px', 'left': parseInt(-divleft) +'px', 'position': 'relative'})
                })
            },
            'set_header_height': function () {

                let header = $('header.site-header');

                let paddingTop = parseInt($(header).css('padding-top'))
                let paddingBot = parseInt($(header).css('padding-bottom'))

                let headerheight = $(header).height() + paddingTop + paddingBot;
                
                $('#site-main').css({'padding-top': headerheight+'px'});

                if($('#ilovewp-hero').length > 0) {
                    $('#ilovewp-hero').remove();
                }

            },
            'get_current_page': function () {
               let paths =  millwood.page.location.pathname.split('/')

                paths = paths.filter(function(item) {
                    return item !== ''
                })
                if (paths.length == 1) {
                    return 'home';
                } else {
                    return paths[paths.length - 1];
                }

            },
            'center_slider': function () {  
                if($('#rev_slider_1_1_wrapper').length >0 ) {
                    $('#rev_slider_1_1_wrapper').css({'max-width': '1500px'});
                }

            },
            test: function () {
                return "hello";
            }
        }
    }
}

const millwood = new Millwood();
$(document).ready(function () {
    millwood.fn.init();

    $(window).resize(function () {
        millwood.fn.set_header_height()
        if (millwood.fn.is_mobile()==true) {
            setTimeout(function () {
                millwood.fn.set_header_height();
            },500);
        }
        if (millwood.page.current == "home") {
            millwood.fn.center_slider();
            if ($('.force-full-width').length > 0 ) {
                millwood.fn.force_fullwidth();
            }
        }
    })

    setTimeout(function () {
            php_vars = null
    },500)

})