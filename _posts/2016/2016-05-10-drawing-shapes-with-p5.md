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

### | `line()`
A line is defined by **two points**:  A and B
In p5:  `line(x1, y1, x2, y2);`

✱ lower case ‘line’    
✱ four **parameters** in parenthesis, separated by commas    
✱ lines end with semicolon `;`, just like JavaScript.    

<span class="mega-octicon octicon-bug"></span> Try to draw a line at an angle that _isn't_ 90° or 180° (not vertical or horizontal).

### ▭ `rect()`
In p5, rectangles are defined by the **top left corner**, followed by a **width** and a **height**.

```javascript
rect(x, y, width, height);
```

✱ lower case ‘rect’    
✱ four ‘parameters’ in parenthesis    
✱ lines end with semicolon `;`, just like JavaScript.    

You can also define them using **corners**: the _top left_ and _bottom right_ point.

```javascript
rectMode(CORNERS);
// What happens if you put rectMode(CORNERS) on line 2?
rect(x1, y1, x2, y2);
Two lines of code
```

### ⬭ `ellipse()`
An **ellipse** is an oval. For the purposes of this class (before you've studied [conic sections][c37a8208]), all we need to know is that a circle is actually a special kind of ellipse, and `ellipse()` is the command that will let us draw **round** shapes.

  [c37a8208]: https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=conic%20sections "Google it!"

In p5, ellipses are defined by a **center** coordinate, a **width**, a **height**.

```javascript
ellipse(x, y, width, height)
```

<span class="mega-octicon octicon-bug"></span> Use this to make a circle. In a comment (`//`), what do you notice about the `width` and `height` that make a circle?

### Drawing time!

What if I combine `line`s, `rect`angles, and `ellipse`s?
<!-- p5 Embed -->
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
<!--  -->
