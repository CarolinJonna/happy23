BLOOMING MEMORIES — how to personalize
========================================

HOW TO VIEW IT
  Open index.html in any web browser (double-click it). That's it —
  no install, no server needed.

THE ONLY FILE YOU NEED TO EDIT
  data/config.js

  Open it in any plain text editor (Notepad, TextEdit, VS Code, etc.
  — NOT Word). Everything the site shows is controlled from there:
  the recipient's name, the letter, the gallery memories, the closing
  message, and the music file.


-----------------------------------------------------------
1. ADDING YOUR OWN PHOTOS
-----------------------------------------------------------
  Step 1 — Copy your photo files into the assets/images/ folder.
           (jpg, jpeg, png, or webp all work)

  Step 2 — Open data/config.js and find the "memories" list. Each
           memory looks like this:

             { title:"First Day Jitters", date:"Aug 2018", image:"",
               emoji:"🎓", color:"linear-gradient(135deg,#9FA8DA,#B8C6F0)",
               memory:"We sat next to each other..." }

  Step 3 — To use a real photo for that memory, put the file name in
           the "image" field:

             image:"assets/images/first-day.jpg"

           Once "image" is filled in, the site automatically shows
           your photo instead of the emoji/color placeholder — you
           don't need to change anything else.

  Step 4 — Update the title, date, and memory text to match your
           own photo. Add more memories by copying a whole
           { ... } block and pasting it into the list (don't forget
           the comma between entries).


-----------------------------------------------------------
2. ADDING BACKGROUND MUSIC
-----------------------------------------------------------
  Step 1 — Copy your mp3 file into the assets/music/ folder.

  Step 2 — Open data/config.js and find this line near the top:

             music: "",

           Change it to your file name, for example:

             music: "assets/music/our-song.mp3",

  Step 3 — Save. The speaker icon (top-right of the site) will now
           turn music on/off. If you leave music: "" empty, clicking
           the speaker just shows a gentle reminder to add a song.


-----------------------------------------------------------
3. OTHER THINGS YOU CAN CHANGE (also in data/config.js)
-----------------------------------------------------------
  - recipientName   -> the birthday person's name
  - letter.body       -> the handwritten letter text
  - letter.signature -> how you sign off
  - finalMessage      -> the closing birthday message on the last page


-----------------------------------------------------------
FILE MAP (for reference — you shouldn't need to touch these)
-----------------------------------------------------------
  index.html     the page structure
  style.css      all the colors, fonts, and animations
  script.js      all the interactive behavior (navigation, cake,
                 gift box, fireworks, etc.)
  data/config.js the only file with your personal content — edit this
  assets/        put your images, music, videos, etc. in here

Everything else (page transitions, the cake candles, the envelope
opening, the gift box, the fireworks finale) already works out of
the box with no setup needed.
