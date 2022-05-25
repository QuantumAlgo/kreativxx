
import React, { useState } from 'react';
import { Grid,AppBar,Toolbar, Tabs, Tab,Typography } from '@mui/material'
const Navbar = ({links})  => {
  const [value,setvalue] = useState();
  return (
    <div>
        <AppBar color='inherit'>
          <Toolbar>
            <Grid container>
                <Grid item xs = {3}>
                  <Typography variant = 'h4' >CreativeStudio</Typography>
                </Grid>
                  <Grid item xs = {6} >
                      <Tabs indicatorColor='secondary' textColor = 'inherit'  value = {value} onChange={(e,val) => setvalue(val)}>
                      {/* {Links.map((Link,index)=>(
                        <Tab key = {index} label = {Link}  />
                      ))} */}
                        <Tab label='Home'/>
                        <Tab label='About'/>
                        <Tab label='Industries'/>
                        <Tab label='Portfolio'/>
                        <Tab label='Services'/>
                        <Tab label='Blog'/>
                    </Tabs> 
                  </Grid>
            </Grid>
          </Toolbar>
        </AppBar>  
    </div>
  )
}

export default Navbar;

            