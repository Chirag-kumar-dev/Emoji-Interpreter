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
  "✨": "Sparkles",
  "🔥": "Fire",
  "😊": " Smiling Face with Smiling Eyes",
  "🥺": " Pleading Face",
  "😂": " Face with Tears of Joy",
  "❤️‍": " Red Heart",
  "🥰": " Smiling Face with Hearts",
  "✔": "Check Mark",
  "😀": " Grinning Face",
  "😃": " Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",

  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",

  "😇": " Smiling Face with Halo",

  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",

  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Hugging Face",
  "🤭": " Face with Hand Over Mouth",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🤐": " Zipper-Mouth Face",
  "🤨": " Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",

  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄": " Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "😮💨": " Face Exhaling",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴": " Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧": " Sneezing Face",
  "🥵": " Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵": " Dizzy Face",

  "🤯": " Exploding Head",
  "🤠": " Cowboy Hat Face",
  "🥳": " Partying Face",

  "😎": " Smiling Face with Sunglasses",
  "🤓": " Nerd Face",
  "🧐": " Face with Monocle",
  "😕": " Confused Face",
  "😟": " Worried Face",
  "🙁": " Slightly Frowning Face",

  "😯": " Hushed Face",
  "😲": " Astonished Face",
  "😳": " Flushed Face",

  "😦": " Frowning Face with Open Mouth",
  "😧": " Anguished Face",
  "😨": " Fearful Face",
  "😰": " Anxious Face with Sweat",
  "😥": " Sad but Relieved Face",
  "😢": " Crying Face",
  "😭": " Loudly Crying Face",
  "😱": " Face Screaming in Fear",
  "😖": " Confounded Face",
  "😣": " Persevering Face",
  "😞": " Disappointed Face",
  "😓": " Downcast Face with Sweat",
  "😩": " Weary Face",
  "😫": " Tired Face",
  "🥱": " Yawning Face",
  "😤": " Face with Steam From Nose",
  "😡": " Pouting Face",
  "😠": " Angry Face",
  "🤬": " Face with Symbols on Mouth",
  "😈": " Smiling Face with Horns",
  "👿": " Angry Face with Horns",
  "💀": " Skull",

  "💩": " Pile of Poo",
  "🤡": " Clown Face",
  "👹": " Ogre",
  "👺": " Goblin",
  "👻": " Ghost",
  "👽": " Alien",
  "👾": " Alien Monster",
  "🤖": " Robot",
  "😺": " Grinning  Cat",
  "😸": " Grinning  Cat with Smiling Eyes",
  "😹": " Cat  with Tears of Joy",
  "😻": " Smiling  Cat with Heart-Eyes",
  "😼": " Cat  with Wry Smile",
  "😽": " Kissing Cat",
  "🙀": " Weary Cat",
  "😿": " Crying Cat",
  "😾": " Pouting Cat",
  "💋": " Kiss Mark",
  "👋": " Waving Hand",
  "🤚": " Raised Back of Hand",
  "🖐": "️ Hand with Fingers Splayed",
  "✋": "Raised Hand",
  "🖖": " Vulcan Salute",
  "👌": " OK Hand",

  "🤏": " Pinching Hand",

  "🤞": " Crossed Fingers",
  "🤟": " Love-You Gesture",
  "🤘": " Sign of the Horns",
  "🤙": " Call Me Hand",
  "👈": " Backhand Index Pointing Left",
  "👉": " Backhand Index Pointing Right",
  "👆": " Backhand Index Pointing Up",
  "🖕": " Middle Finger",
  "👇": " Backhand Index Pointing Down",
  "👍": " Thumbs Up",
  "👎": " Thumbs Down",
  "✊": "Raised Fist",
  "👊": " Oncoming Fist",
  "🤛": " Left-Facing Fist",
  "🤜": " Right-Facing Fist",
  "👏": " Clapping Hands",
  "🙌": " Raising Hands",
  "👐": " Open Hands",
  "🤲": " Palms Up Together",
  "🤝": " Handshake",
  "🙏": " Folded Hands",
  "💅": " Nail Polish",
  "🤳": " Selfie",
  "💪": " Flexed Biceps",
  "🦾": " Mechanical Arm",
  "🦿": " Mechanical Leg",
  "🦵": " Leg",
  "🦶": " Foot",
  "👂": " Ear",
  "🦻": " Ear with Hearing Aid",
  "👃": " Nose"
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
