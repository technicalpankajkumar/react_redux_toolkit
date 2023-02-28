import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../feature/cake/cakeSlice'
import iceCreamReducer from '../feature/icecream/icecreamSlice'
import usersReducer from '../feature/users/usersSlice'

// import reduxLogger from 'redux-logger'
// import { createLogger } from 'redux-logger'

// const logger=createLogger()

const store=configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream:iceCreamReducer,
        users:usersReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store