import React, { useContext } from 'react'
import { ItemContext } from '../context/ItemContext';
import styles from '../CSS.Modules/SearchFood.module.css';



function SearchFood() {
    const { receivedItem, setReceivedItem } = useContext(ItemContext);
    console.log(receivedItem);
    const description = receivedItem.Description;
    const ItemImg = receivedItem.ImageUrl;
    const name = receivedItem.Name;

    const menuItemOptionSets = receivedItem.MenuItemOptionSets;
    console.log(menuItemOptionSets);

    let menuItem;

    if (menuItemOptionSets) {
        menuItem = menuItemOptionSets.map(menuItemOptionSet => {
            const { IsMasterOptionSet, MenuItemOptionSetItems } = menuItemOptionSet;

            const menuItemOptionSetItem = MenuItemOptionSetItems.map(MenuItemOptionSetItem => {

                const menuItemName = MenuItemOptionSetItem.Name;
                const MenuItemId = MenuItemOptionSetItem.MenuItemOptionSetId

                return (
                    <div key={MenuItemId} >
                        {menuItemName}
                    </div>
                )
            })

            return (
                <div className={styles.menuItem_options}>
                    <p>Option:</p>
                    <div>{menuItemOptionSetItem}</div>
                </div>
            )
        })

    } else {
        console.log('there is no menuItemOptionSets')
    }


    return (
        <div className={styles.menuItem_box}>
            <div className={styles.menuItem_img} >
                <img src={ItemImg} />
            </div>
            <div className={styles.menuItem_heading}>
                <div>
                    <h2>{name}</h2>
                    <h4>{description}</h4>
                </div>
            </div>
            <div>
                <div className={styles.menuItem_Info}>
                    {menuItem}
                </div>
            </div>
        </div >
    )
}

export default SearchFood