import React from 'react';
import './Sidebar.css'
const Sidebar = () => {
    return (
        <div className='sidebar__container'>
            <div className='sidebar__icon1'>
                <div className='icon1__inner'>
                  <img src="https://cdn-icons.flaticon.com/png/128/448/premium/448411.png?token=exp=1637082120~hmac=75af39b7d4e69d44e3fb209425fdd964" alt="Hospital" width='30'/>
                </div>
            </div>
            <div className='sidebar__icon2'>
               <div className='icon2__inner'>
                <img src='https://cdn-icons.flaticon.com/png/128/3889/premium/3889524.png?token=exp=1637082180~hmac=7e10cab65b0a6862979bf2065cdaa321' alt='LogOut' width='30'/>
               </div>
            </div>
        </div>
    )
}

export default Sidebar
