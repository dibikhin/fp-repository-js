# The Repository pattern in functional style on JavaScript

An example implementation of the Repository pattern using Functional Programming.

## Prerequisites
- Node.js
- NPM
- Basic knowledge of Functional Programming and Ramda library

## Installing

### Cloning

```bash
$ git clone https://github.com/dibikhin/fp-repository-js.git
```

### Setting up

```bash
$ cd fp-repository-js
$ npm install
```

## Running the tests

```bash
$ npm test
```

## Usage

Suppose you have a stateful DB client demanding to be initialized or connected to a data source. So, you have to store its state somewhere and mock the DB when needed. Or you just want to have a familiar interface for data access.

The Repository pattern will help you. It provides the familiar interface and Functional Programming helps with handling state. Applying OOP you create instances of Repositories with generics or concrete classes holding a stateful db context in a private field. Using Functional Programming you deal with modules instead of classes and inject state to functions with partial application.

Here we have:
- DB stub — an example of DB client
- Generic Repository — a template Repository for creating concrete ones
- Users Repository — a concrete Repository for `Users` collection/table
- Bootstrapper — a module for wiring things up

The concrete `UsersRepository` module is initiated in `app_infra/bootstrapper` by `dal/users_repository_factory` using `dal/generic_repository` and `dal/db_stub`. Dependencies are injected with partial application (Ramda's `partial`) which also handles state (`db`) through reference to `app_infra/global_state` (an explicit state storage).

See a simple example of usage in `test.js` and run tests with `npm test`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors
- Roman Dibikhin

## Acknowledgments
Thanks to:
- Martin Fowler for the Patterns of Enterprise Application Architecture book
- Buzz de Cafe and Scott Sauyet for the Ramda library

## Links
- [P of EAA: Repository](https://martinfowler.com/eaaCatalog/repository.html) — A fundamental article about the Repository pattern
- [Ramda](https://ramdajs.com) — A practical functional library for JavaScript programmers
- [Mocha](https://mochajs.org) — A feature-rich JavaScript test framework 
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [An OOP Repository](https://khalilstemmler.com/articles/typescript-domain-driven-design/repository-dto-mapper/#Repositories) — An OOP example of the Repository pattern
- [F# for fun and profit](https://fsharpforfunandprofit.com) — An inspiring and addictive blog about Functional Programming

## License
[MIT](LICENSE)
