// import { mongooseConnect } from '@/lib/mongoose';
// import SupportRequest from '@/models/SupportRequest';
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   await mongooseConnect();

//   if (req.method === 'POST') {
//     try {
//       // Save message to the database
//       const supportRequest = await SupportRequest.create(req.body);

//       // Configure Nodemailer transporter
//       const transporter = nodemailer.createTransport({
//         host: 'smtp.gmail.com',  
//         port: 587, // use 465 for secure
//         auth: {
//           user: 'autodilyobchod@gmail.com',
//           pass: process.env.EMAIL_PASSWORD,   
//         },
//         secure: false, // true if port is 465
//         logger: true,
//       });

//       // Send email
//       await transporter.sendMail({
//         from: `"🚗 AUTO-DILY zpráva od klienta : ${req.body.name}" <autodilyobchod@gmail.com>`,
//         to: 'tomek28611@gmail.com ',
//         // autodilykr@gmail.com, 728445566@seznam.cz',
//         subject: `Nový dotaz od zákazníka na dil: ${req.body.title}`,
//         html: `
//     <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; border-radius: 8px;">
//       <div style="text-align: center;">
//         <img src="https://moto-rental.s3.amazonaws.com/1730277855197.png" alt="Logo Auto-Dily-Express" style="width: 150px; margin-bottom: 20px;">
//         <h1 style="color: #333;">Máte nový požadavek na díl Auto-Dily-Express</h1>
//       </div>
//       <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;"><strong>Jméno:</strong> ${req.body.name}</td>
//         </tr>
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;"><strong>Email:</strong> ${req.body.email}</td>
//         </tr>
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;"><strong>Telefon:</strong> ${req.body.phone || 'Neuvedeno'}</td>
//         </tr>
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;"><strong>Název dílu:</strong> ${req.body.title || 'Neuvedeno'}</td>
//         </tr>
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;"><strong>Číslo dílu:</strong> ${req.body.titleNr || 'Neuvedeno'}</td>
//         </tr>
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;"><strong>VIN:</strong> ${req.body.vin || 'Neuvedeno'}</td>
//         </tr>
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;"><strong>Zpráva:</strong></td>
//         </tr>
//         <tr style="background-color: #fff; border: 1px solid #ddd;">
//           <td style="padding: 10px; text-align: center;">${req.body.message || 'Neuvedeno'}</td>
//         </tr>
//       </table>
//     </div>
//   `,
//       });

//       res.status(201).json({ success: true, data: supportRequest });
//     } catch (error) {
//       console.error('Error creating support request:', error);
//       res.status(400).json({ success: false, message: 'Error creating support request', error: error.message });
//     }
//   } else {
//     res.status(405).json({ success: false, message: 'Method Not Allowed' });
//   }
// }

import { mongooseConnect } from '@/lib/mongoose';
import SupportRequest from '@/models/SupportRequest';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  await mongooseConnect();

  if (req.method === 'POST') {
    try {
      // Save message to the database
      const supportRequest = await SupportRequest.create(req.body);

      // Configure Nodemailer transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',  
        port: 587, // use 465 for secure
        auth: {
          user: 'autodilyobchod@gmail.com',
          pass: process.env.EMAIL_PASSWORD,   
        },
        secure: false, // true if port is 465
        logger: true,
      });

      // Send email to admin
      await transporter.sendMail({
        from: `"🚗 AUTO-DILY zpráva od klienta : ${req.body.name}" <autodilyobchod@gmail.com>`,
        to: 'tomek28611@gmail.com, autodilykr@gmail.com',
        subject: `Nový dotaz od zákazníka na díl: ${req.body.title}`,
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; border-radius: 18px;">
            <div style="text-align: center;">
              <img src="https://moto-rental.s3.amazonaws.com/1730277855197.png" alt="Logo Auto-Dily-Express" style="width: 150px; margin-bottom: 20px;">
              <h1 style="color: #333;">Máte nový požadavek na díl Auto-Dily-Express</h1>
            </div>
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Jméno:</strong> ${req.body.name}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Email:</strong> ${req.body.email}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Telefon:</strong> ${req.body.phone || 'Neuvedeno'}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Název dílu:</strong> ${req.body.title || 'Neuvedeno'}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Číslo dílu:</strong> ${req.body.titleNr || 'Neuvedeno'}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>VIN:</strong> ${req.body.vin || 'Neuvedeno'}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Zpráva:</strong></td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;">${req.body.message || 'Neuvedeno'}</td>
              </tr>
            </table>
          </div>
        `,
      });

      // Send confirmation email to client
      const clientEmail = req.body.email; 
      await transporter.sendMail({
        from: '"🚗 AUTO-DILY" <autodilyobchod@gmail.com>', 
        to: clientEmail, 
        subject: 'Potvrzení o přijetí zprávy', 
        html: `
          <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; border-radius: 18px;">
           <div style="text-align: center;">
              <img src="https://moto-rental.s3.amazonaws.com/1730277855197.png" alt="Logo Auto-Dily-Express" style="width: 150px; margin-bottom: 20px;">
              <h1 style="color: #333;">Máte nový požadavek na díl Auto-Dily-Express</h1>
            </div>
            <h1 style="color: #333; text-align: center;">Děkujeme za vaši zprávu!</h1>
            <p style="text-align: center;">Vaši zprávu jsme obdrželi a budeme se jí co nejdříve zabývat.</p>
            <p style="text-align: center;">Zde je shrnutí vaší zprávy:</p>
            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Jméno:</strong> ${req.body.name}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Email:</strong> ${req.body.email}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Telefon:</strong> ${req.body.phone || 'Neuvedeno'}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Název dílu:</strong> ${req.body.title || 'Neuvedeno'}</td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;"><strong>Zpráva:</strong></td>
              </tr>
              <tr style="background-color: #fff; border: 1px solid #ddd;">
                <td style="padding: 10px; text-align: center;">${req.body.message || 'Neuvedeno'}</td>
              </tr>
           
             <div style="text-align: center; margin-top: 20px;">
              <a href="https://www.autodilyexpress.cz" style="display: inline-block; background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                Navštivte naše webové stránky
              </a>
            </div>
            <p style="text-align: center;">Děkujeme, že jste nás kontaktovali!</p>
             </table>
          </div>
          </div>
        `,
      });

      res.status(201).json({ success: true, data: supportRequest });
    } catch (error) {
      console.error('Error creating support request:', error);
      res.status(400).json({ success: false, message: 'Error creating support request', error: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
