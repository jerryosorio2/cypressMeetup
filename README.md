# Cypress meetup

Cypress meetup examples

## Installation

First clone repository

```bash
git clone https://github.com/jerryosorio2/cypressMeetup.git
```

Install packages

```bash
npm install
```

Execute test

```bash
npm test
or
npx cypress run 
npx cypress open
```

Or to execute specific test group use the following command

```bash
npx cypress run --spec 'pathOfSpecs'
```

Execute in parallel use the following command

```bash
npx cypress run --record --key [ProjectKey] --parallel --ci-build-id [BuildId]
```



## License
[MIT](https://choosealicense.com/licenses/mit/)