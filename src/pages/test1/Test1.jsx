import React from 'react';
import w3school from 'src/images/w3schools.jpeg';
import programmingGif from 'src/images/programming.gif';
import workplace from 'src/images/workplace.jpeg';

function Test1() {
  console.log(w3school);
  return (
    <div>
      <h1
        style={{
          color: 'tomato',
          backgroundColor: 'mediumaquamarine',
          border: '6px solid yellow',
        }}
      >
        this is H1
      </h1>
      <h2>this is H2</h2>
      <p>
        <a href="#address_id">Jumb to address id</a>
      </p>
      <h3>this is H3</h3>
      <hr style={{ height: '10px', backgroundColor: 'red', border: 'none' }} />
      <h4>this is H4</h4>
      <img src={workplace} alt="workplace" useMap="#workplaceMap" />
      <map name="workplaceMap">
        <area
          shape="rect"
          alt="computer"
          coords="34,44,270,350"
          style={{ cursor: 'pointer' }}
          onClick={() => alert('you clicked computer')}
        />
        <area
          shape="circle"
          alt="glass"
          coords="337,300,44"
          style={{ cursor: 'pointer' }}
          onClick={() => alert('you clicked glass')}
        />
      </map>
      <h5>this is H5</h5>
      <h6>this is H6</h6>
      <p
        style={{
          backgroundColor: 'yellow',
          color: 'green',
          fontFamily: 'verdana',
          fontSize: '150%',
          textAlign: 'center',
        }}
      >
        this is a paragraph
      </p>
      <p style={{ backgroundImage: `url(${workplace})` }}>another paragraph</p>
      <div>this is a div</div>
      <div>this is a div</div>
      <a href="http://www.google.com" target="_blank" rel="noreferrer noopener">
        <img
          src={w3school}
          alt="w3school"
          style={{ width: '120px', height: '140px' }}
          title="this is an image"
        />
      </a>
      <button onClick={() => (window.location = 'https://www.google.com')}>
        CLick me
      </button>
      <p>
        <img
          src={programmingGif}
          alt="w3school"
          width={40}
          height={42}
          title="this is an image"
          style={{ float: 'right' }}
        />
        A paragraph with a floating image. A paragraph with a floating image. A
        paragraph with a floating image.
      </p>
      <b>this text is bold</b>
      <br />
      <strong>this is important text</strong>
      <br />
      <i>this is italic text</i>
      <br />
      <em>this is emphasized text</em>
      <br />
      <p>
        this is <small>smaller</small> text
      </p>
      <p>
        do not forget to buy <mark>milk</mark> today
      </p>
      <p>
        my favorite color is <del>blue</del> <ins>yellow</ins>
      </p>
      <p>
        H<sub>2</sub>O
      </p>
      <p>
        WWW<sup>1</sup>
      </p>
      <blockquote cite="http://www.worldwildlife.org/who/index.html">
        For 50 years, WWF has been protecting the future of nature. The world's
        leading conservation organization, WWF works in 100 countries and is
        supported by 1.2 million members in the United States and close to 5
        million globally.
      </blockquote>
      <p>
        WWP goal is to:
        <q>Build a future where people live in harmony with nature.</q>
      </p>
      <p>
        the <abbr title="world health organization">WHO</abbr> was found in 1948
      </p>
      <address id="address_id">
        81/7 nguyen cuu van, phuong 17, quan binh thanh
      </address>
      <p>
        <cite>the scream</cite> by Edvard Munch. Painted in 1983.
      </p>
      <bdo dir="rtl">this text will be written from right to left</bdo>
      <div
        style={{
          padding: '12px',
          margin: '10px',
          border: '4px solid tomato',
        }}
      >
        demo border, padding, margin
      </div>
    </div>
  );
}

export default Test1;
