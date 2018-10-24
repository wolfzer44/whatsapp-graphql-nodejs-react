import twilio from 'twilio';

  


export const SMS = async (pin, phoneNumber) => {

    let accountSid = process.env.TWILIO_SID; 
    let authToken = process.env.TWILIO_TOKEN; 
    let client = new twilio(accountSid, authToken);

    const response  = await client.messages.create({
        body: `Your active code is: ${pin}`,
        to: phoneNumber, 
        from: process.env.TWILIO_NUMBER 
    });

    return response;
};