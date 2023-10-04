import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import styles from '../CSS.Modules/Home.module.css'
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import restaurant from '../assets/restaurantHomepage.jpg';


function Home() {
    const [retrievedData, setRetrievedData] = useState([]);
    const navigate = useNavigate();
    const { receivedItem, setReceivedItem } = useContext(ItemContext);


    async function fetchData() {
        try {
            const response = await axios.get(`https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json`);
            const data = response.data;
            console.log(data.MenuSections)
            setRetrievedData(data.MenuSections)
        }
        catch (error) {
            console.log('there is an error')
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const menuSectionItems = retrievedData.map(menuSectionItem => {
        const MenuName = menuSectionItem.Name;
        const MenuSectionId = menuSectionItem.MenuSectionId;
        const MenuImage = menuSectionItem.ImageUrl;
        const MenuItems = menuSectionItem.MenuItems; //array
        console.log(MenuItems)
        if (MenuItems.length > 0) {
            const menuSectionItem = MenuItems.map(item => {
                if (item.length !== 0) {
                    const name = item.Name;
                    const id = item.MenuItemId;
                    console.log(item)
                    return (
                        <button
                            className={styles.itemName}
                            key={id}
                            onClick={() => {
                                setReceivedItem(item)
                                navigate('/Search')
                            }
                            }
                        > {name}</button >
                    )
                } else {
                    return;
                }
            })
            return (
                <div className={styles.menuBox}>
                    <img src={MenuImage} alt='menuImage' className={styles.menuImage} />
                    <div className={styles.menuDescription}>
                        <p className={styles.menuName}>{MenuName}</p>
                        <div className={styles.itemSection}> {menuSectionItem}</div>
                    </div>
                </div>
            )
        }
    })



    return (
        <div className={styles.main_body}>
            <div className={styles.restaurant_description}>
                <div >
                    <img src={restaurant} className={styles.restaurantImage} />
                </div>
                <div className={styles.restaurant_detail}>
                    <h2>HIMALAYAN FLAVOUR RESTAURANT</h2>
                    <p>Our restaurant, located at the heart of essen city in Germany offers a wide range of food services with perfect environment for friends and families. Our restaurant serves you all year round with natural and uncomplicated flavors whether you want to enjoy a lunch or a quick cup of coffee. Our awarded Chef de cuisine Henry Tikkanen appreciates local, high-quality and seasonal ingredients. Restaurant Gösta arranges also special dining menus, champagne-tasting and banquet dinner for more sophisticated needs. We recommend you book a table beforehand particularly during spring and summer seasons. You can also buy the restaurant’s special Art Menu online and reserve the table at the same time or just book a table and order à la carte.</p>
                    <h4> In wintertime (Sep–May), the restaurant is open from Tuesday to Sunday from 11 am to 5 pm and in summertime (Jun-Aug) daily from 11 am to 5.30 pm. The kitchen closes 30 min before.</h4>
                    <h3><span className={styles.greetingText}>Welcome To Our Restaurant!</span></h3>
                </div>
            </div>
            <div className={styles.menu_section}>
                <h2>OUR MENU</h2>
                <div className={styles.menuList}>{menuSectionItems}</div>
            </div>
        </div>
    )
}

export default Home
