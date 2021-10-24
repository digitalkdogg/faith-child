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

                if (millwood.page.current == 'home') {
                    millwood.fn.center_slider();
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
                let windowwidth = $(window).width();
                let wrapperwidth = $('.wrapper-main').css('width')

                if (wrapperwidth > 0 ){
                    let leftpos = windowwidth - wrapperwidth;
                    $('#rev_slider_1_1_wrapper').css({'width' : windowwidth + 'px', 'left': parseInt(leftpox +40) + 'px' })
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

    setTimeout(function () {
            php_vars = null
    },500)

})