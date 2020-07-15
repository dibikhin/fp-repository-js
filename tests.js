/**
 * Tests
 */

'use strict'

/**
 * @param {Object} ctx context
 */
async function runTests({
    Dal: {
        UsersRepository,
    },
}) {
    const gotUser = await UsersRepository.getById('1234')
    console.log('gotUser:', gotUser)

    const createdUser = await UsersRepository.create({ name: 'Jane', })
    console.log('createdUser:', createdUser)

    const createdByIdUser = await UsersRepository.setById(
        '2345', { name: 'Peter', },
    )
    console.log('createdByIdUser:', createdByIdUser)

    const updatedUser = await UsersRepository.updateById(
        '2345', { age: 21, },
    )
    console.log('updatedUser:', updatedUser)

    const deletedUser = await UsersRepository.deleteById('1234')
    console.log('deletedUser:', deletedUser)

    const query = {
        field: 'age', op: 'gt', value: 27,
    }
    const foundUser = await UsersRepository.find(query)
    console.log('foundUser:', foundUser)

    return null
}

module.exports = {
    runTests,
}
