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
					console.log(data);
					//if (data != null) {
					//	data = JSON.parse(data);
					//	millwood.success.output_cc_news(data);
					//}// end if data length is more than 0
				},
				'complete': function (data) {
					var testdata = '[{\"id\":\"30\",\"cc_id\":\"13b4d074-2d8b-4055-8786-e4e52b61995b\",\"title\":\"Sept. 4, 2020\",\"created_at\":\"2020-08-28T15:45:30.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-09-05T23:04:05.000Z\",\"acc_id\":\"b3e9859e-1485-44c8-b034-028ac0fe4d73\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/322dqTv\"},{\"id\":\"29\",\"cc_id\":\"682e2c36-230b-46dd-90b2-5ef1880aa960\",\"title\":\"August 14, 2020\",\"created_at\":\"2020-08-07T14:44:23.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-08-15T21:11:34.000Z\",\"acc_id\":\"55e38d8e-6585-4281-9076-57a45bd99215\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2E6UhGx\"},{\"id\":\"28\",\"cc_id\":\"e4859835-1538-498c-98c1-7789e238efc2\",\"title\":\"July 24, 2020\",\"created_at\":\"2020-07-24T03:04:18.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-07-25T18:43:54.000Z\",\"acc_id\":\"cbaec1a5-e149-489a-b2f1-c6a3195d9548\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/32VoRgn\"},{\"id\":\"27\",\"cc_id\":\"c98ba657-c1a3-4ece-919d-3bedfd529556\",\"title\":\"July 17, 2020\",\"created_at\":\"2020-07-18T13:49:10.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-07-18T17:11:07.000Z\",\"acc_id\":\"5ce259f3-fe8f-4418-b1b3-52fc81b75a0f\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/397QlR2\"},{\"id\":\"26\",\"cc_id\":\"df98bf43-5e35-448a-a2fe-66f37ba5138f\",\"title\":\"July 3, 2020\",\"created_at\":\"2020-07-03T13:52:15.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-07-03T18:56:25.000Z\",\"acc_id\":\"46908912-9322-41b1-88db-0e0f00a2a9a4\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2VGRGsQ\"},{\"id\":\"22\",\"cc_id\":\"97562562-4d6e-477b-abbf-9fd763e02dde\",\"title\":\"June 5, 2020\",\"created_at\":\"2020-06-05T02:31:16.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-06-06T18:23:16.000Z\",\"acc_id\":\"c326c8eb-41ff-410c-890e-0495c7435b6f\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2AHjaa6\"},{\"id\":\"23\",\"cc_id\":\"34814c21-cb89-4b37-afa5-5d0a6552e702\",\"title\":\"May 22, 2020\",\"created_at\":\"2020-05-23T18:08:07.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-05-23T21:52:26.000Z\",\"acc_id\":\"c31d4477-ff73-4b34-ab72-f604d5d761a2\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2XoB6hh\"},{\"id\":\"24\",\"cc_id\":\"36ac95a5-1e99-4874-bd04-a5b07db59ab6\",\"title\":\"May 8, 2020\",\"created_at\":\"2020-05-08T14:19:59.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-05-09T21:56:39.000Z\",\"acc_id\":\"c5927a1f-6ed5-4894-8a54-204cb4907d81\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2YMdjtQ\"},{\"id\":\"25\",\"cc_id\":\"05ce2105-e904-4cc9-aff5-03bcc6b897b3\",\"title\":\"April 24, 2020\",\"created_at\":\"2020-04-25T20:36:55.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-04-25T21:20:10.000Z\",\"acc_id\":\"6d8e716b-8cc4-4702-9962-aac67dcb7ee4\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2VDcIJ6\"},{\"id\":\"21\",\"cc_id\":\"1f799e06-1f55-45bd-aad4-f4e6754768cf\",\"title\":\"April 3, 2020\",\"created_at\":\"2020-04-02T18:59:15.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-04-04T18:52:05.000Z\",\"acc_id\":\"be4bde6f-0382-43a2-9482-0d7404c16a52\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/34aJG67\"},{\"id\":\"20\",\"cc_id\":\"4db0de27-20cb-45f6-873e-cd89cb27bb0f\",\"title\":\"March 20, 2020\",\"created_at\":\"2020-03-21T15:13:05.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-03-21T19:56:23.000Z\",\"acc_id\":\"e1cd67b6-7093-4142-9ffb-9e7482c65fa7\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2U9KG7b\"},{\"id\":\"19\",\"cc_id\":\"0bc2aca2-cf41-49b5-a090-89ffe6fc1058\",\"title\":\"March 13, 2020\",\"created_at\":\"2020-03-14T14:29:27.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-03-14T17:29:58.000Z\",\"acc_id\":\"5db1c1a3-db28-4be6-921e-61198a8f8b3d\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/38JNvA4\"},{\"id\":\"18\",\"cc_id\":\"a81ae563-dd05-4b2f-9425-0da04c43135d\",\"title\":\"February 21, 2020\",\"created_at\":\"2020-02-20T18:38:57.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-02-22T20:22:33.000Z\",\"acc_id\":\"27ffcd7f-58ce-44b0-80fa-1e1359371e52\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2vZthEx\"},{\"id\":\"17\",\"cc_id\":\"446f6a7e-4c91-49e1-a7f5-db7549c72f8e\",\"title\":\"January 31, 2020\",\"created_at\":\"2020-01-31T15:02:49.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-01-31T20:56:14.000Z\",\"acc_id\":\"7b91708b-62eb-4d18-a929-e23409aecfbf\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/38WcgcD\"},{\"id\":\"16\",\"cc_id\":\"ccff1d7c-cbf8-4ac1-983d-0ea62dd284ff\",\"title\":\"January 17, 2020\",\"created_at\":\"2020-01-17T17:58:32.000Z\",\"status\":\"Done\",\"last_updated\":\"2020-01-18T23:51:40.000Z\",\"acc_id\":\"1b4b4991-f7ed-46dc-915d-c50d671e997c\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2RalZWZ\"},{\"id\":\"15\",\"cc_id\":\"4e572e95-7488-4781-935a-f6f18c639133\",\"title\":\"September 27, 2019\",\"created_at\":\"2019-09-19T17:58:58.000Z\",\"status\":\"Done\",\"last_updated\":\"2019-09-27T22:01:02.000Z\",\"acc_id\":\"b04741a0-7713-423b-a973-a0d40d12a72b\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2mqQPxU\"},{\"id\":\"14\",\"cc_id\":\"fdb41f58-6b69-4196-8f2a-d168cbced16d\",\"title\":\"September 13, 2019\",\"created_at\":\"2019-09-14T16:15:49.000Z\",\"status\":\"Done\",\"last_updated\":\"2019-09-14T18:12:49.000Z\",\"acc_id\":\"a57850b6-5cb4-4afc-8ace-1375d8caa8a0\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/30jyr7S\"},{\"id\":\"13\",\"cc_id\":\"be21fea8-9015-4a94-aa96-fac7efb44104\",\"title\":\"September 6, 2019\",\"created_at\":\"2019-09-07T14:45:33.000Z\",\"status\":\"Done\",\"last_updated\":\"2019-09-07T17:09:43.000Z\",\"acc_id\":\"4fe61dd5-075e-4298-953e-c6a70ac5b122\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2zGMBVT\"},{\"id\":\"11\",\"cc_id\":\"bcdfe9dc-38b6-4dbd-98de-c7647b5f5179\",\"title\":\"July 5, 2019\",\"created_at\":\"2019-07-06T17:22:19.000Z\",\"status\":\"Done\",\"last_updated\":\"2019-07-06T19:04:14.000Z\",\"acc_id\":\"806f3003-5fb2-493a-90e7-0e839ff65b32\",\"permalink_url\":\"https:\\\/\\\/conta.cc\\\/2NEpzc2\"}]'
					data = JSON.parse(testdata);
					console.log(data);

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

//				  			$('iframe').load( function() {
//				  				console.log('i loaded')
//				  				console.log($(this).contents().find('head'))
  //  							$('iframe').contents().find("head")
    //  								.append($("<style type='text/css'>  .jmml-button{display:none;}  </style>"));
//							});

//                            $.ajax({
//                                'url': millwood.vars.rest_url + '/cc/v1/guts-cc',
//                                'type': 'GET',
//                                'complete': function (data) {
//                                    console.log('data');
//                                    console.log(JSON.parse(data.responseText));
//                                    $('#modal').find('.body').html(data.responseText)
//                                }
//                            })
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
    console.log(news);

    

    php_vars = null;
})