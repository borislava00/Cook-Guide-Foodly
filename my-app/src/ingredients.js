import { IngredientRow } from "./ingredientRow";

const ingredients=[
    {
        amount: "150 gr ",
        name: "Mushroom Pasta with Goat Cheese",
    },
    {
        amount: "50 gr ",
        name: "Learus Vacuum Cleaner",
    },
    {
        amount: "100 ml ",
        name: "Chipotle Chicken Taquitos",
    }   
]

export function Ingredients() {

    return (
        ingredients.map((item, index) => {
            return <IngredientRow amount={(item.amount)} data={(item.name)} key={index}  />
        })
    );
}