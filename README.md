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
  title: "title of the spoiler"
  prefix: 'my_css_prefix'
 });
```

### Plain HTML:
```
 ...
 <link rel="stylesheet" href="spoiler.css">
 ...
  <div class="spoiler">
			<input type="checkbox" class="spoiler-check" id="example-spoiler" />
			<label for="example-spoiler" class="spoiler-label">html example</label>

			<div class="spoiler-body">
				hidden text
			</div>
		</div>
```
