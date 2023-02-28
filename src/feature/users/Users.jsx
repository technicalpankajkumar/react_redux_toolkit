import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';
const Users=()=>{
    const dispatch=useDispatch()
    const users=useSelector(state=> state.users)

    // console.log(users)

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

    return (
        <React.Fragment>
            <div className='row justify-content-center'>
                <div className='col-sm-6'>
                    <h1 className='text-center'>User Data</h1>
                    <hr/>
                    {users.loading && <h3>Loading Data......</h3>}
                    {!users.loading && users.error ? <div>Error : users.error</div> : null}
                    {!users.loading && 
                        <div>
                            <table className='table table-striped'>
                                <thead className='table-dark'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users.users.map((data,index)=>{
                                        return <tr key={index} className="border border-2">
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>{data.phone}</td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Users;