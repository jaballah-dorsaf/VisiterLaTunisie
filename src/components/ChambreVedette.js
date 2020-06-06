import React, { Component } from 'react'
import {RoomContext} from '../context'
import Room from './Room';
import Loading from './Loading';
import Title from './Title';



export default class ChambreVedette extends Component {
    static contextType= RoomContext;

    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
          return <Room key={room.id} room={room} />;
        });
        return (
          <section className="featured-rooms">
            <Title title="Chambres en vedette" />
            <div className="featured-rooms-center">
              {loading ? <Loading /> : rooms}
            </div>
          </section>
        );
      }
    }