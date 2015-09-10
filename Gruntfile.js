module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            build: {
                files: ['src/**/*.jsx'],
                tasks: ['build']
            },
            test: {
                files: ['src/**/*.jsx', 'tests/*.jsx'],
                tasks: ['testOnce']
            }
        },
        babel: {
            options: { sourceRoot: 'src' },
            umd: {
                files: {
                    'tmp/reactable/lib/to_array.js': 'src/reactable/lib/to_array.jsx',
                    'tmp/reactable/lib/filter_props_from.js': 'src/reactable/lib/filter_props_from.jsx',
                    'tmp/reactable/lib/extract_data_from.js': 'src/reactable/lib/extract_data_from.jsx',
                    'tmp/reactable/lib/is_react_component.js': 'src/reactable/lib/is_react_component.jsx',
                    'tmp/reactable/lib/stringable.js': 'src/reactable/lib/stringable.jsx',
                    'tmp/reactable/filterer.js': 'src/reactable/filterer.jsx',
                    'tmp/reactable/sort.js': 'src/reactable/sort.jsx',
                    'tmp/reactable/td.js': 'src/reactable/td.jsx',
                    'tmp/reactable/tr.js': 'src/reactable/tr.jsx',
                    'tmp/reactable/thead.js': 'src/reactable/thead.jsx',
                    'tmp/reactable/tfoot.js': 'src/reactable/tfoot.jsx',
                    'tmp/reactable/unsafe.js': 'src/reactable/unsafe.jsx',
                    'tmp/reactable/th.js': 'src/reactable/th.jsx',
                    'tmp/reactable/paginator.js': 'src/reactable/paginator.jsx',
                    'tmp/reactable/table.js': 'src/reactable/table.jsx',

                    'tmp/reactable.js': 'src/reactable.jsx',

                    'build/tests/reactable_test.js': 'tests/reactable_test.jsx'
                },
                options: { modules: 'umdStrict' }
            },
            common: {
                files: {
                    'lib/reactable/lib/to_array.js': 'src/reactable/lib/to_array.jsx',
                    'lib/reactable/lib/filter_props_from.js': 'src/reactable/lib/filter_props_from.jsx',
                    'lib/reactable/lib/extract_data_from.js': 'src/reactable/lib/extract_data_from.jsx',
                    'lib/reactable/lib/is_react_component.js': 'src/reactable/lib/is_react_component.jsx',
                    'lib/reactable/lib/stringable.js': 'src/reactable/lib/stringable.jsx',
                    'lib/reactable/filterer.js': 'src/reactable/filterer.jsx',
                    'lib/reactable/sort.js': 'src/reactable/sort.jsx',
                    'lib/reactable/td.js': 'src/reactable/td.jsx',
                    'lib/reactable/tr.js': 'src/reactable/tr.jsx',
                    'lib/reactable/thead.js': 'src/reactable/thead.jsx',
                    'lib/reactable/tfoot.js': 'src/reactable/tfoot.jsx',
                    'lib/reactable/unsafe.js': 'src/reactable/unsafe.jsx',
                    'lib/reactable/th.js': 'src/reactable/th.jsx',
                    'lib/reactable/paginator.js': 'src/reactable/paginator.jsx',
                    'lib/reactable/table.js': 'src/reactable/table.jsx',

                    'lib/reactable.js': 'src/reactable.jsx',

                    'build/tests/reactable_test.js': 'tests/reactable_test.jsx'
                },
                options: { modules: 'common' }
            }
        },
        concat: {
            dist: {
                src: [
                    'tmp/reactable/tmp/filter_props_from.js',
                    'tmp/reactable/tmp/to_array.js',
                    'tmp/reactable/tmp/stringable.js',
                    'tmp/reactable/tmp/extract_data_from.js',
                    'tmp/reactable/tmp/is_react_component.js',
                    'tmp/reactable/unsafe.js',
                    'tmp/reactable/filterer.js',
                    'tmp/reactable/sort.js',
                    'tmp/reactable/td.js',
                    'tmp/reactable/tr.js',
                    'tmp/reactable/th.js',
                    'tmp/reactable/thead.js',
                    'tmp/reactable/tfoot.js',
                    'tmp/reactable/paginator.js',
                    'tmp/reactable/table.js',
                    'tmp/reactable.js'
                ],
                dest: 'build/reactable.js'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.registerTask('testOnce', ['build', 'karma']);
    grunt.registerTask('test', ['testOnce', 'watch:test']);

    grunt.registerTask('buildBrowser', ['babel:umd', 'concat'])
    grunt.registerTask('build', ['babel:common', 'buildBrowser']);
    grunt.registerTask('default', ['build', 'watch:build']);
};

