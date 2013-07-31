jQuery-Spoiler-plugin
=====================
 
### Setting up:

 1. You need [Grunt](https://github.com/gruntjs/grunt/blob/master/README.md).
 2. Compile project.
```
 cd jquery-spoiler-plugin
 npm install
 grunt
```
 3. Copy content of dist directory to your project.

### jQuery plugin usage:

```
 $(".selector").spoiler();
```

or

```
 $('.selector').spoiler({
  title: {
   open: "show",
   close: "hide"
  },
  prefix: 'my_css_prefix'
 });
```

### Vanilla HTML:
```
 ...
 <link rel="stylesheet" href="spoiler.css">
 ...
 <div class="spoiler">
  <input type="checkbox"  class="spoiler-check" id="my_spoiler" />
  <label for="my_spoiler" class="spoiler-label spoiler-open">show</label>
  <label for="my_spoiler" class="spoiler-label spoiler-close">hide</label>
  
  <div class="spoiler-body">
   Text that should be spoiled
  </div>
 </div>
```
