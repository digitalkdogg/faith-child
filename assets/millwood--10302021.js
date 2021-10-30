var $ = jQuery
class Millwood {
    constructor() {
        this.page = {
            'url': location.href,
            'name': document.title,
            'location':location,
            'is_mobile': false
        },
        this.vars = {},
        this.stripe_utils = {

        },
        this.fn = {
            'init': function () {
                try {millwood.vars['home_url'] = php_vars['home_url']} catch(e) {console.log(e);};
                try {millwood.vars['menu'] = php_vars['menu']} catch(e) {console.log(e);};
                try {millwood.vars['rest_url'] = php_vars['rest_url']} catch(e) {console.log(e);};
                try {millwood.vars['site_url'] = php_vars['site_url']} catch(e) {console.log(e);};
                try {millwood.vars['stylesheet_dir'] = php_vars['stylesheet_dir']} catch(e) {console.log(e);};
                try {millwood.vars['is_admin'] = php_vars['is_admin']} catch(e) {console.log(e);};
                try {millwood.vars['center_slider_1500_offset']= php_vars['center_slider_1500_offset']} catch(e) {console.log(e);};

                if (window.innerWidth <= 768 || millwood.fn.is_mobile() == true) {
                    millwood.page.is_mobile = true;
                }

                millwood.page.current = this.get_current_page();

                if ($('.force-full-width').length > 0 ) {
                    millwood.fn.force_fullwidth();
                }

                if ($(window).width() > 1500==true) {
                    millwood.fn.center_slider();
                }

                millwood.fn.check_menu();

                if ($('.tanbg').length>0) {
                    $.each($('.tanbg'), function () {
                        let src = $(this).attr('data-src');
                        if (src != undefined) {
                            $(this).attr('style', 'background-image:url('+ src +')');
                        } else {
                            if ($(this).attr('style').length>1) {
                                let style = $(this).attr('style');
                                $(this).attr('style', style + 'background-image:url(' + millwood.vars.stylesheet_dir + '/assets/tan-bg.jpg);');
                            } else {
                                $(this).attr('style', 'background-image:url(' + millwood.vars.stylesheet_dir + '/assets/tan-bg.jpg);');
                            }
                            
                        }
                    })
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
                let divleft = $('.force-full-width').parent().position().left
                $('.force-full-width').each(function () {
                    $(this).css({'width': windowwidth+'px', 'left': parseInt(-divleft) +'px', 'position': 'relative'})
                })
            },
            'set_header_height': function () {
                if (millwood.page.is_mobile == true) {
                    setTimeout(function () {
                        if ($('#site-header-search').length == 1) {
                            if ($('.slicknav_nav #site-header-search').length == 0) {
                                $('#site-header-search').detach().appendTo('.slicknav_nav')
                            } 
                        }
                    },100);
                } else {
                    setTimeout(function () {
                        if($('#menu-main #site-header-search').length == 0) {
                            $('#site-header-search').detach().prependTo('#menu-menu')
                        } 
                    },500)
                }

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
            'check_menu': function () {
                //first disable accordion href on desktop
                $('#site-header-navigation').find('#menu-main').find('li.menu-item-has-children').each(function () {
                    $(this).children('a').addClass('nogo');
                })

                //then disable accordion href on mobile
                $('#menu-main-slick').slicknav({
                    prependTo:'.navbar-header',
                    label: faithStrings.slicknav_menu_home,
                    allowParentLinks: false
                });
        
            },
            'center_slider': function () {  
                if($('#rev_slider_1_1_wrapper').length >0 ) {
                    if ($('body').width() > 1500) {
                        if ($('style#rev-full-width-override').length == 0) {
                            let windowwidth = $('body').width()
                            let leftpos = 0;
                            if (millwood.vars.center_slider_1500_offset != undefined) {
                                leftpos = millwood.vars.center_slider_1500_offset;
                            }
                            
                            $('#rev_slider_1_1_wrapper').css({'max-width': '1500px'})
                            $('#rev_slider_1_1_wrapper').append('<style id = "rev-full-width-override">#rev_slider_1_1_wrapper {left: ' + leftpos + 'px !important;} </style>')
                        }
                    } else {
                        if ($('style#rev-full-width-override').length > 0) {
                            $('style#rev-full-width-override').remove()
                        }
                    }
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
        if (millwood.page.is_mobile==true) {
            setTimeout(function () {
                millwood.fn.set_header_height();
            },500);
        } else {
            millwood.fn.set_header_height();
        }
        if (millwood.page.current == "home") {
            millwood.fn.center_slider();
            if ($('.force-full-width').length > 0 ) {
                millwood.fn.force_fullwidth();
            }
        }

        if (window.innerWidth <= 768) {
            millwood.page.is_mobile = true;
        } else {
            millwood.page.is_mobile = false;
        }
    })

    $('a.nogo').on('click', function (e){
        e.preventDefault();
    })


    setTimeout(function () {
            php_vars = null
    },500)

})