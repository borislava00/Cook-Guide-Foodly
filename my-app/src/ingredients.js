import { IngredientRow } from "./ingredientRow";
import { Box } from "@material-ui/core";

export function Ingredients({ingredients}) {

    return (
        <Box>
            {
                ingredients.map((item, index) => {
                    return <IngredientRow amount={item.amount} data={item.data} key={index}  />
                })
            }
        </Box> 
    );
}