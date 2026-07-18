/* ================================================================
   THIS IS THE ONLY FILE YOU NEED TO EDIT.
   Change the text below, and drop your own photos/music into the
   assets/ folder (see the file names referenced here).
================================================================ */
const CONFIG = {

  // The birthday person's name (shown on the welcome page)
  recipientName: "MIR💙",

  // The letter that appears when the envelope is opened
  letter: {
    body: `My dearest friend, from the very first day we met, I knew our story was going to be a beautiful one. Through every late night talk, every silly joke, and every quiet moment of support, you've become one of the most treasured people in my life. Today isn't just about celebrating another year — it's about celebrating YOU: your kindness, your strength, and the light you bring into every room you walk into. I hope this small journey made you smile even half as much as you make me smile every single day.`,
    signature: "With all my love, always yours 💙"
  },

  // Background music. Put an mp3 file inside assets/music/ and put its
  // file name here. Leave it as "" (empty) to keep the site silent.
  music: "assets/music/perfect.mp3",   // example: "assets/music/our-song.mp3"

  // The scrapbook gallery. One card per memory.
  //
  // For each memory, EITHER:
  //   - set "image" to a photo file name (put the photo in assets/images/), OR
  //   - leave "image" as "" and it will show the emoji on a soft color
  //     background instead (handy while you're still collecting photos).
  //
  // You can add or remove as many memories as you like — just copy a
  // whole { ... } block below to add another one.
  memories: [
    { title:"First Day Jitters",   date:"Aug 2018", image:"assets/images/photo1.jpg", memory:"We sat next to each other on the very first day, both terrified, and somehow that turned into years of friendship." },
    { title:"Library All-Nighter", date:"Nov 2019", image:"assets/images/photo2.jpg", emoji:"📚", color:"linear-gradient(135deg,#A7BED3,#CDB4DB)", memory:"Fueled by instant noodles and pure panic, we survived finals week together." },
    { title:"Golden Hour",         date:"Mar 2021", image:"assets/images/photo3.jpg", emoji:"🤳", color:"linear-gradient(135deg,#F7CAD0,#D8C4F3)", memory:"The lighting was perfect and so was the laugh right before the photo." },
    { title:"Silly Faces",         date:"Jun 2022", image:"assets/images/photo4.jpg", emoji:"😄", color:"linear-gradient(135deg,#CDB4DB,#B8C6F0)", memory:"We took 47 photos just to get one where neither of us blinked." },
    { title:"Your Last Birthday",  date:"Aug 2025", image:"assets/images/photo3.jpg", emoji:"🎂", color:"linear-gradient(135deg,#E6D6A8,#F7CAD0)", memory:"That cake was way too sweet, but the company made it perfect." },
    { title:"Graduation Day",      date:"May 2022", image:"assets/images/photo3.jpg", emoji:"🎉", color:"linear-gradient(135deg,#9FA8DA,#CDB4DB)", memory:"Caps flew, tears fell, and I couldn't have been prouder to be there." },
    { title:"The Beach Trip",      date:"Jul 2023", image:"assets/images/photo3.jpg", emoji:"🌊", color:"linear-gradient(135deg,#A7BED3,#C7D9E8)", memory:"We watched the sunset and made a promise to do this every year." },
    { title:"Mountain Escape",     date:"Dec 2024", image:"assets/images/photo3.jpg", emoji:"⛰️", color:"linear-gradient(135deg,#6E8CA6,#B8C6F0)", memory:"Cold hands, warm hearts, and the best hot chocolate of our lives." },
    { title:"Rainy Day Walk",      date:"Sep 2022", image:"assets/images/photo3.jpg", emoji:"☔", color:"linear-gradient(135deg,#B8C6F0,#D8C4F3)", memory:"No umbrella, no plan, just us laughing in the rain." },
    { title:"Movie Marathon",      date:"Jan 2024", image:"assets/images/photo3.jpg", emoji:"🎬", color:"linear-gradient(135deg,#CDB4DB,#F7CAD0)", memory:"Six movies, one blanket, and way too much popcorn." },
    { title:"That One Photo",      date:"Oct 2023", image:"assets/images/photo3.jpg", emoji:"⭐", color:"linear-gradient(135deg,#9FA8DA,#A7BED3)", memory:"If I had to pick just one memory to keep forever, it might be this one." },
    { title:"Us, Always",          date:"Feb 2025", image:"assets/images/photo3.jpg", emoji:"💫", color:"linear-gradient(135deg,#F7CAD0,#E6D6A8)", memory:"No caption needed — some photos just say everything." }
  ],

  // The closing message on the final page
  finalMessage: `Happy Birthday! Thank you for filling my life with beautiful memories, endless laughter, and unwavering friendship. Every moment we've shared has become a chapter in a story I'll always treasure. I hope this birthday brings you as much joy as you've brought into my life. May your days ahead be filled with love, success, good health, and countless reasons to smile. Never stop being the wonderful person you are. Here's to many more adventures together. Happy Birthday once again. ❤️`
};
