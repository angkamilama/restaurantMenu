import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";
import restaurant from "../assets/restaurantHomepage.jpg";

function Home() {
  const [retrievedData, setRetrievedData] = useState([]);
  const navigate = useNavigate();
  const { receivedItem, setReceivedItem } = useContext(ItemContext);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json`
      );
      const data = response.data;
      setRetrievedData(data.MenuSections);
    } catch (error) {
      console.log("there is an error");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const menuSectionItems = retrievedData.map((menuSectionItem) => {
    const { Name, MenuSectionId, ImageUrl, MenuItems } = menuSectionItem;
    if (MenuItems.length > 0) {
      const menuSectionItem = MenuItems.map((item) => {
        if (item.length !== 0) {
          const { Name, id } = item;
          return (
            <div>
              <button
                key={id}
                className="border border-green-800 p-2 m-3 rounded-md bg-blue-100/50 cursor-pointer hover:scale-110 hover:bg-blue-300/75 text-sm"
                onClick={() => {
                  setReceivedItem(item);
                  navigate("/Search");
                }}
              >
                {Name}
              </button>
            </div>
          );
        } else {
          return;
        }
      });
      return (
        <div className="p-1 m-4 w-10/12 flex-col rounded-xl justify-evenly items-center md:flex md:w-[350px] ">
          <p className="mb-4 text-xl">{Name}</p>
          <div
            style={{
              backgroundImage: `url(${ImageUrl})`,
            }}
            className="mx-auto mb-4  h-[300px] w-10/12 border border-green-800 bg-cover bg-center bg-no-repeat rounded-lg   md:w-7/12 md:h-[200px]"
          ></div>
          <div className="flex justify-evenly items-center">
            {" "}
            {menuSectionItem}
          </div>
        </div>
      );
    }
  });

  return (
    <div className="scroll-smooth">
      <div className=" leading-8 font-serif w-full h-auto mx-auto my-5 flex flex-col items-center p-3 md:w-11/12 md:flex-row ">
        <div className="h-55 w-10/12 p-2 mx-2">
          <img src={restaurant} className="w-full rounded-lg sm:h-fit" />
        </div>
        <div className="h-auto w-10/12 p-2 mx-2">
          <h2 className="mb-2 text-2xl ">HIMALAYAN FLAVOUR RESTAURANT</h2>
          <p>
            Our restaurant(new git changessssss), located at the heart of essen
            city in Germany offers a wide range of food services with perfect
            environment for friends and families. Our restaurant serves you all
            year round with natural and uncomplicated flavors whether you want
            to enjoy a lunch or a quick cup of coffee. Our awarded Chef de
            cuisine Henry Tikkanen appreciates local, high-quality and seasonal
            ingredients. Restaurant Gösta arranges also special dining menus,
            champagne-tasting and banquet dinner for more sophisticated needs.
            We recommend you book a table beforehand particularly during spring
            and summer seasons. You can also buy the restaurant’s special Art
            Menu online and reserve the table at the same time or just book a
            table and order à la carte.
          </p>
          <h4 className="mb-4">
            In wintertime (Sep–May), the restaurant is open from Tuesday to
            Sunday from 11 am to 5 pm and in summertime (Jun-Aug) daily from 11
            am to 5.30 pm. The kitchen closes 30 min before.
          </h4>
          <h3>
            <span>Welcome To Our Restaurant!</span>
          </h3>
        </div>
      </div>
      <div className="w-11/12 my-9 mx-auto p-4 border border-green-800 rounded-xl md:flex-col">
        <h2 className="w-full text-center p-4 my-4 font-bold ">OUR MENU</h2>
        <div className=" w-11/12 h-full text-center flex flex-col justify-center  items-center md:flex-row md:flex-wrap md:justify-evenly ">
          {menuSectionItems}
        </div>
      </div>
    </div>
  );
}

export default Home;
