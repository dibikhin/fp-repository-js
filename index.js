/**
 * Entry point example
 */

'use strict'

const { init: initCtx, } = require('./app_infra/bootstrapper')

// Explicit global state
const globalState = require('./app_infra/global_state')

const globalCtx = initCtx({ globalState, })

// Trivial Dependency Injection
getUser(globalCtx)
    .then()
    .catch(console.error)

async function getUser(ctx) {
    const gotUser = await ctx.Dal.UsersRepository.getById('1234')
    console.log('gotUser:', gotUser)
    return null
}
