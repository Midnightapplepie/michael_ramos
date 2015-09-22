function showVideo(){
	var vid = document.getElementsByClassName('show')[0].getElementsByClassName('main-videos')[0];
	add_class(vid,'show-video');
}


function add_class (targetele, className){
	if (targetele.className.indexOf(className) == -1){
		var klass = targetele.className + " " + className;
		targetele.className = klass;
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
	var clicked = document.getElementById("vid-" + ele.getAttribute("data-id")); 
	if (clicked.className.indexOf("show") > -1){
		return;
	}else{	
		updateClass(ele);
	}
}

function updateClass(ele){
		var id = ele.getAttribute("data-id");
		var videos = document.getElementsByClassName("bg");
		var oldActive = document.getElementsByClassName("show")[0];
		var newActive = document.getElementById("vid-"+id);

		add_class(newActive,"show");
		for(var i = 0; i < videos.length; i++){
			console.log(videos[i].id.substr(4));
			if(videos[i].id.substr(4) === id ){
				videos[i].className = "bg show";
			}else if(videos[i].id.substr(4) < id){
				videos[i].className = "bg hide-left";
			}else{
				videos[i].className = "bg hide-right";
			}
			
		}
		//shift .active-bg
		remove_class(oldActive,"show");
		remove_class(newActive,"hide-left");
		remove_class(newActive,"hide-right");
}
