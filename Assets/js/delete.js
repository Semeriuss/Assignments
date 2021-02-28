setTimeout(() => {
	const deleteButtons = document.querySelectorAll('.deleteMe');
	deleteButtons.forEach((element) => {
		element.addEventListener('click', removeItem);
	});
	function removeItem(e) {
		if (confirm('Are you sure you want to delete this category?')) {
			// db.main_category
			// 	.where('id')
			// 	.equals(parseInt(e.target.id))
			// 	.delete()
			// 	.then(function(deleteCount) {
			// 		console.log('Deleted ' + deleteCount + ' rows');
			// 	})
			// 	.catch(function(error) {
			// 		console.log('Error:' + error);
			// 	});

			// console.log('id', e.target.parentElement.id);
			// db.main_category.delete(parseInt(e.target.id));

			db.transaction('rw', db.main_category, () => {
				db.main_category.where('name').equals(e.target.parentElement.id).delete();
			});
			e.target.parentElement.parentElement.parentElement.parentElement.remove();
		}
	}
}, 300);

// deleteButton.addEventListener('click', (e) =>{
//     if (confirm("Are you sure you want to delete this category?")) {
//         table.delete(number(e.target.getAttribute('id2')));
//     }
// });
