'use strict';

import pug    from 'gulp-pug';
import gulp   from 'gulp';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('pug', function buildHTML() {
  return gulp.src(config.views.dir)
    .pipe(pug({
              pretty: true
          }))
  .pipe(gulp.dest(config.dest.dir))
  .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});
