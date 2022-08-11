[![Running Test](https://github.com/damarmustikoaji/srikaya/actions/workflows/main.yml/badge.svg?branch=master)](https://github.com/damarmustikoaji/srikaya/actions/workflows/main.yml)

# Srikaya

Belajar membuat automation testing APi dengan Cypress

## Run
`npx cypress run --env grep=''`

```shell
# run only tests with "@get" in their names
npx cypress run --env grep=@get

  ✓ @get hello world
  - works
  - works 2 @tag1
  - works 2 @tag1 @tag2

  1 passing (38ms)
  3 pending
```

## Directory Structure

    .
    ├── cypress/
    |   ├── fixtures
    |   |   ├── data.json
    |   |   └── .....json
    |   ├── integration/
    |   |   ├── get_detail.cy.js
    |   |   └── ....cy.js
    |   ├── support/
    |   |   ├── random_characters.js
    |   |   └── ....js
    |   ├── .env
    |   └── package.json
    ├── src/
    ├── .gitignore
    ├── package.json
    └── README.md

## Workflows
- Go to Github [Actions](https://github.com/damarmustikoaji/srikaya/actions) for details

## Test:
- https://petstore.swagger.io/#/

## Reference:
- https://github.com/cypress-io/cypress-grep
