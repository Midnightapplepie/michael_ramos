function showVideo(){
	var vid = document.getElementsByClassName('show')[0].getElementsByClassName('main-videos')[0];
	var filter = document.querySelectorAll(".bg.show .filter")[0];
	add_class(vid,'show-video');
	add_class(filter,"op-08");
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
function hideOld(data){
		if (data["oldId"] < data["id"]){
			add_class(data["oldActive"],"hide-left");
		}else{
			add_class(data["oldActive"],"hide-right");
		}
}

function updateHiddenSlides(data){
		setTimeout(function(){
			var hidden = [];
			//create array of non new and previous slide
			for(var i=0; i < data["videos"].length; i++){
				if (data["videos"][i].id.substr(4) !== data["id"] && data["videos"][i].id.substr(4) !== data["oldId"]){
					hidden.push(data["videos"][i]);
				}

			}
			//update class of hidden slide with a delay
			for(var i = 0; i < hidden.length; i++){
				if(hidden[i].id.substr(4) < data["id"]){
					hidden[i].className = "bg hide-left";
				}else{
					hidden[i].className = "bg hide-right";
				}
			}
		}, 300)
}

function updateOldandNewActive(data){
		//shift .active-bg
		setTimeout(function(){
			remove_class(data["newActive"],"hide-left");
			remove_class(data["newActive"],"hide-right");
			remove_class(data["oldActive"],"show");
		},1000)
}

function updateClass(ele){
		var data = {}
		data["id"] = ele.getAttribute("data-id");
		data["videos"] = document.getElementsByClassName("bg");
		data["oldActive"] = document.getElementsByClassName("show")[0];
		data["newActive"] = document.getElementById("vid-"+data["id"]);
		data["oldId"] = data["oldActive"].id.substr(4)

		data["newActive"].className = "bg show";
		hideOld(data);
		updateHiddenSlides(data);
		updateOldandNewActive(data);

}
