/* chart.js chart examples */
const adminName = document.getElementById("adminName");
adminName.innerText = `${sessionStorage.getItem('uname')}`;
const usName = document.getElementById('name');
usName.innerText = `${sessionStorage.getItem('uname')}`;
// chart colors
var colors = [ '#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d' ];

/* 3 donut charts */
var donutOptions = {
	cutoutPercentage: 85,
	legend: { position: 'bottom', padding: 5, labels: { pointStyle: 'circle', usePointStyle: true } }
};

// donut 1
var insurance = {
	labels: [ 'HEALTH', 'CAR', 'LIFE', 'Other' ],
	datasets: [
		{
			backgroundColor: colors.slice(0, 4),
			borderWidth: 0,
			data: [ 74, 11, 40, 22 ]
		}
	]
};

var chDonut1 = document.getElementById('chDonut1');
if (chDonut1) {
	new Chart(chDonut1, {
		type: 'pie',
		data: insurance,
		options: donutOptions
	});
}

// donut 2
var sub_catagory = {
	labels: [ 'SUB-CATAGORY 1', 'SUB-catagory 2', 'SUB-catagory-3' ],
	datasets: [
		{
			backgroundColor: colors.slice(0, 3),
			borderWidth: 0,
			data: [ 40, 45, 30 ]
		}
	]
};
var chDonut2 = document.getElementById('chDonut2');
if (chDonut2) {
	new Chart(chDonut2, {
		type: 'pie',
		data: sub_catagory,
		options: donutOptions
	});
}

// donut 3
var policies = {
	labels: [ 'Policy-1', 'policy-2', 'Other' ],
	datasets: [
		{
			backgroundColor: colors.slice(0, 3),
			borderWidth: 0,
			data: [ 21, 45, 55 ]
		}
	]
}
var chDonut3 = document.getElementById('chDonut3');
if (chDonut3) {
	new Chart(chDonut3, {
		type: 'pie',
		data: policies,
		options: donutOptions
	});
}

