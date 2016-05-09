---
layout: "post"
title: "Drawing Shapes with p5"
date: "2016-05-10 18:18"
---

## Fun With Shapes

Today, we're going to learn how to draw three shapes: `line`s, `rect`angles, and `ellipse`s.

(Also, `point`, but that one's kind boring. Go ahead and try it. Turn on a single pixel:

```javascript
point(42,42)
```

### `line()`
A line is defined by **two points**:  A and B
In p5:  `line(x1, y1, x2, y2);`

✱ lower case ‘line’    
✱ four **parameters** in parenthesis, separated by commas    
✱ lines end with semicolon `;`, just like JavaScript.    

<span class="mega-octicon octicon-keyboard"></span> Try to draw a line with a 45° angle.


### `rect()`

### `ellipse()`

<script type="text/p5" data-autoplay data-preview-width="200" data-preview-height="200">
function setup() {
	createCanvas(200, 200)
}

function draw() {
	line(78, 5, 78, 200)
	line(82, 5, 82, 200)
	rect(5, 5, 150, 75);
	rect(50, 40, 60, 30);
	ellipse(80, 80, 30, 15);
}
</script>
