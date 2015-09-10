// function show_video (){
// 	var vid = document.getElementsByClassName('main-videos')[0];
// 	var klass = vid.className + " show-video";
// 	vid.className = klass;
// }

// function change_bg (){
// 	var bg = document.getElementsByClassName('active-bg')[0];

// }

function add_class (targetele, className){
	if (targetele.className.indexOf(className) == -1){
		console.log(targetele.className.indexOf(className) == -1)
		var klass = targetele.className + " " + className;
		targetele.className = klass;
		console.log("yes");
	}
}

function remove_class(targetele, className){
	var targetClass = className;
	var klass = targetele.className
	if (klass.indexOf(targetClass) == 0){
		targetele.className = klass.replace(targetClass,"");
	}else{
		targetele.className = klass.replace(" "+targetClass,"");
	}
}

function changeBackground(ele){
	var id = ele.getAttribute("data-id");
	var oldActive = document.getElementsByClassName("show")[0];
	var newActive = document.getElementById("vid-"+id);
	//shift .active-bg
	add_class(newActive,"show");
	if (newActive.className.indexOf("hide-left") > -1){
		add_class(oldActive,"hide-right")
	}else{
		add_class(oldActive,"hide-left")
	}
	remove_class(newActive,"hide-right");

	remove_class(oldActive,"show");
	remove_class(newActive,"hide-left");
	remove_class(newActive,"hide-right");

}

