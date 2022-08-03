import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home_container">
          <img 
          className="home_image"
          src="https://wallpaperaccess.com/full/6385958.jpg" alt="" />
          
          <div className="home_row">
            < Product id= "123" title='the lean startup' price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5} />
            < Product 
            id="124"
            title="kenwood kMix Mixer for baking, with 5 ltr glass bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/61hbZI58OOL._SL1500_.jpg"
             />  
          </div>
          <div className="home_row">
          < Product
            id="125"
            title="Samsung 49' Curved LED gaming Monitor"
            price={499.99}
            rating={5}
            image="https://5.imimg.com/data5/RO/BW/MY-9676550/samsung-curved-49-inch-gaming-monitor-28lc49hg90dmuxen-29-500x500.jpg"
          /> 
          < Product
            id="126"
            title="Amazon Echo (3rd gen), smart speaker with Alexa"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61QoZCzMx3L._SL1000_.jpg"
          /> 
          < Product
            id="127"
            title="New apple iPad Pro (4th gen)"
            price={598.99}
            rating={4}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104_GEO_IN_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617922579000"
            /> 
          </div>
          <div className="home_row">
          < Product 
            id="128"
            title="Samsung smart watch"
            price={399.99}
            rating={3}
            image="https://static.toiimg.com/thumb/resizemode-4,msid-68199417,imgsize-200,width-1200/68199417.jpg"
          />
          </div>
        </div>
    </div>
  )
}

export default Home