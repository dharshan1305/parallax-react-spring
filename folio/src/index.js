import React, { useState, Component } from 'react'
import ReactDOM from 'react-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {useSprings, animated, interpolate} from 'react-spring'
import { useGesture } from 'react-use-gesture'
import { ParentSize } from '@vx/responsive'
import Tree from './Tree'
import data from './data'


class App extends Component {
  render() {
    
    return (
   
    <Parallax pages={3} vertical ref={ref => (this.parallax = ref)}>
      <ParallaxLayer 
      offset={0} 
      speed={0.5} 
      factor={4} 
      style={{  
        backgroundImage: `url("https://images.wallpaperscraft.com/image/stars_starry_sky_night_117616_1280x1024.jpg") ` ,
         backgroundSize: 'contain',
         backgroundPosition:'center',
         backgroundRepeat: 'True'
         }}>
           
        <span onClick={() => this.parallax.scrollTo(1)}style={{color: '#ffffff'}}>Layers can contain anything</span>
      </ParallaxLayer>

      <ParallaxLayer 
      offset={0} 
      speed={0.2}  
      style={{ backgroundImage: `url("https://images.wallpaperscraft.com/image/astronaut_spacesuit_reflection_144426_1280x1024.jpg")`,
      opacity:0.7,
      backgroundPosition: 'center center',
      backgroundSize:'cover' }}>
      </ParallaxLayer>

      <ParallaxLayer 
      offset={2} 
      speed={0.2}  
      style={{ backgroundImage: `url("https://images.wallpaperscraft.com/image/man_hoody_hood_graphics_57295_1280x1024.jpg")`,
      opacity:0.7,
      backgroundPosition: 'center center',
      backgroundSize:'cover' }}>
      </ParallaxLayer>

      <ParallaxLayer 
      offset={1} 
      speed={0.2}  
      style={{ backgroundImage: `url("https://images.wallpaperscraft.com/image/girl_photographer_art_118146_1920x1080.jpg")`,
      opacity:0.5,
      backgroundPosition: 'center center',
      backgroundSize:'cover' }}>
      </ParallaxLayer>
      
</Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
