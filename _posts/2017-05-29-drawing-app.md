---
title: 🖌️ Build a Drawing App
date: 2017-05-29 17:51:00 Z
layout: post
---

## Do Now (in <span style="color: #ED1F5E">p5</span>)

1. Make an shape (`ellipse()` or `rect()`) that follows your mouse.
2. **Before** your shape, add this line:

```javascript
if (mouseIsPressed)
```

What happened? Why do you think that's happening?

## Conditionals
> if...then...

In <span style="color: #ED1F5E">p5</span>, conditionals look a lot like JavaScript:

```javascript
if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
```

**Check:** What do you think `pmouseX` and `pmouseY` are?

## Drawing in Multiple Colors

To use the keyboard to interact with my sketch, I need to add a new function. So far, we've seen `function setup()` which is called when the program starts, and `function draw()` which runs on loop, forever.

Now, we need `function keyTyped()`, which is called every time a key is pressed.

```javascript
function keyTyped() {
  if (key === 'b') {
    strokeColor = 'black';
  } else if (key === 'p') {
    strokeColor = '#E32173';
    weight = 10
  }
}
```

The variable `strokeColor` is used inside my `function keyTyped()`, and I am also going to use it inside my `function Draw()`. that means I need to define it **outside** of **both** of those function. I can do this at the **top** of my code:

```javascript
var weight = 10
var strokeColor = "black"
```

This is called _initializing_ a variable– giving it an _initial_ or starting value, which we will then change.

## Drawing App

| Specification     | Points     |
| :------------- | :-------------: |
| Your `canvas` must resize to the window.            | 1|
|Draw with either a shape (`rect()`, `ellipse()`, etc.) or a `line()` _in 🌈multiple colors🌈_.|   1|
|Must be able to start **and** stop drawing ("pen up" and "pen down")|1|
|**Total:**| __ / 3|



## <span class="mega-octicon octicon-rocket"></span> Push yourself for a 4!

🎂 Draw me a birthday card!     
🌈 Let the user choose colors using the keyboard. For example, if they press `b`, they start drawing in <span style="color: blue; font-weight: bold">blue</span>.     
⌫ Let the user erase part of their drawing. There are a lot of ways to do this!     
💃🏼 Have fun!     
