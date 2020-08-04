const initialState = {
    users : [
        {
            name : 'aditya sawant',
            email : 'addisawant1001@gmail.com',
            mobileNo : '9820365585',
            id : 1
        },

        {
            name : 'aniket shrirao',
            email : 'aniketshrirao@gmail.com',
            mobileNo : '9820365585',
            id : 2
        }
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                users : [
                    ...state.users,
                    action.payLoad
                ]
            }
        
        case 'DELETE_USER':
            return {
                users : [
                    ...state.users.filter(element => element.id !== action.payLoad)
                ]
            }
    
        default:
            return state;
    }
}

export {userReducer};