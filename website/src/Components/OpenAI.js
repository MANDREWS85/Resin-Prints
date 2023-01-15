import React, { useState } from 'react';
import axios from 'axios';


export default function OpenAI() {
const id="OpenAI"
const [prompt, setPrompt] = useState('');
const [completion, setCompletion] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://api.openai.com/v1/models/MODEL_NAME/completions', {
      prompt: prompt,
      temperature: 0.5
    }, {
      headers: {
        'Authorization': 'Bearer YOUR_API_KEY'
      }
    }).then(response => {
      setCompletion(response.data.choices[0].text);
    }).catch(error => {
      console.error(error);
    });
  }

  
return(
  <div>
    <p>{id}</p>

    <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" value={prompt} onChange={event => setPrompt(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {completion && <p>Completion: {completion}</p>}

    
  </div>
)
  
}