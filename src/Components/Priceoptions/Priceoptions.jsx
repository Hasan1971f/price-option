import PriceOption from "../PriceOption/PriceOption";

;

const Priceoptions= () => {
    const priceOptions=[
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 20,
          "features": [
            "Access to gym floor",
            "Basic cardio equipment"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": 35,
          "features": [
            "Access to gym floor",
            "All cardio equipment",
            "Weight training area access",
            "Group fitness classes (limited)"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": 50,
          "features": [
            "Access to gym floor",
            "All cardio equipment",
            "Weight training area access",
            "Unlimited group fitness classes",
            "Personal training sessions (limited)",
            "Sauna and steam room access"
          ]
        }
      ]
    return (
        <div>
            <h2 className="text-5xl">Best Prices: </h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option }></PriceOption>) 
            }
        </div>
    );
};

export default Priceoptions;