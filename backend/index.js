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

app.listen('3081', () => console.log('Listening on port 3081'))

app.post('/', async (request, response) => {
  const { message, dialect } = request.body

  try {
    const AIResponse = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `translate this to ${dialect} (don't write anything else but trnslation): ${message}`,
        },
      ],
      temperature: 0,
    })
    const data = AIResponse.data.choices[0].message.content
    return response.send({ data })
  } catch (error) {
    console.log(error)
    response.send(error).status(400)
  }
})
