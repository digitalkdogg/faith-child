class News {
  constructor() {
  	var _this = this;
  	this.vars = {'templates': {} },
  	this.fn = {
  		'init': function () {
  			$.ajax({
				'url': millwood.vars.rest_url + 'cc/v1/latest-cc',
				'type': 'GET',
				'data': {},
				'success': function (data) {
					
					var wrapper = $('.site-content-wrapper');
					$('<div />' , {
						'id': 'cc_wrapper'
					}).appendTo(wrapper);

					$.each(data, function () {
						$('<div />', {
							'id': this.cc_id,
							'class': 'form-row flex'
						}).appendTo($(wrapper).find('#cc_wrapper'))

						$('<h3 />', {
							'class' : 'title',
							'text': this.title
						}).appendTo($(wrapper).find('#' + this.cc_id + '.form-row'))

						$('<div />', {
							'class' : 'href-wrap',
						}).appendTo($(wrapper).find('#' + this.cc_id + '.form-row'))

						$('<a />', {
							'class' : 'activate-modal',
							'data-href' : this.permalink_url,
							'data-title': this.title
						}).appendTo($(wrapper).find('#' + this.cc_id + '.form-row').find('.href-wrap'))

						$('<button />', {
							'class' : 'btn',
							'text': 'Click To View'
						}).appendTo($(wrapper).find('#' + this.cc_id + '.form-row').find('.href-wrap').find('a.activate-modal'))

						$(wrapper).find('#' + this.cc_id + '.form-row').find('.href-wrap').find('a.activate-modal').on('click',function () {
							let title = $(this).attr('data-title');
							let url = $(this).attr('data-href');
							$('#modal').find('.body').empty()
				  			$('#modal').addClass('show');
				  			$('#modal').find('.title').find('h4').text(title)
							$('#modal').find('.body').append('<span class="dashicons dashicons-hourglass"></span>');
				  			$('<iframe />', {
				  				'id': 'cc-frame',			
								'src' : url
				  			}).appendTo($('#modal').find('.body'))

							$('iframe').load(function () {
								$('#modal').find('.body').find('.dashicons').remove();
							})

					    })



					    $('#modal').find('span#x').on('click', function () {
					    	$('#modal').removeClass('show')
					    })

					})

				}
			}) //end ajax calendar
  		},
  		'show_modal':function (url, title) {
  			$('#modal').find('.body').empty()
  			$('#modal').addClass('show');
  			$('#modal').find('.title').find('h4').text(title)
  			$('<iframe />', {
  				'src' : url
  			}).appendTo($('#modal').find('.body'))
  		}
  	}
  }
}


$(document).ready(function () {
    console.log('i am the news');
    const news = new News();
    news.fn.init();
    
    php_vars = null;
})