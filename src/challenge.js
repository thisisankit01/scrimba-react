/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
import './App.css';

function Page() {
  return (
    <div>
     <h1>Reasons, why i love react!</h1>
     <ol>
     <li>It's a popular library, so I'll be 
            able to fit in with the cool kids!</li>
     <li>I'm more likely to get a job as a developer
            if I know React</li>
     </ol>
    </div>
  )
}

export default Page