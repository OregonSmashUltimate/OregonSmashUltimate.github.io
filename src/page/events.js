import React, { useEffect, useState } from 'react';
import axios from "axios"

import Aos from 'aos';
import { Card, CardGroup } from 'react-bootstrap';

const api_endpoint = "https://api.start.gg/gql/alpha"
const query = `
query User($id:ID, $id2:ID){
  everest: user(id: $id){
    id
    tournaments(query:{
      page: 1
      perPage: 10
      filter: {
        upcoming: true
        past: true
        tournamentView: "admin"
      }
    }){
      pageInfo{
        total
      }
      
      nodes{
        id
        name
        hasOfflineEvents
        startAt
        createdAt
        url
        owner{
          player{
            gamerTag
          }
        }
        images(type: "profile"){
          id
          type
          url
        }
      }
    }
  }
  wulfric: user(id: $id2){
    id
    tournaments(query:{
      page: 1
      perPage: 10
      filter: {
        upcoming: true
        past: true
        tournamentView: "admin"
      }
    }){
      pageInfo{
        total
      }
      
      nodes{
        id
        name
        hasOfflineEvents
        startAt
        createdAt
        url
        owner{
          player{
            gamerTag
          }
        }
        images(type: "profile"){
          id
          type
          url
        }
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
  "operationName": "User",
  "variables": { "id": "166057", "id2": "1015462"}
}

export default function Events(){
  const [users, setUsers] = useState([]);
  const [resp, setResp] = useState()
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.post(api_endpoint, req,
      {
        headers : headersReq
      }).then(res => {
        console.log(res)
        setResp(res.data);
        if(cards.length == 1){
          setCards([])
        }
      })
  }, []);

  if(resp === undefined){
    console.log('Loading...');
    cards.push(<Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>Loading available tournaments...</Card.Title>
    </Card.Body>
  </Card>)
  }  else if(cards.length == 0) {
    for(var val in resp.data){
      console.log('user found');
      for(var elm in resp.data[val].tournaments.nodes){
        console.log(elm)
        users.push(resp.data[val].tournaments.nodes[elm])
      }
    }
    users.sort((a,b) => a.startAt < b.startAt ? 1 : -1)
    console.log(users)
    for (let idx = 0; idx < 8; idx++) {
      const element = users[idx];
        cards.push(<Card>
        <Card.Body>
          <Card.Title>{element.name}</Card.Title>
          <Card.Text>
            {element.name}
          </Card.Text>
        </Card.Body>
      </Card>
      )
    }
  }
  return(
    <CardGroup>
      {cards}
    </CardGroup>
  );
}
//for embedded maps do to share in Google Maps
