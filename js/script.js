"use strict"

function menuInit() {
	if (document.querySelector(".burger-icon")) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.burger-icon')) {
				document.documentElement.classList.toggle("sidebar-open");
			}
			else if (!e.target.closest('.sidebar') || e.target.closest('.sidebar a')) {
				document.documentElement.classList.remove("sidebar-open");
			}
		});
	}
}
menuInit();