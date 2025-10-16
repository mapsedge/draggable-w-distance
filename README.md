# draggable-w-distance
It is completely incomprehensible to me that "distance" in the office jquery plugin is deprecated, but there it is - or isn't. For my own project, I created a draggable plugin that implements "distance", "grid," and a "stop" event. The dragged object is completely agnostic: it'll stop and stay wherever you put it. It's up to you to handle what happens after that

Everything else - snap, containment, handle, etc - is omitted.

The element's x:y coordinates at the end are relative to the element's position context, i.e., the closest ancestor with position: relative/absolute/fixed.

USAGE
```
$("#myElement").simpleDraggable({cursor: "move", // default = move
    grid: {x:2, y:2}, // in pixels, default = null
    distance: 4 // in pixels, default = 0
    stop: function(element, event){
        // default = null
	}
});
```
