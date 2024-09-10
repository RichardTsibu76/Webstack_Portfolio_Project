import React from 'react'
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import Loading from "./Loading";

import { RoomConsumer } from '../context';

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {
        (value) => {
          const {loading,sortedRooms,rooms} = value
          if (loading) {
            return <Loading />
          }
          return(
            <div>
              <RoomsFilter rooms={rooms}/>
              <RoomsList rooms={sortedRooms}/>
            </div>
          )
        }
      }
    </RoomConsumer>
  )

}

