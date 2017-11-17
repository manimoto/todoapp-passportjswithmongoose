var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var BROWSER_SYNC_RELOAD_DELAY = 500;
var historyApiFallback = require('connect-history-api-fallback');
//browsersync
gulp.task('browser-sync', function () {

    browserSync.init({
        server: {
        
            baseDir: "./",
            middleware: [ historyApiFallback() ],
            //directory: true remove middleware in order to work directory of projects
        },

        
        port:3300
    });
    
      // for more browser-sync config options: http://www.browsersync.io/docs/options/
/* 
     browserSync({
    
        // informs browser-sync to proxy our expressjs app which would run at the following location
        proxy: 'http://localhost:8082',
    
        // informs browser-sync to use the following port for the proxied app
        // notice that the default port is 3000, which would clash with our expressjs
        port: 4200,
    
        // open the proxied app in chrome
        browser: ['chrome']
      });
*/
    });

//var browserSync = require('browser-sync').create();
//var reload      = browserSync.reload;
//gulp.watch("*.html").on("change", reload);
    
gulp.task('js',  function () {
    return gulp.src('app/**/*.js')
      // do stuff to JavaScript files
      //.pipe(uglify())
      //.pipe(gulp.dest('...'));
  });
  
  gulp.task('css', function () {
    return gulp.src('app/**/*.css')
      .pipe(browserSync.reload({ stream: true }));
  })
  
  gulp.task('bs-reload', function () {
    browserSync.reload();
  });
  
  gulp.task('browser-synch-watch', ['browser-sync'], function () {
    gulp.watch('app/**/*.js',   ['js', 'bs-reload']);
    gulp.watch('app/**/*.css',  ['css']);
    gulp.watch('app/**/*.html', ['bs-reload']);
    gulp.watch('./*.html', ['bs-reload']);
  });


var tsServerProject = ts.createProject({
   declarationFiles: false,
   noResolve: false,
   module: 'commonjs',
   target: 'ES5'
});

var srcServer = 'app/**/*.ts'

gulp.task('default', ['compile-server','browser-synch-watch'], watchServer);
gulp.task('compile-server', compileServer);

function watchServer(params) {
   gulp.watch(srcServer, ['compile-server']);
}

function compileServer(params) {
    var tsResult = gulp.src(srcServer)
       .pipe(sourcemaps.init())
       .pipe(tsServerProject());
 
    return tsResult.js
       .pipe(sourcemaps.write('./source-maps'))
       .pipe(gulp.dest('app/'));
 
 }