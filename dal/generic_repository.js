/**
 * @module Infra.Dal.GenericRepository
 */

'use strict'

/*
 * The Repository pattern
 */

async function find(db, collectionName, query) {
    return db.collection(collectionName).find(query)
}

async function getById(db, collectionName, docId) {
    return db.get(collectionName, docId)
}

async function create(db, collectionName, diff) {
    return db.add(collectionName, diff)
}

async function setById(db, collectionName, docId, diff) {
    return db.set(collectionName, docId, diff)
}

async function updateById(db, collectionName, docId, diff) {
    return db.update(collectionName, docId, diff)
}

async function deleteById(db, collectionName, docId) {
    return db.delete(collectionName, docId)
}

module.exports = Object.freeze({
    find,
    getById,
    create,
    setById,
    updateById,
    deleteById,
})
