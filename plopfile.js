module.exports = function(plop) {
    // (1) Create a generator
    plop.setGenerator('element', {
        description: 'Single purpose nuclear component.',
        prompts: [
            {
                input: 'input',
                name: 'name',
                message: 'Element name now, please!'
            }
        ],

        actions: [
            {
                type: 'add',
                path: 'src/elements/{{pascalCase name}}/{{pascalCase name}}.js',
                templateFile: 'templates/Element/Element.js.hbs'
            },
            {
                type: 'add',
                path: 'src/elements/{{pascalCase name}}/{{pascalCase name}}.notes.md',
                templateFile: 'templates/Element/Element.notes.md.hbs'
            },
            {
                type: 'add',
                path: 'src/elements/{{pascalCase name}}/{{pascalCase name}}.story.js',
                templateFile: 'templates/Element/Element.story.js.hbs'
            },
            {
                type: 'add',
                path: 'src/elements/{{pascalCase name}}/{{pascalCase name}}.styles.css',
                templateFile: 'templates/Element/Element.styles.css.hbs'
            },
            {
                type: 'add',
                path: 'src/elements/{{pascalCase name}}/{{pascalCase name}}.test.js',
                templateFile: 'templates/Element/Element.test.js.hbs'
            },
            {
                type: 'add',
                path: 'src/elements/{{pascalCase name}}/index.js',
                templateFile: 'templates/Element/inject-index.js.hbs'
            },
        ]
    });
}