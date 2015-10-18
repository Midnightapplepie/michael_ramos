var list = document.querySelectorAll(".videos-list ul li");

function addVidListHoverListener (ele) {
	var id = ele.getAttribute("data-id");
	var title = document.getElementById("vid-li-"+id);

	ele.addEventListener("mouseenter",function(){
		add_class(title,"show-title");
	})

	ele.addEventListener("mouseleave",function(){
		remove_class(title,"show-title");
	})
}

for (var i=0; i < list.length; i++){
	addVidListHoverListener(list[i]);
}