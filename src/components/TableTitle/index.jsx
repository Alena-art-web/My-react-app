import React from 'react'
import { Typography } from '@mui/material'

const style = {
    color: '#fff',
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
    textAlign: 'center',
    margin: '35px 0 24px 0',
    fontFamily: 'Open Sans'
}

const Title = ({title}) => 
<Typography component='h1' sx={style}>
    {title}
</Typography>
export default Title
