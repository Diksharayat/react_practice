import { Add, Close, CloseSharp, Delete, DeleteTwoTone, Home, LinkedCamera, Login, Menu, Restore } from "@mui/icons-material";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Alert, AlertTitle, AppBar, Autocomplete, Avatar, Backdrop, Badge, Box, Button,BottomNavigation,BottomNavigationAction,Breadcrumbs,Link, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Chip, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Drawer, Fab, Grid, IconButton, LinearProgress, List,MenuItem,Pagination,SpeedDial,SpeedDialIcon,Stepper,StepLabel,Step,SpeedDialAction, ListItem, ListItemButton, ListItemText, Paper, Radio, Rating, Select, Skeleton, Slider, Snackbar, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import MyMenu from '@mui/material/Menu'
import {ContentCopy} from '@mui/icons-material'
import Navbar from "./navbar";

export default function Mui() {

        const top100Films = [
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 },
                { label: "Schindler's List", year: 1993 },
                { label: 'Pulp Fiction', year: 1994 },
        ]


        const [o1, seto1] = useState(false);
        function opn1() {
                seto1(!o1)
        }

        const [o2, seto2] = useState(false);
        function opn2() {
                seto2(!o2)
        }


        const [o3, seto3] = useState(false);
        function opn3() {
                seto3(!o3)
        }

        return (
                <>
                        <Navbar />

                        <AppBar>
                                <Toolbar>
                                        <IconButton color="inherit">
                                                <Menu onClick={opn3} />
                                        </IconButton>
                                        <Typography variant="button" style={{ flexGrow: 1 }}>Logo</Typography>

                                        <Tooltip title="login" arrow placement="bottom-end">
                                                <Login />
                                        </Tooltip>
                                </Toolbar>
                        </AppBar>

                        <Drawer open={o3} onClose={opn3} >
                                <Box width={200}>
                                        <List>
                                                <ListItem>menu 1</ListItem>
                                                <Divider />
                                                <ListItem>menu 1</ListItem>
                                                <Divider />
                                                <ListItem>menu 1</ListItem>
                                                <Divider />
                                                <ListItem>menu 1</ListItem>
                                                <Divider />
                                        </List>
                                </Box>
                        </Drawer>

                        <Paper style={{ height: 100 ,width:100 }} elevation={20}>
                                helloksjck
                        </Paper>


                        <Card  sx={{height:{lg:400,md:350,sm:200,xs:100},width:{lg:500,md:400,sm:200,xs:100},border:{lg:'2px solid red',md:'2px dotted grey',sm:'2px solid pink',xs:'2px solid black'}}}>
                                <CardHeader title="title" subheader="sub title"/>
                                <CardMedia image="https://mui.com/static/images/cards/contemplative-reptile.jpg" height={200} component='img' />
                                <CardContent>
                                        hello , this is card content
                                </CardContent>
                                <CardActions>
                                        <LinkedCamera/>
                                </CardActions>
                        </Card>

                        <Button>click</Button>
                        <Button variant="outlined">click</Button>
                        <Button variant="contained">click</Button>


                        <Button color="secondary" variant="contained">click</Button>
                        <Button color="error" variant="contained">click</Button>
                        <Button color="warning" variant="contained">click</Button>
                        <Button color="info" variant="contained">click</Button>
                        <Button color="success" variant="contained">click</Button>


                        <Button color="success" size="small" variant="contained">click</Button>
                        <Button color="success" size="large" variant="contained" endIcon={<Home />}>click</Button>
                        <Button color="success" size="medium" variant="contained" startIcon={<Delete />}>click</Button>

                        <ButtonGroup>
                                <Button color="warning" variant="contained">click</Button>
                                <Button color="info" variant="contained">click</Button>
                                <Button color="success" variant="contained">click</Button>
                        </ButtonGroup>


                        <Autocomplete options={top100Films} renderInput={(params) => <TextField {...params} label="Movies" />} />

                        <Checkbox />
                        <Radio />

                        <Fab color="primary">
                                <Delete />
                        </Fab>

                        <Rating />

                        <Select>
                                <Typography>hello</Typography>
                                <Typography>hello</Typography>
                                <Typography>hello</Typography>
                                <i>kjhg</i>
                        </Select>


                        <Typography variant="h1">hello</Typography>
                        <Typography variant="h2">hello</Typography>
                        <Typography variant="h3">hello</Typography>
                        <Typography variant="h4">hello</Typography>
                        <Typography variant="h5">hello</Typography>
                        <Typography variant="h6">hello</Typography>
                        <Typography variant="body1">hello</Typography>
                        <Typography variant="body2">hello</Typography>
                        <Typography variant="caption">hello</Typography>


                        <Slider />

                        <Switch />

                        <Avatar src="https://mui.com/static/images/avatar/3.jpg" />

                        <Avatar style={{ background: 'pink' }}>hlkj</Avatar>

                        <Badge badgeContent={1} color="info">
                                <Home />
                        </Badge>

                        <Divider />
                        <br />

                        <Chip label="hello" />

                        <Chip label="hello" color="success" size="small" avatar={<Avatar src="https://mui.com/static/images/avatar/3.jpg" />} />

                        <Login />

                        <List>
                                <ListItem>list item 1</ListItem>
                                <ListItem>list item 2</ListItem>
                                <ListItem>list item 3</ListItem>
                        </List>

                        <List>
                                <ListItem>
                                        <ListItemText>hello</ListItemText>
                                        <ListItemButton><Delete /></ListItemButton>
                                </ListItem>
                        </List>

                        <TableContainer>
                                <Table>
                                        <TableHead>
                                                <TableRow>
                                                        <TableCell>name</TableCell>
                                                        <TableCell>name</TableCell>
                                                        <TableCell>namev</TableCell>
                                                </TableRow>
                                        </TableHead>
                                        <TableBody>
                                                <TableRow>
                                                        <TableCell>riya</TableCell>
                                                        <TableCell>riya</TableCell>
                                                        <TableCell>riya</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                        <TableCell>riya</TableCell>
                                                        <TableCell>riya</TableCell>
                                                        <TableCell>riya</TableCell>
                                                </TableRow>
                                        </TableBody>
                                </Table>
                        </TableContainer>

                        <Tooltip title="deletepoijuh">
                                <DeleteTwoTone />
                        </Tooltip>

                        <CircularProgress />
                        <LinearProgress />

                        <Skeleton height={50} width={50} variant="circular" />
                        <Skeleton height={50} width={80} variant="rectangular" />
                        <br /><br />
                        <Skeleton height={50} width={50} variant="rounded" />

                        <Alert>
                                hello
                        </Alert>
                        <Alert severity="error">
                                <AlertTitle>title</AlertTitle>
                                hello
                        </Alert>
                        <Alert severity="warning">
                                hello
                        </Alert>
                        <Alert severity="info">
                                hello
                        </Alert>

                        <Button variant="contained" onClick={opn1}>backdrop</Button>
                        <Backdrop open={o1} onClick={opn1}>
                                {/* <CircularProgress /> */}
                                <Alert>
                                        hello
                                </Alert>
                        </Backdrop>


                        <Button onClick={opn2}>dialog</Button>
                        <Dialog open={o2} onClose={opn2}>
                                <DialogActions><CloseSharp onClick={opn2} /></DialogActions>
                                <DialogTitle>title</DialogTitle>
                                <DialogContent>hello , this is dialog box</DialogContent>
                        </Dialog>

                        {/* Button */}
                        <Snackbar message="this is snackbar" open={false} />
                        {/* onClose */}

                        <Accordion>
                                <AccordionSummary>
                                        title
                                </AccordionSummary>
                                <AccordionDetails>
                                        content
                                </AccordionDetails>
                                <AccordionActions>
                                        <Close />
                                </AccordionActions>
                        </Accordion>

                        <br/><br/>

                        <Grid container>
                                <Grid xl={3} lg={6} md={10} sm={7} xs={10} style={{border:'2px solid grey'}}>
                                        hello<br/>
                                        hello<br/>
                                        hello<br/>
                                        hello<br/>
                                        hello<br/>
                                </Grid>
                        </Grid>

                        <br/><br/>
                        <Container style={{border:'2px solid red'}} maxWidth={'xl'}>
                                hello
                        </Container>

                        <Container style={{ border: '2px solid red' }} maxWidth={'xl'}>
                                hello
                        </Container>
                        <Container style={{ border: '2px solid red' }} maxWidth={'lg'}>
                                hello
                        </Container>
                        <Container style={{ border: '2px solid red' }} maxWidth={'md'}>
                                hello
                        </Container>
                        <Container style={{ border: '2px solid red' }} maxWidth={'sm'}>
                                hello
                        </Container>
                        <Container style={{ border: '2px solid red' }} maxWidth={'xs'}>
                                hello
                        </Container>

                        <br />
                        <br />
                        <br /> 
                        <BottomNavigation style={{ border: '2px solid grey' }}>
                                {/* <BottomNavigationAction icon={<Restore />} />
                                <BottomNavigationAction icon={<Restore />} />
                                <BottomNavigationAction icon={<Restore />} />
                                <BottomNavigationAction icon={<Restore />} /> */}
                        </BottomNavigation>


                        <br />
                        <br />
                        <br />
                        <Breadcrumbs>
                                <Close />
                                <Close />
                                <Close />
                        </Breadcrumbs>


                        <br />
                        <br />
                        <br />

                        <Link href="">click here</Link>
                        <Link href="" underline="hover">click here</Link>
                        <Link href="" underline="none">click here</Link>
                        <Link href="" underline="always">click here</Link>


                        <MyMenu open={false} anchorOrigin="right ">
                                <MenuItem>menu</MenuItem>
                                <MenuItem>menu</MenuItem>
                                <MenuItem>menu</MenuItem>
                                <MenuItem>menu</MenuItem>
                        </MyMenu>

                        <Pagination count={5} color="secondary" variant="outlined" />

                        <SpeedDial ariaLabel="SpeedDial" icon={<SpeedDialIcon />}>
                                <SpeedDialAction tooltipTitle="copy" arrow icon={<ContentCopy />} />
                                <SpeedDialAction tooltipTitle="copy" arrow icon={<ContentCopy />} />
                                <SpeedDialAction tooltipTitle="copy" arrow icon={<ContentCopy />} />
                                <SpeedDialAction tooltipTitle="copy" arrow icon={<ContentCopy />} />
                        </SpeedDial>


                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <Stepper activeStep={1}>
                                <Step>
                                        <StepLabel>hello</StepLabel>
                                </Step>
                                <Step>
                                        <StepLabel>hello</StepLabel>
                                </Step>
                                <Step>
                                        <StepLabel>hello</StepLabel>
                                </Step>
                        </Stepper>
                </>
        )
}