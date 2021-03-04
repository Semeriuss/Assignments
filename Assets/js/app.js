var USER;

(function($) {
	// toggle sidebar
	$('#sidebar').on('click', function() {
		$('#navigation').toggleClass('sidebar-toggle');
	});
})(jQuery);
$(document).ready(function() {
	$('.filter-button').click(function() {
		var value = $(this).attr('data-filter');

		if (value == 'all') {
			$('.filter').show('1000');
		} else {
			$('.filter').not('.' + value).hide('3000');
			$('.filter').filter('.' + value).show('3000');
		}

		if ($('.filter-button').removeClass('active')) {
			$(this).removeClass('active');
		}
		$(this).addClass('active');
	});
});









var db = new Dexie('RETEX');

db.version(1).stores({
	users: '++id,fname,lname,&uname,psd,email,dob,policies,admin,balance',
	policies: '++id,&name, maincat, subcat,description,premium,sum_assured, date',
	main_category: '++id,&name, date',
	sub_category: '++id,&name, maincat, date',
	pending_policies: '++id, uname,policy_name', 
	approved_policies: '++id, uname, approved_policy', 
	disapproved_policies: '++id, uname, disapproved_policy'
});

if (document.getElementById("USER") != null) {
	const USER = document.getElementById("USER");
	USER.innerText = `${sessionStorage.getItem("uname")}`;
}











