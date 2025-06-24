
import nodemailer from 'nodemailer'
const sendMail = async (req, res) => {
    try {

         // Generate a random 4-digit pincode
      const pinCode = Math.floor(1000 + Math.random() * 9000);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "usamariaz@aptechnorth.edu.pk",
                pass: "hnog qlxx ceup tdvp",
            },
        });


        const mailResponse = await transporter.sendMail(
            {
                from: req.body.fromEmail,
                to: req.body.toEmail,
                subject: "Your Verification Code",
                text: `Your 4-digit pincode is:${pinCode}`, // plain‑text body
                html: `<h3>Your 4-digit pincode is: <strong>${pinCode}</strong></h3>`,
            }
        )

        res.send({ message: mailResponse.messageId })

    } catch (error) {
        console.log(error)
        res.send({ errorMessage: error })
    }
}

export default sendMail;