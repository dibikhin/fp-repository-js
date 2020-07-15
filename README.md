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

The concrete `UsersRepository` module is initiated in `app_infra/bootstrapper` by `users_repository_factory` using `generic_repository` and `dal/db_stub`. Dependencies are injected with partial application (Ramda's `partial`) which also handles state (`db`) through reference to `app_infra/global_state` (explicit state storage).

See a simple example of usage in `test.js` and how to run above.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors
- Roman Dibikhin

## Acknowledgments
Thanks to:
- Martin Fowler for the Patterns of Enterprise Application Architecture book
- Airbnb for their JavaScript style guide
- Buzz de Cafe and Scott Sauyet for the Ramda library

## Links
- [P of EAA: Repository](https://martinfowler.com/eaaCatalog/repository.html) - A fundamental article about the Repository pattern
- [Ramda](https://ramdajs.com) - A practical functional library for JavaScript programmers
- [Mocha](https://mochajs.org) - A feature-rich JavaScript test framework 
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

## License
[MIT](LICENSE)
