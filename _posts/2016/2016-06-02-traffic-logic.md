---
layout: "post"
title: "AND"
date: "2016-06-02 16:38"
---

## Do Now (Google Classroom)
How can you make an ellipse that ALWAYS appears 20px above the middle of the canvas?

![]({{ site.baseurl }}/images/20pixels.png)

When you're done answering, return to your [Traffic Light](http://bsk.education/SE8_p5js/2016/05/31/stop&review/) from yesterday.

---

## `&&` then some...
What if we want to light up the ellipse ONLY when our mouse is between the top and bottom of the ellipse?

Well, where is the **top** of our ellipse?

The middle of the screen is `windowHeight/2`, our ellipse is `20px` above that, and my ellipse is `50px` tall.

Which means the top of my ellipse is `windowHeight/2-70`.
The bottom of my ellipse is just `windowHeight/2-20`.

> If your ellipse is not 50px tall, your numbers will be different. That's fine.

So, I want a conditional fill that is only activate when `mouseY` is **greater than**  `windowHeight/2-70` and **less than** `windowHeight/2-20`. Wouldn't it be nice if I could somehow combine

```javascript
// mouseY greater than windowHeight/2-70
if(mouseY>windowHeight/2-70){
  	fillColor = 'blue'
  } else {
  	fillColor = 'white'
  }
```

and

```javascript
// mouseY less than windowHeight/2-20
if(mouseY<windowHeight/2-20){
  	fillColor = 'blue'
  } else {
  	fillColor = 'white'
  }
```

Luckily I can, and I don't even have the type the word "and"! All I need is `&&`:

```javascript
if(mouseY>windowHeight/2-70 && mouseY<windowHeight/2-20){
  	fillColor = 'blue'
  } else {
  	fillColor = 'white'
  }
```

## Operators in <span style="color: #ED1F5E">p5</span>
We've seen **operators** before:

| Operator | Description              | Example   |
|:--------:|:-------------------------|:----------|
|   ===    | equal                    | `x === 3` |
|    !=    | not equal                | `x != 8`  |
|    >     | greater than             | `x > 42`  |
|    <     | less than                | `x < 42`  |
|    >=    | greater than or equal to | `x >= 42` |
|    <=    | less than or equal to    | `x <= 42` |

Now we have two more:

|   Operator   | Description | Example                                                |
|:------------:|:------------|:-------------------------------------------------------|
| &#124;&#124; | or          | `(x>windowWidth || x<0)`                               |
|      &&      | and         | `mouseY>windowHeight/2-70 && mouseY<windowHeight/2-20` |

<script type="text/p5" data-autoplay data-preview-width="200" data-preview-height="800">
var fillColor = 'white'

function setup() {
  createCanvas(windowWidth,windowHeight )

}

function draw() {
	background('white')
  line(0,windowHeight/2,windowWidth,windowHeight/2)
  fill(fillColor)
  ellipse(windowWidth/2,windowHeight/2-45,50,50)
  if(mouseY>windowHeight/2-70 && mouseY<windowHeight/2-20){
  	fillColor = 'blue'
  } else {
  	fillColor = 'white'
  }
}
</script>


Now go forth and make the most beautiful <span style="color: #ED1F5E">p5</span> traffic light that anyone has ever seen.

## Traffic Light

<iframe src="{{ site.baseurl }}/Code_Examples/TrafficLight" width="100%" height="400px" style="border:solid 1px"></iframe>

**Rubric**

| Specification                                                             | Points |
|:--------------------------------------------------------------------------|:------:|
| 3 ellipses, each light up different colors                                |   3    |
| It must be able to "light" up in three different colors **one at a time** |   1    |
| Only one light should be lit at a time                                    |   1    |
| Lights are **conditionally** activated[^1]                                |   1    |
| **Total**                                                                 |   6    |

[^1]: It's your choice how to activate the lights. Mine are based off `mouseY`. You could use a click, `mouseX`, your keyboard...whatever you want.
