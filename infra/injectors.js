/**
 * @module Infra.Common.Injectors
 */

'use strict'

const {
    map,
    partial,
    partialRight,
} = require('ramda')

function inject({ aModule, deps, }) {
    return map(
        (fn) => partial(fn, deps),
        aModule,
    )
}

function injectRight({ aModule, deps, }) {
    return map(
        (fn) => partialRight(fn, deps),
        aModule,
    )
}

module.exports = Object.freeze({
    inject,
    injectRight,
})
