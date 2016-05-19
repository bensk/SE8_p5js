---
layout: "post"
title: "Build a Drawing App"
date: "2016-05-19 17:51"
---

## Do Now (in <span style="color: #ED1F5E">p5</span>)

1. Make an `ellipse()` that follows your mouse.
2. **Before** your `ellipse()`, add this line:

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
