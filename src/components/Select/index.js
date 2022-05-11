import {Box, MenuItem, FormControl, Select, Typography} from '@mui/material'
import { useState } from 'react'
import './index.scss'


export const array = require("../../assets/bd.json")
export const developers = array.dev
export const status = array.status

export default function BasicSelect({data, title}) {
    const [name, setName] = useState(data[0].label)

    const handleChange = (event) => {
        setName(event.target.value)
    }
    
    return (
        <Box sx={{ minWidth: 220, marginRight: '24px' }}>
            <Typography>{title}</Typography>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    onChange={handleChange}
                    className="select"
                    sx={{ 
                        color: '#B6B4C6', 
                        background: '#242B35', 
                        borderRadius: '7px', 
                        border: '1px solid #3D444E', 
                        height: '40px',
                        fontFamily: 'Open Sans',
                        fontSize: '14px' 
                    }}
                >                                                                                                                                                                                                                 
                    {data.map(i => <MenuItem key={i.id} value={i.value}>{i.label}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
}


