const { getTwilioVoice, handleTwilioVoice, handleTwilioVoiceInputs,handlecallStatus} = require('../controllers/TwilioVoice');
const TwilioVoiceRouter = require('express').Router()

TwilioVoiceRouter.get('/', getTwilioVoice)
TwilioVoiceRouter.post('/', handleTwilioVoice)
TwilioVoiceRouter.post('/ivr', handleTwilioVoiceInputs)


module.exports = TwilioVoiceRouter;