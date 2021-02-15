function addMainCat(subCat) {
	return db
		.transaction('rw', db.sub_category, function() {
			db.main_category
				.add(subCat)
				.then((val) => {
					// console.log("Worked.." + val);
					return true;
				})
				.catch((val) => {
					console.log('Some Error Happened' + val);
					return false;
				});
		})
		.catch(function(e) {
			console.error(e.stack);
		});
}
