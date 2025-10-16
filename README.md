# draggable-w-distance
It is completely incomprehensible to me that "distance" in the office jquery plugin is deprecated, but there it is. For my own project, I created a draggable plugin that implements "distance" and "grid." 

Almost everything else - snap, containment, handle, etc - is omitted.

USAGE

$("#myElement").simpleDraggable({cursor: "move", // default = move
    grid: {x:2, y:2}, // in pixels, default = null
    distance: 4 // in pixels, default = 0
    stop: function(element, event){
        // default = null
	}




