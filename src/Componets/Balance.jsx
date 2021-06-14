import { Box, Typography, makeStyles } from '@material-ui/core'
import { useEffect, useState } from 'react';



const useStyles = makeStyles({
    blanace: {
        fontSize: '35',
        marginBottom: '1px'

    }

})

const Balance = ({ transactions }) => {

    const classes = useStyles();
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
    return (
        <Box>
            <Typography className={classes.blanace} variant='h5'>
                Balance ₹{total}
            </Typography>
        </Box>
    )

}


export default Balance;