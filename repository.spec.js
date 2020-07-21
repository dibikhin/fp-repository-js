/**
 * Spec
 */

'use strict'

const { init: initCtx, } = require('./app_infra/bootstrapper')
const { runTests, } = require('./tests')

// Explicit global state
const globalState = require('./app_infra/global_state')

describe('The Repository pattern, FP style', () => {
    it('should show results without errors', () => {
        const globalCtx = initCtx({ globalState, })

        // Trivial Dependency Injection
        runTests(globalCtx)
            .then()
            .catch(console.error)
    })
})
