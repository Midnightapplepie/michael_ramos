// function show_video (){
// 	var vid = document.getElementsByClassName('main-videos')[0];
// 	var klass = vid.className + " show-video";
// 	vid.className = klass;
// }

// function change_bg (){
// 	var bg = document.getElementsByClassName('active-bg')[0];

// }

function add_class (targetele, className){
	var ele = document.querySelectorAll(targetele)[0];
	var klass = ele.className + " " + className;
	ele.className = klass;
	console.log("yes");
}

