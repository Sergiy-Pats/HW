jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .sidebar, body').toggleClass('active');

		$('.sidebar').attr('style', 'position: absolute;top: 100px;left:200px;');
	})


	//1
})

