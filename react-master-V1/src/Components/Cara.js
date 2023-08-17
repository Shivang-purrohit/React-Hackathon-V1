import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import './Cara.css'


export default function Cara(props)
{
    var items = [
        {
            
       
            img:"https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg"
        },
        {
           
           
            img:"https://images.thedirect.com/media/article_full/harry-potter-reboot.jpg"
        },
        {
            
               
                
                img:"https://assets-in.bmscdn.com/discovery-catalog/events/et00329481-qwulpftqfe-landscape.jpg"
            },
            {
            
              
                
                img:"https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/The-Hulk.The-Incredible-Hulk.webp"
            }
        
    ]

    return (
        <Carousel className='move' >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className='img_set1'>
           
            <img className='img__set' src={props.item.img} alt='hello'/>
            
            {/* <p>{props.item.description}</p> */}

            {/* <Button className="CheckButton">
                Check it out!
            </Button> */}
        </Paper>
    )
}
