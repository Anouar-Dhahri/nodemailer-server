const nodemailer = require('nodemailer');

const sendMail = async (req, res, next) => {
    try {
        const { name, subjet, email, message } = req.body;

        let testAccount = await nodemailer.createTestAccount();

        // Gmail 
        /*let transporter = nodemailer.createTransport({
            service:'gmail'
            host: "smtp.gmail.email",
            auth: {
                user: 'user@gmail.com', //gmail email
                pass: 'gmailpassword',  //gmail password
            },
        });*/

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        let info = await transporter.sendMail({
            from: name + ' '+ email, // sender address
            to: testAccount.user, // list of receivers
            subject: subjet, // Subject line
            text: message, // plain text body
          });

        res.status(200).json({
            "id":info.messageId,
            "url": nodemailer.getTestMessageUrl(info)
        })

    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { sendMail }