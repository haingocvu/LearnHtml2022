import React from 'react';

function Semantics() {
  return (
    <div>
      <nav>
        <a href="/html/">HTML</a>|<a href="/css/">CSS</a>|
        <a href="/js/">Javascript</a>|<a href="/jquery/">JQuery</a>
      </nav>
      <section>
        <h1>WW2</h1>
        <p>
          WW2 caused a terrible destroy to the world. section's semantics means
          it does nothing, just wrap the related content
        </p>
      </section>
      <article>
        <h1>Google chrome</h1>
        <p>
          Google chrome is a web browser developed by google, release in 2018.
          Article is the same as section. It's semantics element means it does
          nothing, just wrap independent content
        </p>
      </article>
      <article>
        <header>
          <h1>What Does WWF Do?</h1>
          <p>WWF's mission:</p>
        </header>
        <p>
          WWF's mission is to stop the degradation of our planet's natural
          environment, and build a future in which humans live in harmony with
          nature.
        </p>
      </article>
      <aside>
        <p>
          The Epcot center is a theme park at Walt Disney World Resort featuring
          exciting attractions, international pavilions, award-winning fireworks
          and seasonal special events.
        </p>
      </aside>
      <footer>
        <p>Author: Hege Refsnes</p>
        <p>
          <a href="mailto:hege@example.com">hege@example.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Semantics;
