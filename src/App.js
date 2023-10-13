import {Component} from 'react'
import './App.css'
class App extends Component{
  state={
    head:true,
    isHead:0,
    isTail:0,
    total:0
  }
  onClickImage=()=>{
    const tossresult=Math.floor(Math.random()*2)
      if(tossresult===0){
        this.setState((prevState)=>({
          head:true,
          isHead:prevState.isHead+1,
          total:prevState.total+1
      }))
      }
      else{
        this.setState((prevState)=>({
          head:false,
          isTail:prevState.isTail+1,
          total:prevState.total+1
        }))
      }
  }
  render(){
    const{head,isHead,isTail,total}=this.state
   
    return(
          <div className="container">
            
          {head?
          <div className="in">
            <h1>Coin Toss Game</h1>
            <h3>Heads (or) Tails</h3>
          <img src="https://assets.ccbp.in/frontend/react-js/heads-img.png" className='imagi' alt="headimage"/>
          <div className="but">
          <button onClick={this.onClickImage} className='b'>Toss Game</button>
          </div><div className='tabs'>
            <p>Total{total}</p>
            <p>Heads{isHead}</p>
            <p>Tails{isTail}</p>
            </div>
            </div>
          :
          <div className="in">
            <h1>Coin Toss Game</h1>
            <h3>Heads (or) Tails</h3>
          <img src="https://assets.ccbp.in/frontend/react-js/tails-img.png"  className='imagi' alt="tailmage"/>
          <div className='but'>
          <button onClick={this.onClickImage} className='b'>Toss Game</button></div>
          <div className='tabs'>
            <p>Total{total}</p>
            <p>Heads{isHead}</p>
            <p>Tails{isTail}</p>
            </div>
            </div>
            }
         </div>
    )

  }
  

}
export default App
