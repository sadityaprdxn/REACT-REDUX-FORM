const addUser = (user , unicode) => {
    return {
        type : 'ADD_USER',
        payLoad : {
            name : user.userName.value,
            email : user.userEmail.value,
            mobileNo : user.userMobileNo.value,
            id : unicode
        }
    }
}

const deleteUser = (id) => {
    return {
        type : 'DELETE_USER',
        payLoad : id
    }
}

export { addUser, deleteUser };