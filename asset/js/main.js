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
		var oldId = oldActive.id.substr(4)

		console.log(oldActive);
		console.log(newActive);

		newActive.className = "bg show";
		if (oldId < id){
			add_class(oldActive,"hide-left");
		}else{
			add_class(oldActive,"hide-right");
		}

		setTimeout(function(){
			var hidden = [];
			//create array of non new and previous slide
			for(var i=0; i < videos.length; i++){
				if (videos[i].id.substr(4) !== id && videos[i].id.substr(4) !== oldId){
					hidden.push(videos[i]);
				}

			}
			//update class of hidden slide with a delay
			for(var i = 0; i < hidden.length; i++){
				if(hidden[i].id.substr(4) < id){
					hidden[i].className = "bg hide-left";
				}else{
					hidden[i].className = "bg hide-right";
				}
			}
		}, 300)
		//shift .active-bg
		setTimeout(function(){
			remove_class(newActive,"hide-left");
			remove_class(newActive,"hide-right");
			remove_class(oldActive,"show");
		},1000)
}
