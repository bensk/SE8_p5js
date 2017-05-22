---
layout: "post"
title: "Conditionals"
date: "2017-05-22 12:14"
---

## Do Now
1. Make an `ellipse()` that **follows** your mouse.
2. **After** your `ellipse()`, add this line:

```javascript
if (mouseX > 100) {
    text("what just happened?", 200, 200)
}
```

What happened? Why do you think that's happening?

## Conditionals
Conditionals in p5 work exactly like JavaScript conditionals. Thanks to our [built-in variables](http://bsk.education/SE8_p5js/2017/05/18/interaction/), we can quickly make sketches that **change** depending on where our mouse is.


## I'm on one side...
1. Create a canvas that is the size of the screen
2. Create a shape (`ellipse()`, `rect()`, etc) that follows your mouse
3. Write a conditional so that the `fill()` of the shape changes if the mouse is on the **left** or **right** side of the screen.

Like this:

<iframe src="{{ site.baseurl }}/Code_Examples/left_right/index.html" width="100%" height="200px" style="border:none"></iframe>

---

## Traffic Light

Create this "traffic light" in p5:

<iframe src="{{ site.baseurl }}/Code_Examples/TrafficLight" width="100%" height="400px" style="border:solid 1px"></iframe>

**Rubric**

| Specification                                                             | Points |
|:--------------------------------------------------------------------------|:------:|
| 3 ellipses, each light up different colors                                |   3    |
| It must be able to "light" up in three different colors **one at a time** |   1    |
| Only one light should be lit at a time                                    |   1    |
| Lights are **conditionally** activated[^1]                                |   1    |
| **Total**                                                                 |   6    |

---

## Conditionals & Variables

Our next challenge is to make a sketch where a ~~ball~~ shape bounces around the screen.

This is a more complicated than the sketches we've done so far, because we will be **defining** our own variables.

To figure out what variables we need, think about what needs to **change** so a shape looks like it's bouncing. Let's look at it:

<iframe src="{{ site.baseurl }}/Code_Examples/BouncyBall" width="100%" height="200px" style="border:solid"></iframe>

A ball moves across the screen. What changes?

1. The `x position` of the shape
2. The `y position` of the shape

Now, the ball hits the edge of the screen. What changes?

3. The `x direction` – if the shape hits the left edge, it should go right. If it hits the right edge, it should go left.
4. The `y direction` – if the shape hits the top, it should start moving down. If it hits the bottom, it should start moving up.

| Specification     | Points     |
| :------------- | :-------------: |
| Your `canvas` must resize to the window.            | 1|
| User created variables |   3 |
| Conditionals for the left/right and top/bottom edge of the screen | 1 |
| **Extension** | ✱ |
| Ball bounces using only **2** conditionals | 2 |
|**Total:**| __ / 5|
