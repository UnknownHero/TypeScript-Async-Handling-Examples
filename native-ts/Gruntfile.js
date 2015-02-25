var exec = require('child_process').exec;
var path = require('path');


module.exports = function (grunt, projectConfig) {

    require('load-grunt-tasks')(grunt);


    var projectConfig = projectConfig != undefined ? projectConfig : {
        dev: 'src',
        release: 'build'
    };

    grunt.initConfig({

        project: projectConfig,

        shell: {
            typescript: {
                command: 'tsc src/app.ts  --sourceMap  --outDir  build/ --module commonjs',
                options: {
                    stdout: true
                }
            }
        }

    });

    grunt.registerTask('build', ['shell:typescript']);



};
