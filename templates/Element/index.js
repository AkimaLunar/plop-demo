module.exports = {
    description: 'Generate Element, single-purpose atomic component.',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Element name now, please!',
        }
    ],
    actions: [
        {
            type: 'addMany',
            base: `templates/Element/`,
            destination: 'src/elements/{{pascalCase name}}',
            templateFiles: 'templates/Element/*.hbs'
        },
    ]
}
