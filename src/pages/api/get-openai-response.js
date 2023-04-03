const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
})
const openai = new OpenAIApi(configuration)

const handler = async (request, response) => {
  const AIresponse = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `translate this to ${request.query.dialect} (don't write anything else but trnslation): ${request.query.inputText}`,
      },
    ],
    temperature: 0,
  })

  response.status(200).json(AIresponse.data)
}

export default handler
