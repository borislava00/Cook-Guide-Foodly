import React, { useState } from 'react';

import { Container, Checkbox, Typography } from '@material-ui/core';

export function IngredientRow({amount,data}) {

    const [ state, setState] = useState(false);

    return (
        <Container style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox color='grey' onClick={() => setState(!state)}/>
            <Typography style={ state ? { textDecoration: 'line-through' } : {}}>{amount}{data}</Typography>
        </Container>
    );
}