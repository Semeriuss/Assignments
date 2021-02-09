/* chart.js chart examples */

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


