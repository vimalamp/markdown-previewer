
import React, {useState} from 'react';
import marked from 'marked';
import 'react-bulma-components/dist/react-bulma-components.min.css';

const App = () => {
  const placeholder = `
  #try it now!
  <p></p><br />
  <h1>Welcome to my React Markdown Previewer App!</h1>
  <h2>Here you can see how all the HTML tags make your page look purrrty</h2>
  <div>Say, the <code>code</code> will look like it is a code indeed:</div>
  <code> Look y'all: I'm a piece of code!</code>
  <div><b>You can convert</b>
  <li>headers</li>
  <li>links</li>
  <li>images</li>
  <li>forms and many more</li>
  into the end product without any effort! How awesome is that?</div>
  <img src="https://images.freeimages.com/images/large-previews/443/php-code-1242330.jpg" height="200" width="200"/>
  <div><a href="https://www.goodreads.com/quotes/tag/coding">This is the list</a> of what cool people have to say about coding, and here's a small teaser:</div>
  <blockquote>“Give a man a program, frustrate him for a day.
  Teach a man to program, frustrate him for a lifetime.”
  ― Muhammad Waseem</blockquote>
  `;
  const [input, setInput] = useState([placeholder]);
  return (
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-parent">
          <div class="tile is-child box">
            <div class="title is-3">Editor</div>
            <textarea
                id="editor"
                onChange={event => setInput(event.target.value)}
                >{placeholder}
            </textarea>
          </div>
        </div>
        <div class="tile is-vertical is-parent">
          <div class="tile is-child box">
            <div class="title is-3">Previewer</div>
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(input.toString())}}/>
          </div>
        </div>
      </div> 
    </div>
  )

}

export default App;