var gulp = require("gulp"),
	connect = require("gulp-connect");

gulp.task("connect", function(){
	"use strict";
	connect.server({
		root: "src/",
		livereload: true
	})
});

gulp.task("default", ["connect"]);