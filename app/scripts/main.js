$(document).ready(function () {
	// type("Data", 0, '#data');
})
function type(str, i, target) {
	if (i > str.length) {
		$(target).html(str);
		return;
	}
	$(target).html(str.slice(0,i) + '_');
	setTimeout(function () {
		type(str, i + 1, target)
	}, 300);
}