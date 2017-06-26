Simplest Express Server
=======================

This is an ultra simple express.js server that hosts a static file and communicates via socket from front- to backend. This is not for production. Just for prototyping in the upcoming blockseminar for the interface lab @ University of Applied Sciences Potsdam (Germany).    

## Usage:

Download and unzip this package [here][download].  

Move with the terminal into the folder.  

    cd ~/Downloads/simplest-express-server/

Install the modules

    npm install

Run it 

    node index.js

open [http://localhost:3000][host].  

Click the buttons.  

Now you can add your code in the index.js file to control things in the backend[^1].  

<!-- footnotes -->

[^1]: Might be something like an arduino board with [Johnny Five][j5] or your Twitter account with [Twit][twit]. 

<!-- links -->

[download]: https://github.com/FH-Potsdam/controlling-hue/archive/master.zip
[host]: http://localhost:3000
[twit]: https://github.com/ttezel/twit
[j5]: https://github.com/rwaldron/johnny-five