/**
 * @module Infra.App.Bootstrapper
 */

'use strict'

const { init: lazyInit, } = require('../infra/lazy')

const genericRepository = require('../dal/generic_repository')
const dbStub = require('../dal/db_stub')
const {
    Collections,
} = require('../domain/constants')

const { make: makeUsersRepo, } = require('../dal/users_repository_factory')
const { make: makeContext, } = require('./context_factory')

/**
 * Build context from parts, cascade initialization
 */
function init({ globalState, }) {
    // eslint-disable-next-line no-param-reassign
    globalState.db = lazyInit({
        initTarget: dbStub.init,
        target: globalState.db,
    })
    // eslint-disable-next-line no-param-reassign
    globalState.usersRepo = lazyInit({
        initTarget: () => initUsersRepo({ db: globalState.db, }),
        target: globalState.usersRepo,
    })

    const ctx = makeContext({
        dal: {
            UsersRepo: globalState.usersRepo,
        },
    })
    return ctx
}

function initUsersRepo({ db, }) {
    return makeUsersRepo({
        db,
        repository: genericRepository,
        collectionName: Collections.Users,
    })
}

module.exports = Object.freeze({
    init,
})
