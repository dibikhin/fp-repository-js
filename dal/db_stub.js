/**
 * @module Infra.Dal.DbStub
 */

'use strict'

/**
 * Connect, initialize, etc.
 */
function init() {
    return Object.freeze({
        get,
        add,
        set,
        update,
        delete: _delete,

        collection,
    })
}

/**
 * CRUD
 *
 * @private
 */

async function get(collectionName, docId) {
    return {
        id: docId,
        collectionName,
        name: 'Anna',
        createdAt: new Date(),
    }
}

async function add(collectionName, diff) {
    return {
        id: new Date().getTime(),
        collectionName,
        ...diff,
        createdAt: new Date(),
    }
}

async function set(collectionName, docId, diff) {
    return {
        id: docId,
        collectionName,
        ...diff,
        createdAt: new Date(),
    }
}

async function update(collectionName, docId, diff) {
    return {
        id: docId,
        collectionName,
        ...diff,
        createdAt: new Date(),
    }
}

// eslint-disable-next-line no-underscore-dangle
async function _delete(collectionName, docId) {
    return {
        id: docId,
        collectionName,
        createdAt: new Date(),
    }
}

function collection(collectionName) {
    return {
        async find(query) {
            return {
                id: new Date().getTime(),
                collectionName,
                name: 'Kate',
                age: 28,
                createdAt: new Date(),
                query,
            }
        },
    }
}

module.exports = Object.freeze({
    init,
})
