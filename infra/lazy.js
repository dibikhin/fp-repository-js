/**
 * @module Infra.Common.Lazy
 */

'use strict'

function init({ initTarget, target, }) {
    return target || initTarget()
}

module.exports = Object.freeze({
    init,
})
