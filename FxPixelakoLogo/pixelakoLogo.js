/*
 * Pixel art by Hawk, 2005/7/1
 *
 * (MIT License)
 * Copyright (C) 2005-2012 David Gavilan Ruiz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var width=20;
var height=20;
var columns=20;
var rows=5;
var hawk = new Array( // width*height
1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,
1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,
1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,
1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,
1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1
);

var falls = new Array(columns);

function iniTitle() {
	document.write("<table border=0>");	
	for (j=0;j<rows;j++) {
		document.write("<tr>");
		for (i=0;i<columns;i++) {
			document.write("<td width="+width+" height="+height+">");
			p=j*columns+i;
			if (hawk[p]) {
				document.write("<img src='../pix/w01.png' border=0 style=\"width: "+width+"px; height: "+height+"px;\" name='p_"+i+"_"+j+"'>");
			}
			document.write("</td>");
		}
		document.write("</tr>");
	}
	document.write("</table>");
	
	for (i=0;i<columns;i++) {
		falls[i]=-1;
	}
	
	// call falling() every 10th of a second (1000/10)
	window.setInterval("falling()",100);
	
	//p_0_0.src="pix/g01.png";	
}

function falling() {
/*
	j=Math.round(Math.random());
	if (j) {
		p_0_0.src="pix/g01.png";
	} else {
		p_0_0.src="pix/w01.png";
	}
*/
	
	
	for (i=0;i<columns;i++) {
		j=falls[i];
		if (j>=0) { // clear
			p=j*columns+i;
			if (hawk[p]) {
				eval("p_"+i+"_"+j+".src=\"../pix/w01.png\";");
			}
		}
		if (j<0) {
			j=-Math.round(Math.random()*5);
		} else {
			j++;
			if (j>rows) j=-1;
		}
		falls[i]=j;
		if (j>=0) {
			p=j*columns+i;
			if (hawk[p]) {
				eval("p_"+i+"_"+j+".src=\"../pix/g01.png\";");					
			}
		}
	}
	
}
