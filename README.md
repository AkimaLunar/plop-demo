## [Plop.js](https://plopjs.com/documentation/) Demo

1. Add plop to dev dependencies
`yarn add -D plop`

2. Create your Handlebar templates in `./templates` directory

3. Create `plopfile.js`

```JS
module.exports = function (plop) {
    // (1) Create a generator
    plop.setGenerator('NAME THIS GENERATOR', {
        description: 'WHAT IS IT GENERATING?',

        // (2) Add array of prompt(s)
        // https://github.com/SBoudrias/Inquirer.js/#question
        prompts: [
            {
                // (2.1) Input type
                input: '', // 'input' | 'number' | 'confirm' | 'list' | 'rawlist' |
                        // 'expand' | 'checkbox' | 'password' | 'editor'
                
                // (2.2) Key used in templates
                name: '', // String

                // (2.3) Prompt text
                message: '', // String | Function
            }
        ],

        // (3) Add array of action(s)
        // https://plopjs.com/documentation/#interface-actionconfig
        actions: [
            {
                // (3.1) Action type
                //  // https://plopjs.com/documentation/#built-in-actions
                type: 'add',

                // (3.2) Template path
                path: '',

                // (3.3) Template source
                templateFile: ''
            }
        ]
    });
};

```

3. Add generate command to package.json

```JSON
    {
        "scripts": { "generate": "plop", }
    }
```

… and run `yarn generate [GENERATOR NAME]`