function showVideo(){
	var container = document.querySelectorAll(".show .video-container")[0];
	var vid = container.querySelectorAll("iframe")[0];
	var filter = document.querySelectorAll(".bg.show .filter")[0];
	add_class(vid,'show-video');
	add_class(filter,"op-08");
	remove_class(container,"z-ng5");
}

function setupVidListener(){
	var list = document.querySelectorAll(".videos-list ul li");
	for (var i=0; i < list.length; i++){
		addVidListMouseEvent(list[i]);
	}
}

function addVidListMouseEvent (ele) {
	var id = ele.getAttribute("data-id");
	var title = document.getElementById("vid-li-"+id);
	var selected = document.getElementById("selected-title");

	ele.addEventListener("mouseenter",function(){
		add_class(selected,"hidden");
		add_class(title,"show-title");
	})

	ele.addEventListener("mouseleave",function(){
		remove_class(selected,"hidden");
		remove_class(title,"show-title");
	})

	ele.addEventListener("click",function(e){
		var active = document.querySelectorAll(".videos-list ul .brd-clr-blu")[0];
		console.log(active);
		selected.innerText = ele.getAttribute("data-title");
		remove_class(selected,"hidden");
		if(active){
			remove_class(active,"brd-clr-blu");
		};
		add_class(e.target.parentNode,"brd-clr-blu");
		add_class(selected,"show-title");
		add_class(selected,"z-1");

	})
}

window.onload = function(){
	setupVidListener();
};
