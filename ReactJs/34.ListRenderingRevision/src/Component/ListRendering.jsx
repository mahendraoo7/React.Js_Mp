import React from "react";

const List = () => {

    const BMW = [
        {
            model: "BMW M2",
            price: "₹5,07,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW M3",
            price: "₹61,29,400",
            fuelType: "Gasoline"
        },
        {
            model: "BMW M4",
            price: "₹62,29,400",
            fuelType: "Gasoline"
        },
        {
            model: "BMW M5",
            price: "₹86,32,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW M6",
            price: "₹99,60,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW M8",
            price: "₹1,08,90,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW X3 M",
            price: "₹60,79,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW X4 M",
            price: "₹62,25,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW X5 M",
            price: "₹90,67,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW X6 M",
            price: "₹93,15,000",
            fuelType: "Gasoline"
        },
        {
            model: "BMW XM",
            price: "₹1,32,77,000",
            fuelType: "Gasoline"
        }
    ]
    

    return (
      <div>
          <h1>List Rendering</h1>
          <div>
            {
                BMW.map((Car) => {
                    return (
                        <div>
                            <ul>
                                <li>{Car.model}</li>
                                <li>{Car.price}</li>
                                <li>{Car.fuelType}</li>
                            </ul>
                        </div>

                    )
                }) 
            }
          </div>
      </div>
    )
}

export default List 

