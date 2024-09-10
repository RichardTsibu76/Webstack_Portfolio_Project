import React, { Component } from 'react'
//import items from './data'
import client from "./contentful"

const RoomContext = React.createContext();

class RoomProvider extends Component {

  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading:true,
    type:'all',
    capacity:1,
    price:0,
    minPrice:0,
    maxPrice:0,
    minSize:0,
    maxSize:0,
    breakfast: false,
    pets: false
  }
  // getData
  getData = async () => {
    try{
      let response = await client.getEntries({
        content_type: "luxuryRoom"
      })
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading:false,
        price:maxPrice,
        maxPrice,
        maxSize
      })
    } catch (error) {
      console.log(error)
    }
  }
  componentDidMount() {
   this.getData()
  }

  // data formating
  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id
      let images = item.fields.images.map(image => image.fields.file.url)

      let room = {...item.fields, images, id};
      return room;

    });
    return tempItems;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  }
}