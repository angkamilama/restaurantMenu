import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from '../CSS.Modules/RootLayout.module.css'

function RootLayout() {
    return (
        <>
            <nav >
                <NavLink to='/' className={styles.navLists}>HOME</NavLink>
                <NavLink to="/About" className={styles.navLists}>ABOUT</NavLink>
                <NavLink to="/Search" className={styles.navLists}>SEARCHFOOD</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default RootLayout