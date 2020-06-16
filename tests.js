/**
 * Tests
 */

'use strict'

async function runTests({
    Dal: {
        UsersRepo,
    },
}) {
    const gotUser = await UsersRepo.getById('1234')
    console.log('gotUser:', gotUser)

    const createdUser = await UsersRepo.create({ name: 'Jane', })
    console.log('createdUser:', createdUser)

    const createdByIdUser = await UsersRepo.setById(
        '2345', { name: 'Peter', },
    )
    console.log('createdByIdUser:', createdByIdUser)

    const updatedUser = await UsersRepo.updateById(
        '2345', { age: 21, },
    )
    console.log('updatedUser:', updatedUser)

    const deletedUser = await UsersRepo.deleteById('1234')
    console.log('deletedUser:', deletedUser)

    const query = {
        field: 'age', op: 'gt', value: 27,
    }
    const foundUser = await UsersRepo.find(query)
    console.log('foundUser:', foundUser)

    return null
}

module.exports = {
    runTests,
}
