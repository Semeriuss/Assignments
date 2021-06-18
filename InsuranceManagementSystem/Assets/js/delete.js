setTimeout(() => {
	const deleteButtons = document.querySelectorAll('.deleteMe');
	deleteButtons.forEach((element) => {
		element.addEventListener('click', removeItem);
	});
	function removeItem(e) {
		if (confirm('Are you sure you want to delete this category?')) {
			db.transaction('rw', db.main_category, () => {
				db.main_category.where('name').equals(e.target.parentElement.id).delete();
			});
			e.target.parentElement.parentElement.parentElement.parentElement.remove();
		}
	}
}, 300);
