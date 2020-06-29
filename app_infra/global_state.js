/**
 * @module Infra.App.GlobalState
 */

'use strict'

// The only and explicit global state.
// To be used for context initialization only.
const globalState = {}

// WARN: use lowercased filenames only for singleton
// behaviour of this module, i.e. `require('./global_state')`
module.exports = globalState
