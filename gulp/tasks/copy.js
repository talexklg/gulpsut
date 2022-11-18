export const copy = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files))
        .pipe(app.gulp.src(app.path.src.css))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.gulp.src(app.path.src.video))
        .pipe(app.gulp.dest(app.path.build.video))
}