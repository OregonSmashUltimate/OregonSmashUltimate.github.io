import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from "axios"
import image1 from '../media/oregonlogo.webp'
import Aos from 'aos';



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
        if(cards.length === 1){
          setCards([])
        }
      })
  }, []);
  

  if(resp === undefined){
    console.log('Loading...');
    cards.push(    
      <div className="d-flex justify-content-center align-items-center vh-100">
       <h2>LOADING...</h2> 
    </div>)
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
      cards.push(
        <div className="fade-in">
          <a href={'https://start.gg/'+element.url} target='_blank'>
          <Card style={{ width: '50rem' }} className='mt-3'>
            <Card.Body>
              <Row className='align-items-center'>
                <Col>
                  {element.images.length === 1 ? (
                    <Card.Img src={element.images[0].url} style={{ width: '100px' }} />
                  ) : (
                    <Card.Img src={image1} style={{ width: '100px' }} />
                  )}
                </Col>
                <Col>
                  <Card.Title>{element.name}</Card.Title>
                </Col>
                <Col>
                  <Card.Text>{element.startAt}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          </a>
        </div>
      )
    }
  }
  return(
    <>
      <Container>
        
        <div className='mt-5 pt-1'>
          <h1>Upcoming Events</h1>
            {cards}
        </div>
      </Container>
    </>
  );
}
//for embedded maps do to share in Google Maps
