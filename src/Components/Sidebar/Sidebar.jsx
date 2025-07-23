import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category === 0?"active" :""}`} onClick={() => setCategory(0)}>
          <img src={home} alt="" /><p className='para'>Home</p>
        </div>
        <div className={`side-link ${category === 20?"active" :""}`}onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" /><p className='para'>Gaming</p>
        </div>
        <div className={`side-link ${category === 2?"active" :""}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" /><p className='para'>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17?"active" :""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" /><p className='para'>Sports</p>
        </div>
       <div className={`side-link ${category === 24?"active" :""}`}  onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" /><p className='para'>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28?"active" :""}`}  onClick={()=>setCategory(28)}>
          <img src={tech} alt="" /><p className='para'>Technology</p>
        </div>
        <div className={`side-link ${category === 10?"active" :""}`}  onClick={()=>setCategory(10)}>
          <img src={music} alt="" /><p className='para'>Music</p>
        </div>
        <div className={`side-link ${category === 22?"active" :""}`}  onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" /><p className='para'>Blogs</p>
        </div>
        <div className={`side-link ${category === 25?"active" :""}`}  onClick={()=>setCategory(25)}>
          <img src={news} alt="" /><p className='para'>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="" /> <p className='para'>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="" /> <p className='para'>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="" /> <p className='para'>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="" /> <p className='para'>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="" /> <p className='para'>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
