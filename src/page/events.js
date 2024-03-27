import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from "axios"
import image1 from '../media/oregonlogo.webp'
import date from '../script/dateconverter'


const api_endpoint = "https://api.start.gg/gql/alpha"
const query = `
query User($id:ID, $id2:ID, $id3:ID){
  everest: user(id: $id){
    id
    tournaments(query:{
      page: 1
      perPage: 10
      filter: {
        upcoming: true
        tournamentView: "admin"
      }
    }){
      pageInfo{
        total
      }
      
      nodes{
        id
        name
        venueAddress
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
        venueAddress
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
  brewcifer: user(id: $id3){
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
        venueAddress
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
  "Authorization": "Bearer 98f4fbf4b221cb9f0f8ff24b34f3ccb5"
}

const req =
{
  "query": query,
  "operationName": "User",
  "variables": { "id": "166057", "id2": "1015462", "id3": "2022247" }
}


export default function Events() {
  const [eventsByTO] = useState([]);
  const [resp, setResp] = useState()
  const [cards, setCards] = useState([])

  useEffect(() => {
    axios.post(api_endpoint, req,
      {
        headers: headersReq
      }).then(res => {
        setResp(res.data);
        if (cards.length === 1) {
          setCards([])
        }
      })
  });


  if (resp === undefined) {
    cards.push(
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2>LOADING...</h2>
      </div>)
  } else if (cards.length === 0) {
    for (var val in resp.data) {
      for (var elm in resp.data[val].tournaments.nodes) {
        eventsByTO.push(resp.data[val].tournaments.nodes[elm])
      }
    }
    var tournaments = []
    eventsByTO.forEach((val, idx, arr) => {
      var hasUser = false
      tournaments.forEach(element => {
        if (element.id === val.id) {
          hasUser = true
        }
      });
      if (!hasUser && (val.startAt * 1000) > new Date().getTime()) {
        tournaments.push(val)
      }
    }
    )
    tournaments.sort((a, b) => a.startAt > b.startAt ? 1 : -1)
    for (let idx = 0; idx < 8; idx++) {
      const element = tournaments[idx];
      if (element) {
        cards.push(
          <div className="fade-in">
            <a href={'https://start.gg/' + (element && element.url)} target='_blank' rel="noreferrer">
              <Card style={{ maxWidth: '750px' }} className='mt-3 custom-card'>
                <Card.Body>
                  <Row>
                    <Col xs={12} md={3} className="mb-3 mb-md-0">
                      {element && element.images.length === 1 ? (
                        <Card.Img src={element.images[0].url} className='img-fluid' alt='Card image' style={{ maxWidth: '250px' }} />
                      ) : (
                        <Card.Img src={image1} className='img-fluid' alt='Card image' style={{ maxWidth: '250px' }} />
                      )}
                    </Col>
                    <Col xs={12} md={9}>
                      <div>
                        <Card.Title className='d-md-flex'>{element.name}</Card.Title>
                        <Card.Text className='d-md-flex'><li class="brand1 people" />Host: {element.owner.player.gamerTag}</Card.Text>
                        <Card.Text className='d-md-flex'><li class="brand1 location" />{element.venueAddress}</Card.Text>
                        <Card.Text className='d-md-flex'><li class="brand1 calendar" />{date(element.startAt * 1000)}</Card.Text>

                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </a>
          </div>
        )
      }
    }
  }
  return (
    <>
      <Container>

        <div className='mt-5 pt-1 mb-5'>
          <h1 className='text-color mt-4'>Upcoming Events</h1>
          {cards}
        </div>
      </Container>
    </>
  );
}
