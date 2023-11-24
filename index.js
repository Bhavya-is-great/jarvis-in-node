const express = require('express');
const { exec } = require('child_process');
const OpenAI = require('openai');
const path = require('path');
const gTTs = require('gtts');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));






app.get('/runnotepad', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\notepad.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runinsta', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\insta.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runcalc', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\calc.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runcamera', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\camera.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runchrome', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\chrome.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runclock', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\clock.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runcommand', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\command.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/rungallery', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\gallery.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runrecorder', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\recorder.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runvideos', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\videos.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runvscode', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\vscode.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/runwhatsapp', (req, res) => {
  // Execute the batch file using child_process
  exec('start /min public\\bat_files\\startapps\\whatsapp.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closecalc', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closecalc.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closecamera', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closecamera.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closeclock', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closeclock.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closeinsta', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closeinsta.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closenotepad', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closenotepad.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closegallery', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closephotos.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closepowershell', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closepoweshell.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closescreenrec', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closeScreenrec.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closevideos', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closevideos.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closevscode', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closevscode.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});

app.get('/closewhatsapp', (req, res) => {
  exec('start /min public\\bat_files\\closeapps\\closewhatsapp.bat', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send('Internal Server Error');
    }

    console.log(`stdout: ${stdout}`);
    res.send('Batch file executed successfully');
  });
});





app.get('/typingtest', (req, res) => {
  res.sendFile(path.join(__dirname, 'public\\Games\\Typing Speed Test Game in JavaScript\\index.html'));
});

app.get('/hangman',(req,res)=>{
  res.sendFile(path.join(__dirname,'public\\Games\\Hangman Game\\index.html'));
});

app.get('/mindgameeasy',(req,res)=>{
  res.sendFile(path.join(__dirname,'public\\Games\\Memory Card Games\\Memory Cards Game [Demo 1]\\index.html'))
});

app.get('/mindgamehard',(req,res)=>{
  res.sendFile(path.join(__dirname,'public\\Games\\Memory Card Games\\Memory Cards Game [Demo 2]\\index.html'));
});

app.get('/snakegame',(req,res)=>{
  res.sendFile(path.join(__dirname,"public\\Games\\Snake Game in JavaScript\\index.html"));
});

app.get('/rockpaperscissor',(req,res)=>{
  res.sendFile(path.join(__dirname,'public\\Games\\Rock Paper Scissors\\index.html'));
});

app.get('/numbergusser',(req,res)=>{
  res.sendFile(path.join(__dirname,'public\\Games\\Number gusser\\index.html'));
});

app.get('/tictactoe',(req,res)=>{
  res.sendFile(path.join(__dirname,'public\\Games\\Tic Tac Toe in JavaScript - CodingNepal\\index.html'));
});

app.get('/wordscramble',(req,res)=>{
  res.sendFile(path.join(__dirname,'public\\Games\\Word Scramble Game\\index.html'));
});

app.get('/makeaudio', (req, res) => {
  const{speech} = req.query;
  const gtts = new gTTs(speech, 'en');
  gtts.save('public\\voice.mp3', (err) => {
    if (err) throw new Error(err)
    console.log("text to speech")
  });
});

app.get('/downloadfile', (req, res) => {
  // Replace 'file.txt' with the name of your static file
  const fileName = 'public\\commands.txt';
  const filePath = path.join(__dirname, fileName);

  // Set headers to force download
  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
  res.setHeader('Content-Type', 'application/octet-stream');

  // Send the file
  res.sendFile(filePath);
});






app.get('/getresponse', async (req, res) => {
  console.log(req.query)
  let usserinput  = req.query.usserinput;
  let key = req.query.secretkey;
  console.log(key);
  const openai = new OpenAI({ apiKey: key });

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{
      "role": "user",
      "content": usserinput,
    }],
    max_tokens: 100
  });

  reply = { "responsebygpt": response.choices[0].message.content }

  // res.json({"responsebygpt":response.choices[0].message.content})
  res.send({ "responsebygpt": reply })

});







app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



// const gTTs = require('gtts');
// const speech = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem facilis architecto adipisci repellendus. Cumque illo quibusdam ullam? Nobis cupiditate doloremque sunt error recusandae."


// const gtts = new gTTs(speech,'en')
// gtts.save('public\\voice.mp3',(err)=>{
//     if(err)throw new Error(err)
//     console.log("text to speech")
// })