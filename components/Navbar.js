import React, {useState} from 'react';
// import Count from "./Count"
import Count from './Count'
import { Label, Input } from "@rebass/forms";

import { Flex, Button, Box, Text } from 'rebass';




function Navbar() {

  return (
    <div className="Navbar">
    <Flex
    	px={2}
    	color='white'
    	bg='black'
   	 	alignItems='center'>
    	<div id = "link" class = "dropdown-menu-button">
    		+
    	</div>
    	<span> Shop with us </span>
    	<span> How we work </span>
    	<span> About us </span>
    	<span> Contact us </span>
        <Button variant='outline' mr={2}>log in</Button>

    </Flex>



      
  

      
    </div>
  );
}

export default Navbar;
