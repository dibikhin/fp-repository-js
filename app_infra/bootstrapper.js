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

// Explicit global state
const globalState = require('./global_state')

/**
 * Build context from parts, cascade initialization
 */
function initCtx() {
    globalState.db = lazyInit({
        initTarget: dbStub.init,
        target: globalState.db,
    })
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
    initCtx,
})
