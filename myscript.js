walk(document.body); 

function walk(node)  
{
	//Walks through the DOM (Document Object Model)
	//Stolen from http://is.gd/mwZp7E
	
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
			swapForEmoji(node);
			break;
	}
}

function swapForEmoji(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bGrinning Face\b/g, '\u{1F436}');
	v = v.replace(/\bpasta\b/g, "caaaaarbs");
	v = v.replace(/\bbread\b/g, "caaaaarbs");
	v = v.replace(/\bBread\b/g, "Caaaaarbs");
	v = v.replace(/\bScones\b/g, "Caaaaarbs");
	v = v.replace(/\bBuns\b/g, "Caaaaarbs");
	v = v.replace(/\bspaghetti\b/g, "caaaaarbs");
	
	textNode.nodeValue = v;
}