

function walk(node, abort)  
{
	//Walks through the DOM (Document Object Model)
	//Stolen from http://is.gd/mwZp7E
	
	var yesBlah = false;
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			if (yesBlah == true ) {
				blahify(node);
				break;
			}
		
			if (yesAbort(node)) {
				yesBlah = true;
				blahify(node);
			}
			break;
	}
}

function yesAbort(textNode)
{
	var t = textNode.nodeValue;

	if (t.includes("Avengers") || t.includes("Endgame") || t.includes("Thanos") || t.includes("Spoiler")
		|| t.includes("spoiler") || t.includes("dies")) {
		return true;
	}

	return false;
}

function blahify(textNode)
{
	var v = textNode.nodeValue;
	var blength = (v.length / 5) - 1;
	v = "";

	while (blength > 0) {
		v += "blah "
		blength--;
	}
	v += "blah"

	textNode.nodeValue = v;
}


walk(document.body); 


