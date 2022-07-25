import React from 'react'
import { todoListLogo } from '../../assets/img'
import { Box, Paper } from '@mui/material';

const Sidebar = () => {
    return (
        <>
            <Paper sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
                width: "10%",
                bgcolor: '#ffffff',
                height: 0,
                boxShadow: 1
            }}>
                <Box sx={{ display: "flex", bgcolor: '#ffffff' }}>
                    <Box>
                        <img src={todoListLogo} alt="TodoList Logo" width={100} height={100} />
                    </Box>
                </Box>
            </Paper>
        </>
    )
}

export default Sidebar