const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 8000;

const credentials = {
<<<<<<< HEAD
  apiKey: "4e8b12db2ace9b867fee1d60c2529135c215c6e97d09e417704702d4e431b425",
  username: "dynos",
=======
  apiKey: "##",
   username: "##",
>>>>>>> 10611baaf0a717fb460f2e8672681c72a6ae0ff9
};

const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

<<<<<<< HEAD
function sendsms(phoneNumber, selectedTimeValue, selectedDayValue, randomNumber) {
  const message = `Your train Booking was successful. Trip on: ${selectedTimeValue}  YOUR TICKET NUMBER IS: ${randomNumber}`;
=======



app.post("/", (req, res) => {
  const {  phoneNumber, text } = req.body;

  console.log("wwwwwww");
  



  if (text === "") {
    console.log(text);

    response = `CON Welcome 
        1. book an appointment
        2. emergency services`;
  } else if (text === "1") {
  
    response = `CON pick a location
        1. Nairobi
        2. Mombasa
        3. Kisumu `;
  } else if (text === "1*1") {
    response = `CON These are the available slots
        1.Monday 10am
        2.Tuesday 11am
        3.Wednesday 12pm
        4.Thursday 1pm
        5.Friday 2pm
        6. Saturday 3pm `;

    
  }
 
else if (text.startsWith("1*1*")) {
  // Extract the selected day and time from the user input
  const selectedSlot = text.split("*")[2];
  const slots = [
    "Monday 10am",
    "Tuesday 11am",
    "Wednesday 12pm",
    "Thursday 1pm",
    "Friday 2pm",
    "Saturday 3pm",
  ];

  // Check if the selected slot number is valid
  const slotIndex = parseInt(selectedSlot) - 1;
  if (slotIndex >= 0 && slotIndex < slots.length) {
    const selectedSlotValue = slots[slotIndex];

    console.log(selectedSlotValue);

    // Call the function to send the SMS with the selected slot information
    sendsms(selectedSlotValue);

    // Provide a response to the user
    response = `END You have selected an appointment for ${selectedSlotValue}. You will receive a confirmation SMS shortly.`;
  } else {
    response = "END Invalid slot selection. Please try again.";
  }
}

function sendsms(selectedSlotValue) {
//   const credentials = {
//     apiKey: "##",
//     username: "##",
//   };
  const AfricasTalking = require("africastalking")(credentials);
  const sms = AfricasTalking.SMS;

 

  const message = `Your appointment has been booked for ${selectedSlotValue}`;
>>>>>>> 10611baaf0a717fb460f2e8672681c72a6ae0ff9

  // Send the SMS
  const options = {
    to: phoneNumber,
    message: message,
  };

  sms
    .send(options)
    .then((response) => {
      console.log("SMS sent successfully:", response);
    })
    .catch((error) => {
      console.error("Error sending SMS:", error);
    });
}

app.post("/ussd", (req, res) => {
  const { phoneNumber, text } = req.body;

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let response;
  if (text === "") {
    response = `CON WELCOME TO DYNASTY  TRAVEL BOOKINGS... Select transport mode 
      1. Train
      2. Flight
      3. Bus
      4. Request call`;
  } else if (text === "1" || text === "2" || text === "3") {
    response = `CON Select your destination
      1. Nairobi
      2. Mombasa
      3. Kisumu`;
  } else if (text === "1*1") {
    response = `CON Select your start point
      1. Mombasa
      2. Kisumu`;
  } else if (text === "2*2") {
      response = `CON Select your start point
        1. Nairobi
        2. Kisumu`;
  } else if (text === "3*3") {
        response = `CON Select your start point
          1. Mombasa
          2. Nairobi`;
  } else if (text === "1*1*1" || text === "1*1*2" || text === "1*1*2") {
    response = `CON Select the time of your travel
      1. Morning
      2. Evening`;
  } else if (
    text === "1*1*1*1" ||
    text === "1*1*1*2" ||
    text === "1*1*2*1" ||
    text === "1*1*2*2"
  ) {
    const selectedTime = text.split("*")[3];
    const selectedDay = text.split("*")[4];
    
  
    const timeOptions = {
      "1": "Monday Morning 8am",
      "2": "Monday Evening 6pm",
    };
      const dayOptions = {
        "1": "Monday",
        "2": "Tuesday",
        "3": "Wednesday",
        "4": "Thursday",
        "5": "Friday",
        "6": "Saturday",
      };
    
      const selectedTimeValue = timeOptions[selectedTime];
      const selectedDayValue = dayOptions[selectedDay];
    
      console.log(selectedTimeValue);
      console.log(selectedDayValue);
    
      const randomNumber = generateRandomNumber(1, 50);
      sendsms(phoneNumber, selectedTimeValue, selectedDayValue, randomNumber);
    
      response = `END You have successfully booked a ${selectedTimeValue} trip on ${selectedDayValue}. ***YOUR TICKET NUMBER IS ${randomNumber}. ***You will receive a confirmation message shortly.`;
    
  } else if (text === "4") {
    const credentialss = {
      apiKey:
<<<<<<< HEAD
        "4e8b12db2ace9b867fee1d60c2529135c215c6e97d09e417704702d4e431b425",
      username: "dynos",
=======
        "##",
      username: "###",
>>>>>>> 10611baaf0a717fb460f2e8672681c72a6ae0ff9
    };

    const AfricasTalkings = require("africastalking")(credentialss);
    const voice = AfricasTalkings.VOICE;

    function makeCall(phoneNumber1) {
      const options = {
        callFrom: "+254730731121",
        callTo: [phoneNumber1],
      };

      console.log("Calling...");
      voice
        .call(options)
        .then(console.log)
        .catch(console.log);
    }

    makeCall(phoneNumber);

    response = `END You will receive a call shortly.`;
  } else {
    response = "END Invalid input. Please try again.";
  }

<<<<<<< HEAD
  res.set("Content-Type", "text/plain");
=======
  // Print the response onto the page so that our gateway can read it
  res.set("Content-Type: text/plain");

>>>>>>> 10611baaf0a717fb460f2e8672681c72a6ae0ff9
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
