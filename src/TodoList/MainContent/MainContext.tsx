import { FormEvent, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    FormControl,
    TextField,
    Card,
    CardContent,
    CardActions,
    Grid,
    IconButton,
    Grow,
    Snackbar,
    Alert
} from '@mui/material';
import { deleteIcon } from '../../assets/icon';

function MainContext() {
    // Types
    interface todoTitleInputData {
        todoTitle: string;
    }

    interface todoListData {
        todoTitle: string;
        todoDescription: string;
    }

    // Local State3
    const [todoTitle, setTodoTitle] = useState<todoTitleInputData | String>("");
    const [todoList, setTodoList] = useState<todoListData[] | {} | any>([]);
    const [alertMessage, setAlertMessage] = useState<boolean>(false);

    // Form Object Value
    // const formValue: todoTitleInputData = { todoTitle: "" };

    // Remove Todo from Todo List
    const removeTodo = (index: number): any => {
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        return setTodoList(newTodoList);
    }

    const todoListDiplay = (item: todoListData, index: number): any => {
        return (
            <Grid item xs={12} md={6}>
                <Grow in={todoList.length > 0}>
                    <Box
                        key={index}
                        style={{ transformOrigin: '0 0 0' }}
                    >
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent
                                sx={{
                                    bgcolor: '#eeeeee'
                                }}
                            >
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'top',
                                }}
                                >
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: 30,
                                                fontWeight: 600,
                                                textTransform: "capitalize"
                                            }}
                                            color='primary'
                                            variant="h1"
                                            paragraph={true}
                                            noWrap={true}
                                        >
                                            {item.todoTitle}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <IconButton
                                            color="primary"
                                            aria-label="delete"
                                            onClick={() => removeTodo(index)}
                                        >
                                            {deleteIcon}
                                        </IconButton>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardContent>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: 'row',
                                }}>
                                    <Box sx={{
                                        flex: 1,
                                        pr: 1
                                    }}>
                                        <TextField
                                            fullWidth={true}
                                            id="outlined-multiline-flexible"
                                            label="Todo Description"
                                            size="small"
                                            multiline
                                            maxRows={4}
                                        />
                                    </Box>
                                    <Box>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                        >
                                            <Box>
                                                ADD
                                            </Box>
                                        </Button>
                                    </Box>
                                </Box>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    size="small"
                                >
                                    {/* <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >

                                    </Box> */}
                                    <Box>
                                        Done
                                    </Box>
                                    {/* <Box>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={11} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </Box> */}
                                </Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Grow>
            </Grid>
        )
    }

    const addNewTodoListAction = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (typeof todoTitle === "string" && todoTitle !== "") {
            const list: todoListData[] = [...todoList, { todoTitle: todoTitle, todoDescription: "" }];
            setTodoList(list);
            return setTodoTitle("");
        }

        return setAlertMessage(true);
    }

    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                flexGrow: "1",
                borderRadius: "2px",
                p: "10px",
                spacing: "5px",
                m: 2
            }}>
                <Box sx={{ py: 2, boxShadow: 0 }}>
                    <Typography
                        color='primary'
                        variant="h5"
                        fontWeight="fontWeightBold"
                        align="left"

                    >
                        Todo List Application
                    </Typography>
                </Box>
                <Box>
                    <form onSubmit={addNewTodoListAction}>
                        <Box sx={{ display: "flex", flexDirection: 'row', boxShadow: 0 }}>
                            <Box sx={{ width: "100%" }}>
                                <FormControl fullWidth >
                                    <TextField
                                        fullWidth={true}
                                        name="todoTitle"
                                        label="Todo Name exp: Buy Milk, Buy Eggs"
                                        value={todoTitle}
                                        onChange={(e) => setTodoTitle(e.target.value)}
                                    />
                                </FormControl>
                            </Box>
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignContent: 'center',
                                width: "30%",
                                pl: 1
                            }}>
                                <br />
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    size="medium"
                                    sx={{
                                        width: "100%",
                                    }}
                                >
                                    <Box sx={{ pr: 1 }}>
                                        Add New Todo
                                    </Box>
                                    <Box>
                                        <svg width={15} height={15} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </Box>
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
                <Box sx={{ py: 1, boxShadow: 0 }}>
                    <Box>
                        <Grid container spacing={2}>
                            {todoList.length > 0 && todoList.map(todoListDiplay)}
                        </Grid>
                    </Box>
                </Box>
                <Snackbar
                    open={alertMessage}
                    autoHideDuration={6000}
                >
                    <Alert severity="error">Make Sure To Fill Out The Field!</Alert>
                </Snackbar>
            </Box>
        </>
    )
}

export default MainContext