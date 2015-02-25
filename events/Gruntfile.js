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

        concurrent: {
            build: {
                tasks: ['watch:all', 'watch:deps'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },



        shell: {
            sync: {
                command: 'mkdir -p ./build/<%= project.name %>/ && rsync -avzh --delete  --exclude="node_modules" --exclude="build" --exclude="*.ts" ./ ./build/<%= project.name %>',
                options: {
                    stdout: true
                }
            },
            typescript: {
                command: 'tsc src/app.ts  --sourceMap  --outDir  build/ --module commonjs',
                options: {
                    stdout: true
                }
            }
        }

    });

    grunt.registerTask('build', ['shell:sync', 'shell:typescript']);
    grunt.registerTask('fullbuild', ['shell:npm', 'shell:bower', 'build']);



};
