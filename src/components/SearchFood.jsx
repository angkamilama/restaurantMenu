import React, { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

function SearchFood() {
  const { receivedItem, setReceivedItem } = useContext(ItemContext);
  const { Description, ImageUrl, Name, MenuItemOptionSets, Price } =
    receivedItem;

  let receivedItemLength = Object.keys(receivedItem).length;

  if (receivedItemLength > 0) {
    let menuItem = MenuItemOptionSets.map((menuItemOptionSet) => {
      const { IsMasterOptionSet, MenuItemOptionSetItems, MinPrice } =
        menuItemOptionSet;

      const menuItemOptionSetItem = MenuItemOptionSetItems.map(
        (MenuItemOptionSetItem) => {
          const {
            Name,
            MenuItemOptionSetId,
            Price: optionalPrice,
          } = MenuItemOptionSetItem;

          return (
            <div>
              <div key={MenuItemOptionSetId} className="font-semibold">
                {Name}
              </div>
              <div className="text-sm">
                Price: €{IsMasterOptionSet ? MinPrice : Price || optionalPrice}
              </div>
            </div>
          );
        }
      );

      return (
        <div>
          <p className="mb-3 font-bold">Option:</p>
          <div className="p-3 h-50">{menuItemOptionSetItem}</div>
        </div>
      );
    });
    return (
      <div className="flex flex-col gap-8 justify-evenly items-center w-9/12 h-auto mx-auto my-7 text-center scroll-smooth">
        <div
          style={{ backgroundImage: `url(${ImageUrl})` }}
          className="h-[350px] w-full  bg-cover bg-center bg-no-repeat  border border-gray-400 rounded-3xl md:h-[500px] md:w-10/12 drop-shadow-md"
        ></div>
        <div>
          <h2 className="mb-5 font-bold text-2xl">{Name}</h2>
          <h4 className="italic">{Description}</h4>
        </div>
        <div className=" w-10/12 p-2 mx-auto  rounded-lg  flex-col justify-evenly items-center gap-5 mb-5 p-2 md:w-5/12 ">
          <div>{menuItem}</div>
        </div>
      </div>
    );
  } else {
    return (
      <p className="m-20 p-4 text-lg font-serif border-2 border-dashed border-blue-100font-bold text-red-800 ">
        No search item to show. Please select an menu item first.
      </p>
    );
  }
}

export default SearchFood;
