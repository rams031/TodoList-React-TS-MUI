import React from 'react';
import { Container, Box } from '@mui/material';

import Sidebar from './Sidebar/Sidebar';
import MainContext from './MainContent/MainContext';

const TodoList = () => {
    return (
        <>
            <Container fixed>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#ffffff',
                    height: 'auto',
                    minHeight: '90vh',
                    my: '20px',
                    borderRadius: '3px',
                    boxShadow: 3
                }}>
                    {/* Side Bar */}
                    <Sidebar />

                    {/* Main Content */}
                    <MainContext />
                </Box>
            </Container>
        </>
    )
}

export default TodoList;
