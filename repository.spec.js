/**
 * Spec
 */

'use strict'

const { initCtx, } = require('./app_infra/bootstrapper')
const { runTests, } = require('./tests')

describe('The Repository pattern, FP style', () => {
    it('should show results without errors', () => {
        const ctx = initCtx()

        // Trivial Dependency Injection
        runTests(ctx)
            .then()
            .catch(console.error)
    })
})
