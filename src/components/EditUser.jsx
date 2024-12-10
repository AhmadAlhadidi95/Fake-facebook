import "./editUser.css";
// Hooks
import { useState, useEffect } from 'react';
// Functions
import { getUserByIdFunc, editUserByIdFunc } from "../server";
// Reoutes
import { useParams, Link, useNavigate } from 'react-router';

let initialValue = {
    "phone": "",
    "password": ""
};

export function EditUser() {

    const [userInfo, setUserInfo] = useState(initialValue);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        userDetail();

    }, []);

    async function userDetail() {

        let response = await getUserByIdFunc(id);

        setUserInfo(response.data);
        
    };

    function handleUser(e) {

        setUserInfo({...userInfo, [e.target.name]: e.target.value});
        
    };

    async function handleEdit() {

        await editUserByIdFunc(id, userInfo);

        navigate("/all");
        
    };

    return <div className="mainBox">
        <div className="editBox">
            <form>
                <input type="text" name="phone" placeholder='البريد الإلكتروني أو رقم الهاتف' value={userInfo.phone} onChange={(e) => {handleUser(e)}} />
                <input type="password" name="password" placeholder='كلمة السر' value={userInfo.password} onChange={(e) => {handleUser(e)}} />

                <input type="button" value="قم بالتعديل" onClick={handleEdit} />
            </form>

            <Link to="/all">All users</Link>
        </div>
    </div>
    
}