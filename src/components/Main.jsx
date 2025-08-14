import React from "react";
import pcImg from "../assets/pcImg.png";
import searchImg from "../assets/search.png";

export default function Main() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [newIndex, setIndex] = React.useState([]);

  const toggle = (index) => {
    setIndex((preV) => (preV === index ? null : index));
  };

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  const questionsArr = [
    "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
  ];
  const answerArr = [
    "Answer 1 - Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    "Answer 2 - Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    "Answer 3 - Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
  ];
  const questionComponents = questionsArr.map((question, index) => {
    return (
      <div className="question-answer" key={index}>
        <div className="question-container">
          {" "}
          <p>{question}</p>{" "}
          <button onClick={() => toggle(index)}>
            {newIndex === index ? "-" : "+"}
          </button>
        </div>

        <p> {newIndex === index && answerArr[index]}</p>
      </div>
    );
  });

  return (
    <main>
      <section className="section01">
        {width > 768 && (
          <div className="s1Content">
            <p>
              We crush your competitors, goals, and sales records - without the
              B.S.
            </p>

            <button>GET FREE CONSULTATION</button>
          </div>
        )}
      </section>

      {width <= 768 && (
        <div className="s1Content" style={{ maxWidth: "100%" }}>
          <p>
            We crush your competitors, goals, and sales records - without the
            B.S.
          </p>

          <button>GET FREE CONSULTATION</button>
        </div>
      )}

      <section className="section02">
        <div className="s2ImgContent">
          <img src={pcImg} alt="Computer Image" />

          <div className="s2Content">
            <p>Web & Mobile App Development</p>
            <p>
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button>LEARN MORE</button>
          </div>
        </div>
      </section>

      <section className="section03">
        <div className="s3ImgContent">
          <div className="s3Content">
            <p>Digital Strategy Consulting</p>
            <p>
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button>LEARN MORE</button>
          </div>

          <img src={searchImg} alt="Search Image" />
        </div>
      </section>

      <section className="section04">
        <div className="s4Container">
          <p>Frequently asked questions</p>

          <div className="s4Content">{questionComponents}</div>
        </div>
      </section>
    </main>
  );
}
