import express from 'express'
import cors from 'cors'
import bodyParder from 'body-parser'
import env from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'

const app = express()
env.config()

app.use(cors())
app.use(bodyParder.json())

const configuration = new Configuration({
  organization: 'org-66KdFBKh3Y9tCYrL4EesF7dn',
  apiKey: process.env.API_KEY,
})

const openai = new OpenAIApi(configuration)

app.listen('3081', () => console.log('test'))

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.post('/', async (request, response) => {
  const { message } = request.body

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `translate this to ${dialect} (don't write anything else but trnslation): ${inputText}`,
        },
      ],
      temperature: 0,
    })
    response.json({ message: response.data.choices[0].message.content })
  } catch (error) {
    console.log(error)
    response.send(error).status(400)
  }
})
