import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) =>(
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(el=>(
            <BuildControl 
                key={el.label} 
                label={el.label} 
                added={()=>props.ingredientAdded(el.type)}
                removed={()=>props.ingredientRemoved(el.type)}
                disabled={props.disabled[el.type]}></BuildControl>
        ))}
        <button className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}>Order now</button>
    </div>
)

export default buildControls;