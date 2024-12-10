import "./allUsers.css";
// Hooks
import { useState, useEffect } from 'react';
// Functions
import { getUsersFunc, deleteUserFunc } from "../server";
// Reoutes
import { Link, useNavigate } from 'react-router';

export function AllUsers() {

    const [users, setUsers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        allUsers();

    }, []);

    async function allUsers() {

        let response = await getUsersFunc();

        setUsers(response.data);
        
    };

    function handleEdit(id) {

        navigate(`/edit/${id}`);
        
    };

    async function handleDelete(id) {

        await deleteUserFunc(id);

        allUsers();
        
    };

    return <div className="allUsers">
        <Link to="/">Back to main page</Link>

        {users.map((u, i) => {
            
            return <div key={i} className="user">
                <span><b>ID</b>: {u.id}</span>
                <span><b>Phone/Email</b>: {u.phone}</span>
                <span><b>Password</b>: {u.password}</span>

                <div className="btns">
                    <button onClick={() => handleEdit(u.id)}>Edit</button>
                    <button onClick={() => handleDelete(u.id)}>Delete</button>
                </div>
            </div>

        })}
    </div>
    
};