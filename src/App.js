import React, { useState } from "react";
import "./styles.css";

var tcolor = "#3B82F6";
// lets do some css
var navigation = {
  margin: "0 auto 1.25rem auto ",
  boxShadow: "0 1px 10px rgba(146,161,176,.15)",
  padding: "1.25rem 2rem 1.25rem 2rem",
  maxWidth: "900px",
  borderBottomLeftRadius: "0.5rem",
  borderBottomRightRadius: "0.5rem",
  background: "#3B82F6",
  color: "white"
};
var footer = {
  backgroundColor: "#3B82F6",
  padding: "2.85rem",
  textAlign: "center",
  color: "white",
  borderTopRightRadius: "1rem",
  boxShadow: "0 1px 25px #E5E7EB",
  margin: "3rem 0 0 0"
};

const emojiDictonary = {
  "โจ": "Sparkles",
  "๐ฅ": "Fire",
  "๐": " Smiling Face with Smiling Eyes",
  "๐ฅบ": " Pleading Face",
  "๐": " Face with Tears of Joy",
  "โค๏ธโ": " Red Heart",
  "๐ฅฐ": " Smiling Face with Hearts",
  "โ": "Check Mark",
  "๐": " Grinning Face",
  "๐": " Grinning Face with Big Eyes",
  "๐": " Grinning Face with Smiling Eyes",
  "๐": " Beaming Face with Smiling Eyes",
  "๐": " Grinning Squinting Face",
  "๐": " Grinning Face with Sweat",
  "๐คฃ": " Rolling on the Floor Laughing",

  "๐": " Slightly Smiling Face",
  "๐": " Upside-Down Face",
  "๐": " Winking Face",

  "๐": " Smiling Face with Halo",

  "๐": " Smiling Face with Heart-Eyes",
  "๐คฉ": " Star-Struck",
  "๐": " Face Blowing a Kiss",
  "๐": " Kissing Face",
  "๐": " Kissing Face with Closed Eyes",
  "๐": " Kissing Face with Smiling Eyes",

  "๐": " Face Savoring Food",
  "๐": " Face with Tongue",
  "๐": " Winking Face with Tongue",
  "๐คช": " Zany Face",
  "๐": " Squinting Face with Tongue",
  "๐ค": " Money-Mouth Face",
  "๐ค": " Hugging Face",
  "๐คญ": " Face with Hand Over Mouth",
  "๐คซ": " Shushing Face",
  "๐ค": " Thinking Face",
  "๐ค": " Zipper-Mouth Face",
  "๐คจ": " Face with Raised Eyebrow",
  "๐": " Neutral Face",
  "๐": " Expressionless Face",
  "๐ถ": " Face Without Mouth",

  "๐": " Smirking Face",
  "๐": " Unamused Face",
  "๐": " Face with Rolling Eyes",
  "๐ฌ": " Grimacing Face",
  "๐ฎ๐จ": " Face Exhaling",
  "๐คฅ": " Lying Face",
  "๐": " Relieved Face",
  "๐": " Pensive Face",
  "๐ช": " Sleepy Face",
  "๐คค": " Drooling Face",
  "๐ด": " Sleeping Face",
  "๐ท": " Face with Medical Mask",
  "๐ค": " Face with Thermometer",
  "๐ค": " Face with Head-Bandage",
  "๐คข": " Nauseated Face",
  "๐คฎ": " Face Vomiting",
  "๐คง": " Sneezing Face",
  "๐ฅต": " Hot Face",
  "๐ฅถ": " Cold Face",
  "๐ฅด": " Woozy Face",
  "๐ต": " Dizzy Face",

  "๐คฏ": " Exploding Head",
  "๐ค?": " Cowboy Hat Face",
  "๐ฅณ": " Partying Face",

  "๐": " Smiling Face with Sunglasses",
  "๐ค": " Nerd Face",
  "๐ง": " Face with Monocle",
  "๐": " Confused Face",
  "๐": " Worried Face",
  "๐": " Slightly Frowning Face",

  "๐ฏ": " Hushed Face",
  "๐ฒ": " Astonished Face",
  "๐ณ": " Flushed Face",

  "๐ฆ": " Frowning Face with Open Mouth",
  "๐ง": " Anguished Face",
  "๐จ": " Fearful Face",
  "๐ฐ": " Anxious Face with Sweat",
  "๐ฅ": " Sad but Relieved Face",
  "๐ข": " Crying Face",
  "๐ญ": " Loudly Crying Face",
  "๐ฑ": " Face Screaming in Fear",
  "๐": " Confounded Face",
  "๐ฃ": " Persevering Face",
  "๐": " Disappointed Face",
  "๐": " Downcast Face with Sweat",
  "๐ฉ": " Weary Face",
  "๐ซ": " Tired Face",
  "๐ฅฑ": " Yawning Face",
  "๐ค": " Face with Steam From Nose",
  "๐ก": " Pouting Face",
  "๐?": " Angry Face",
  "๐คฌ": " Face with Symbols on Mouth",
  "๐": " Smiling Face with Horns",
  "๐ฟ": " Angry Face with Horns",
  "๐": " Skull",

  "๐ฉ": " Pile of Poo",
  "๐คก": " Clown Face",
  "๐น": " Ogre",
  "๐บ": " Goblin",
  "๐ป": " Ghost",
  "๐ฝ": " Alien",
  "๐พ": " Alien Monster",
  "๐ค": " Robot",
  "๐บ": " Grinning  Cat",
  "๐ธ": " Grinning  Cat with Smiling Eyes",
  "๐น": " Cat  with Tears of Joy",
  "๐ป": " Smiling  Cat with Heart-Eyes",
  "๐ผ": " Cat  with Wry Smile",
  "๐ฝ": " Kissing Cat",
  "๐": " Weary Cat",
  "๐ฟ": " Crying Cat",
  "๐พ": " Pouting Cat",
  "๐": " Kiss Mark",
  "๐": " Waving Hand",
  "๐ค": " Raised Back of Hand",
  "๐": "๏ธ Hand with Fingers Splayed",
  "โ": "Raised Hand",
  "๐": " Vulcan Salute",
  "๐": " OK Hand",

  "๐ค": " Pinching Hand",

  "๐ค": " Crossed Fingers",
  "๐ค": " Love-You Gesture",
  "๐ค": " Sign of the Horns",
  "๐ค": " Call Me Hand",
  "๐": " Backhand Index Pointing Left",
  "๐": " Backhand Index Pointing Right",
  "๐": " Backhand Index Pointing Up",
  "๐": " Middle Finger",
  "๐": " Backhand Index Pointing Down",
  "๐": " Thumbs Up",
  "๐": " Thumbs Down",
  "โ": "Raised Fist",
  "๐": " Oncoming Fist",
  "๐ค": " Left-Facing Fist",
  "๐ค": " Right-Facing Fist",
  "๐": " Clapping Hands",
  "๐": " Raising Hands",
  "๐": " Open Hands",
  "๐คฒ": " Palms Up Together",
  "๐ค": " Handshake",
  "๐": " Folded Hands",
  "๐": " Nail Polish",
  "๐คณ": " Selfie",
  "๐ช": " Flexed Biceps",
  "๐ฆพ": " Mechanical Arm",
  "๐ฆฟ": " Mechanical Leg",
  "๐ฆต": " Leg",
  "๐ฆถ": " Foot",
  "๐": " Ear",
  "๐ฆป": " Ear with Hearing Aid",
  "๐": " Nose"
};

