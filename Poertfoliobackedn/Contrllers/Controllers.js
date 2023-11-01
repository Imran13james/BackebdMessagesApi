const EmailModel = require('../Model/Model')

const sendMail = async (req, resp) => {
    const { name, email, message } = req.body
    if (!name || !email || !message) {
        return resp.status(404).json({ success: false, Message: "i am very glad if you enter the email , message and name " })
    }
    try {
        const UserMessage = await EmailModel.create({
            name,
            email,
            message
        })
        if (UserMessage) {
            console.log({ message: `${name},${email}and ${message}`, })
            return resp.status(201).json({ message: `Thank you so much ${name} and your Email is${email}` })
        }
    } catch (error) {
        return resp.status(404).json(`Getting error in send Email Try after sometime`)
    }
}
module.exports = sendMail