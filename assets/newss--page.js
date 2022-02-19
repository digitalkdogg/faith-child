class News {
  constructor() {
  	var _this = this;
  	this.vars = {'data': {} },
  	this.fn = {
  		'init': function () {
  			$.ajax({
				'url': millwood.vars.rest_url + 'cc/v1/latest-cc',
				'type': 'GET',
				'data': {},
				'success': function (data) {
					_this.vars.data = data;
					var wrapper = $('.site-content-wrapper');
					$('<div />' , {
						'id': 'cc_wrapper',
            'class':'margin-left-right-20-per',
            'style': 'margin-top:150px;'
					}).prependTo(wrapper);

					$.each(data, function (index, val) {
						var row = this;
						_this.vars.data[index] = row.content

						$('<div />', {
							'id': this.cc_id,
							'class': 'form-row flex',
							'data-index': index
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
							'data-title': this.title,
							'data-index': index
						}).appendTo($(wrapper).find('#' + this.cc_id + '.form-row').find('.href-wrap'))

						$('<button />', {
							'class' : 'btn',
							'text': 'Click To View',
							'data-index': index
						}).appendTo($(wrapper).find('#' + this.cc_id + '.form-row').find('.href-wrap').find('a.activate-modal'))

						$(wrapper).find('#' + this.cc_id + '.form-row').find('.href-wrap').find('a.activate-modal').on('click',function () {

							let title = $(this).attr('data-title');
							let url = $(this).attr('data-href');
							let dataindex = $(this).attr('data-index')
							$('#modal').find('.body').empty()
				  			$('#modal').addClass('show');
				  			$('#modal').find('.title').find('h4').text(title)


							let headerheight = $('header.site-header').height()
							$('#modal').css({'top': (headerheight + 70)+'px'}).delay(200)

							var parser = new DOMParser();

							row.content = parser.parseFromString(_this.vars.data[dataindex], 'text/html');

							var htmlcontent = [];

							$(row.content).find('table.galileo-ap-layout-editor').each(function () {

								$(this).find('.text-container.galileo-ap-content-editor').each(function () {
									htmlcontent.push($(this))
								})

								$(this).find('.gl-contains-image').each(function () {
									if ($(this).find('img').attr('alt') != 'Millwood logo') {
										htmlcontent.push($(this).find('img'));
									}
								})

								$(this).find('.gl-contains-social-button').each(function () {
									htmlcontent.push($(this).find('img'));
								})
							})


							for(let x = 0; x<htmlcontent.length; x++) {


								let content = '';

								if ($(htmlcontent[x]).html().length == 0) {
									if (htmlcontent[x].length > 1) {
										$.each(htmlcontent[x], function () {
											if ($(this).parent().find('img').attr('src').indexOf('Galileo-SocialMedia')>=0) {
												if ($(this).parent().find('img').attr('src').indexOf('facebook')>=0) {
													content = content + '<a href = "https://www.facebook.com/millwoodchurch" target="_blank"><img src = "' + $(this).parent().find('img').attr('src') +'" /></a><br /><br />'
												}
											}

										})
									} else {
										if ($(htmlcontent[x]).attr('alt') != 'basicImage') {
											content = '<div class = "imgcenter">' + $(htmlcontent[x]).parent().html() + '</div>';
										}

									}
								} else {
									if ($(htmlcontent[x]).html().indexOf('Millwood Messenger')<0) {
										content = '<div class = "content">' + $(htmlcontent[x]).html() + '</div>';
									}

								}

								content = content.replace(/ï»¿/g, '');
								content = content.replace(/â€/g, '"');
								$('#modal').find('.body').append(content);
							}



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
    const news = new News();
    news.fn.init();

    php_vars = null;
})
