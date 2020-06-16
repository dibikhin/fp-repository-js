/**
 * @module Infra.App.ContextFactory
 */

'use strict'

function make({
    dal,
}) {
    return Object.freeze({
        Dal: dal,
    })
}

module.exports = Object.freeze({
    make,
})
