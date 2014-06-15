# Grunt workshop

More info: [https://fronteers.nl/workshops/grunt-voor-beginners-tom-greuter](https://fronteers.nl/workshops/grunt-voor-beginners-tom-greuter)

This is an elaboration of the grunt plugins we discussed in the workshop.

## grunt-contrib-connect

- Setup a webserver with livereload (do not forget to install your firefox and chrome livereload plugin). See [http://go.livereload.com/extensions](http://go.livereload.com/extensions).
- Open site in browser when task starts.
- Run with `grunt connect` or `grunt serve` (defined later during the course).

## grunt-contrib-watch

- Reload page in browser when file changes. 
- Call sass task (defined later).

## grunt-contrib-sass

- Compile sass to css when scss file changes (defined later).

## grunt-contrib-clean

- Clean generated CSS folder.

## grunt-contrib-csslint

- Check syntax of CSS to rules as defined in .csslintrc.

## grunt-contrib-jshint

- Check syntax of JavaScript to rules as defined in .jshintrc.

## grunt-phantomcss

- Make screenshots of page sections and compare these with previous snapshots.
- Define actions on the page with Casperjs.

## grunt-contrib-copy

- Copy generated and other source files to a folder that can be distributed to the production server. 