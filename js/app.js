import React from 'react'
import ReactDOM from 'react-dom'
import {ExpenseApp} from './expense-app.js'
import {Switch, BrowserRouter as Router,Route} from 'react-router-dom'
import {FullBlog} from './FullBlog.js'
import decorateComponentWithProps from 'decorate-component-with-props'



var data=[
  {
    "Author":"Dan Brown",
    "Book":"Inferno",
    "Content":"Harvard professor Robert Langdon wakes up in a hospital with a head wound and no memory of the last few days. He last remembers walking on the Harvard campus, but he quickly realizes that he is now in Florence, Italy. Dr. Sienna Brooks, one of the doctors tending to him, reveals that he is suffering from amnesia. When Vayentha, a female assassin, shows up in the hospital, Sienna helps Langdon escape, and they flee to her apartment.After Sienna recounts the details of his admission to the hospital, Robert finds a cylinder with a biohazard sign in his jacket and decides to call the U.S. consulate. He is told that they are searching for him and want his location. Per Sienna's guidance, Robert gives them a location across the street from Sienna's apartment to avoid getting Sienna more involved in his mysterious situation than she already is. Soon, Robert sees Vayentha pull up to the location Robert gave the consulate. At this point, Sienna and Robert believe the U.S. government wants to kill him.Robert decides to open the container and finds a small medieval bone cylinder fitted with a hi-tech projector that displays a modified version of Botticelli's Map of Hell, which is based on Dante's Inferno.",
    "likes":"8",
    "comments":"All the best"
  },
  {
    "Author":"Jeffrey Archer",
    "Book":"Be careful what you wish for",
    "Content":"Be Careful What You Wish For follows the Barrington-Clifton family during the years 1957 to 1964, when Emma Barrington Clifton seeks to take control of her family shipping business and must deal with conspiracies and sabotage,[1] opening with Harry Clifton and his wife Emma rushing to hospital to learn the fate of their son Sebastian, who has been involved in a fatal car accident. When she visits the morgue to identify the body, it turns out Sebastian survives the accident and the dead body is Bruno's. Police investigations and witness testimony revealed that there were three lorries surrounding the car and they were attempting to cause an accident by blocking all paths. Sebastian was the driver, not Bruno, a mistake by the police who assumed that the latter, the car owner was driving.",
  "likes":"9",
    "comments":"good fro reading"
},

  {
    "Author":"Paulo Coelho",
    "Book":"The Alchemist",
    "Content":"The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Romani fortune-teller in a nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.Early into his journey, he meets an old king named Melchizedek or the king of Salem, who tells him to sell his sheep so as to travel to Egypt and introduces the idea of a Personal Legend. Your Personal Legend is what you have always wanted to accomplish. Everyone, when they are young, knows what their Personal Legend is. He adds that when you want something, all the universe conspires in helping you to achieve it. This is the core theme of the book.The Pyramids of GizaAlong the way, the boy meets an Englishman who has come in search of an Alchemist and continues his travels with him. When they reach an oasis, Santiago meets and falls in love with an Arabian girl named Fatima, whom he asks to marry him. She promises to do so only after he completes his journey. He is frustrated by this, but later learns that true love will not stop nor must one sacrifice to it one's personal destiny, since to do so robs it of truth.",
    "likes":"4",
    "comments":"what a book!"
  }
];

class App extends React.Component{

	render(){
		return(
			<Router>
      <div>
				<Route exact path='/' render={()=><ExpenseApp data={data}/>}/>
  			<Route path='/fullblog/:book_id' component={FullBlog}/>
        </div>
			</Router>
			)
	}
}

ReactDOM.render(<App/>, document.getElementById('container'))