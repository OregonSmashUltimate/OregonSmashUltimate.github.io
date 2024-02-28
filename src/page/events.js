import React, { useEffect } from 'react';
import axios from "axios"

import Aos from 'aos';
import { Card } from 'react-bootstrap';

const api_endpoint = "https://api.start.gg/gql/alpha"
const query = `
query TournamentQuery() {
  user(id: 166057){
    id
    tournaments(query:{
      page: 1
      perPage: 10
    }){
      pageInfo{
        total
      }
      nodes{
        id
      }
    }
  }
}
`
const headersReq = {
  "Content-Type": "application/json",
  "Authorization":"Bearer 98f4fbf4b221cb9f0f8ff24b34f3ccb5"
}

const req = 
{
  "query": query,
  "operationName": "TournamentQuery"
}

export default function Events(){
  console.log('Sending post req')
  var resp
  axios.post(api_endpoint, req,
    {
      headers : headersReq
    }).then(res => {
      console.log(res)
      resp = res
    })
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
//for embedded maps do to share in Google Maps
