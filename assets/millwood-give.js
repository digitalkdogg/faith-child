class Give {
  constructor() {
  	var _this = this;
  	this.vars = {'templates': {} },
  	this.fn = {
  		'init': function () {
  			try {_this.vars['stripe_api_test_key'] = php_vars['stripe_api_test_key']} catch(e) {console.log(e);};
            try {_this.vars['use_test_data'] = php_vars['use_test_data']} catch(e) {console.log(e);};
             try {_this.vars['templates']['stripe'] = php_vars['templates']['stripe']} catch(e) {console.log(e);};


            _this.fn.stripe();
  		},
        'stripe': function () {
            $.getScript( "https://js.stripe.com/v3/", function( data, textStatus, jqxhr ) {
            		console.log(_this);
					var stripe = '';

                    if (_this.vars.use_test_data == true) {
                        console.log(Stripe(_this.vars.stripe_api_test_key));
                    } else {
                        //use live key
                    }

                    
                    $('#stripe-api').html(_this.vars.templates.stripe);

//					stripe_utils.generate_init_data();

					
					
//					if (millwood.wp_data.location.host == 'yoda' || millwood.wp_data.location.host == 'localhost' || millwood.wp_data.location.host == 'kevin-nas') {
					
//						stripe_utils['stripe'] = Stripe(stripe_utils.stripe_test_key);
//						stripe_utils['key'] = stripe_utils.stripe_test_key;
//						stripe_utils['mode'] = 'test';
//					} else {
//						stripe_utils['stripe'] = Stripe(stripe_utils.stripe_live_key);
//					stripe_utils['key'] = stripe_utils.stripe_live_key;
//					stripe_utils['mode'] = 'live';
//					}

//					var stripeWrapper = $(stripe_utils.wrapperele);

					
//					if (stripeWrapper.length > 0 ) {
//						$(stripeWrapper).html(millwood.templates.stripe_form)
//					}

//					stripe_utils['element_obj'] = stripe_utils.stripe.elements();

//					stripe_utils['card'] = stripe_utils.element_obj.create('card', {
//						'hidePostalCode': true,
//						'style': {
//							'base': {
//								'iconColor': '#000',
//								'font-size': '16px',
//								'color': '#000',
//								'backgroundColor': '#f7f7f7',
//								'::placeholder': {
//									'color': '#555',
//								}
//							},
//							'invalid': {
//								'iconColor': '#ff4f4f',
//								'color': '#ff4f4f',
//							}
//						}
//					})

//					stripe_utils.card.mount('#card-element');
//					$(stripe_utils.wrapperele).find('input#names').focus()

//					$('button#submit').click(function (e) {
//						e.preventDefault();

//					})

//					stripe_utils.card.on('change', function (event) {
//						stripe_utils.clear_error();
//						if (event.error) {
//							stripe_utils.valid = false;
//							$(stripe_utils.wrapperele).find('button#payment').addClass('disabled');
//							$(stripe_utils.wrapperele).find('#confirmtab').addClass('disabled');
//							$('#payment-section .card-errors').html(event.error.message);
//
//						}
//						if (event.complete) {
//								//stripe_utils.get_payment_intents(stripe_utils.amount);
//								$('button#payment').removeClass('disabled');
//								stripe_utils['valid'] = true;
//						}

//					})

//					$(stripe_utils.wrapperele + ' button#submit').on('click', function (e) {
//						e.preventDefault();
//						if ($(this).hasClass('disabled')!=true) {
//							stripe_utils.get_payment_intents(stripe_utils.amount);
//							$('#confirm-section button#submit .spinner').addClass('spin');
//							//stripe_utils.confirm_card_payment();
//						}

//					})


//					$(stripe_utils.wrapperele + ' .amount-cell').on('click', function () {
//						$(stripe_utils.wrapperele + ' .amount-cell').each(function () {
//							$(this).removeClass('active');
//						})
//						let amount = $(this).attr('data-amount');

//						stripe_utils.clear_error();


//						if ($(this).attr('data-active')=='false') {
//							$(this).addClass('active');
//							$(this).attr('data-active', 'true');
//							$(stripe_utils.wrapperele).find('input#amount').val(amount)
//							$(stripe_utils.wrapperele).find('div#amount-result').html('$'+amount)
//							stripe_utils.amount = amount;
//							stripe_utils['valid'] = true;
//						} else {
//							amount = 0;
//							$(this).removeClass('active');
//							$(this).attr('data-active', 'false');
//							$(stripe_utils.wrapperele).find('input#amount').val(amount);
//							$(stripe_utils.wrapperele).find('div#amount-result').html('$'+amount);
//							stripe_utils.amount = amount;
//							stripe_utils['valid'] = false;
//						}

//					})


//					$(stripe_utils.wrapperele + ' input#amount').on('focus', function () {
//						$(this).addClass('active')
//						stripe_utils.clear_error();
//					})

//					$(stripe_utils.wrapperele + ' input#amount').on('focusout', function () {
//						$(this).removeClass('active');
//						var amount = $(this).val();
//				//		$(this).val(parseInt(amount));


//					//	$('div#amount-result').html('$'+amount)
//						stripe_utils.amount = amount
//
//					})

//					$(stripe_utils.wrapperele + ' input#amount').on('input', function () {
//						stripe_utils.clear_error();
//						$(stripe_utils.wrapperele).find('div#amount-result').html('$'+$(this).val())
//					  if ($(stripe_utils.wrapperele).find('.amount-cell.active').length > 0 ) {
//								$(stripe_utils.wrapperele).find('.amount-cell.active').attr('data-active', false);
//								$(stripe_utils.wrapperele).find('.amount-cell.active').removeClass('active');
//						}
//					})

//					$(stripe_utils.wrapperele + ' .tab ').on('click', function () {
//						if($(this).hasClass('disabled')!=true) {	stripe_utils.clear_error();
//							$(stripe_utils.wrapperele + ' .tab').each(function () {
//								$(this).removeClass('active');
//							})
//							$(this).addClass('active');

//							let id = $(this).attr('data-active');
//							$('.tab-section').each(function () {
//								$(this).addClass('hide');
//							})
//							$('#'+id).removeClass('hide');
//						}

//					})

//					$(stripe_utils.wrapperele + ' button.continue').on('click', function (e) {
//						e.preventDefault();
//						if ($(this).hasClass('disabled')!=true) {

//							let nextele = $(this).attr('data-next');
//
//							if (nextele == 'confirm-section') {
//								stripe_utils.check_goodtogo();
//								stripe_utils.unlockconfirm = true;
//							}

//							if (nextele == 'form-wrapper') {
//								if (stripe_utils.check_amount() != false) {
//									stripe_utils.nav_to_next(this);
//								}
///							} else {
	//							if (stripe_utils.check_userinfo() != false) {
	//								if (nextele == 'confirm-section') {
	//									$('#confirm-section button#submit').removeClass('disabled');
	//									$('#confirm-section #cardno').html('Valid');
//									}
//									stripe_utils.nav_to_next(this);
//								}
//							}
//						}
					})
            }
  	}

  }//end constructor
}//end class

$(document).ready(function () {
	const give = new Give();
    give.fn.init();

    php_vars = null;
})