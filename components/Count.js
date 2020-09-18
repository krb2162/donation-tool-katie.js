import React, { useState} from "react";
import { Box, Card, Image, Heading, Text, Button} from "rebass";
import { Label, Input, Select } from "@rebass/forms";


function Count(props) {

	const [giftCardDonateTo, setGiftCardDonateTo] = useState(1);
	const giftCardDonateToChange = (event) => {
    	const selection = event.target.value;
    	setGiftCardDonateTo(selection);
  	};
  	const [giftCardCode, setGiftCardCode] = useState("gift card code NAN");
  	const giftCardCodeChange = (event) => setGiftCardCode(event.target.value);

  	const [giftCardStore, setGiftCardStore] = useState("gift card store NAN");
  	const giftCardStoreChange = (event) => setGiftCardStore(event.target.value);
  

  return (
  
    <Box width={350}>
      <Card id = "donate">
        <Box px={2}>
          <Heading align="center" as="h1">{props.heading}</Heading>
          
          store: 
          <Select
            id="user"
            name="user"
            defaultValue={giftCardStore}
            onChange={(event) => giftCardStoreChange(event)}
          	>
            <option value={1}> Amazon </option>
            <option value={2}> Walmart </option>
            <option value={3}> itunes </option>
            <option value={4}> Target </option>

          </Select>

          gift card code: <Input onChange={(event) => giftCardCodeChange(event)} id="gift_card_code" name="gift_card_code" />

          Donate to: 
          <Select
            id="user"
            name="user"
            defaultValue={giftCardDonateTo}
            onChange={(event) => giftCardDonateToChange(event)}
          >
            <option value={1}> Indigenous Groups </option>
            <option value={2}> BLM </option>
            <option value={3}> Abroad </option>
          </Select>
          <Button variant='outline' mr={2} >Donate</Button>
          <div> Donate to Store: {giftCardStore} </div>
          <div> Donate with code: {giftCardCode} </div>
          <div> Donate to Group: {giftCardDonateTo} </div>
          


          
        </Box>
      </Card>
    </Box>

  );
}

export default Count;