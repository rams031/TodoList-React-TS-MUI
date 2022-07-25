import React from 'react'
import { todoListLogo } from '../../assets/img'
import { Box } from '@mui/material';

const Sidebar = () => {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                alignItems: 'center',
                width: "10%",
                bgcolor: '#ffffff',
                boxShadow: 1
            }}>
                <Box sx={{ display: "flex", bgcolor: '#ffffff' }}>
                    <Box sx={{ borderRadius: '50%' }}>
                        <img src={todoListLogo} alt="TodoList Logo" width={100} height={100} />
                    </Box>
                </Box>
                {/* <Box sx={{ display: "flex", bgcolor: '#ffffff' }}>
                <Button variant="outlined">
                    Add New
                </Button>
            </Box> */}
            </Box>
        </>
    )
}

export default Sidebar