export default function App() {
  var [meaning, setMeaning] = useState("");
  var emojisWeHave = Object.keys(emojiDictonary);
  function emojiInputChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictonary[userInput];
    if (userInput === "") {
      meaning = "";
    } else if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClick(item) {
    console.log(item);
    var meaning = emojiDictonary[item];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <nav style={navigation}>
        <h1>Emoji Interpreter</h1>
      </nav>
      <input
        style={{
          border: "none",
          boxShadow: "10px 10px 25px #E5E7EB",
          padding: "1rem 2rem 1rem 2rem",
          fontSize: "1rem",
          margin: "1rem",
          borderRadius: "0.5rem"
        }}
        onChange={emojiInputChangeHandler}
        placeholder="Enter your Favourite emoji"
      ></input>
      <div>
        <h1>
          <span style={{ color: tcolor }}>{meaning}</span>
        </h1>
        <h3>emoji's we Have</h3>
        {emojisWeHave.map((item, index) => {
          return (
            <span
              style={{
                fontSize: "2.5rem",
                background: "#E5E7EB",
                padding: "0rem",
                margin: "0.5rem",
                cursor: "pointer",
                borderRadius: "1rem",
                boxShadow: "0 5px 25px #E5E7EB"
              }}
              onClick={() => {
                emojiClick(item);
              }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
      <footer style={footer}>Lets have fun!!</footer>
    </div>
  );
}
