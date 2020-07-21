/**
 * @module Infra.Dal.UsersRepositoryFactory
 */

'use strict'

const {
    inject,
} = require('../infra/injectors')

function make({ db, repository, collectionName, }) {
    return Object.freeze(
        inject({
            aModule: repository,
            deps: [db, collectionName],
        })
    )
}

module.exports = Object.freeze({
    make,
})
