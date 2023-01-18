import React from 'react';
import { Container, Box, Paper } from '@mui/material';

import Sidebar from './Sidebar/Sidebar';
import MainContext from './MainContent/MainContext';
import { todoListLogo } from '../assets/img';

const TodoList = () => {
    return (
        <>
            <Container>
                <Paper sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: '#ffffff',
                    height: '90vh',
                    minHeight: '100vh',
                    overflowY: "scroll",
                    my: '20px',
                    borderRadius: '3px',
                    position: 'relative',
                    boxShadow: 0
                }}>
                    <Paper sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: "10%",
                        bgcolor: '#ffffff',
                        left: 0,
                        top: 0,
                        height: 0,
                        boxShadow: 1
                    }}>
                        <Box sx={{ display: "flex", bgcolor: '#ffffff' }}>
                            <Box>
                                <img src={todoListLogo} alt="TodoList Logo" width={100} height={100} />
                            </Box> 
                        </Box>
                    </Paper>
                    <Paper sx={{
                        display: "flex",
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: "10%",
                        bgcolor: '#ffffff',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: 0,
                        boxShadow: 1
                    }}>
                        <Box sx={{ display: "flex", bgcolor: '#ffffff', position: "fixed", zIndex: 10 }}>
                            <Box>
                                <img src={todoListLogo} alt="TodoList Logo" width={100} height={100} />
                            </Box>
                        </Box>
                    </Paper>
                    {/* Side Bar */}
                    {/* <Sidebar /> */}
                    <div>test</div>
                    {/* Main Content */}
                    <MainContext />
                </Paper>
            </Container>
        </>
    )
}

export default TodoList;
