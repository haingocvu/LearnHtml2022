import React from 'react';
import styled from 'styled-components';

const StyledOverflow = styled.div`
  background: #4caf50;
  color: white;
  padding: 15px;
  width: 50%;
  height: 100px;
  border: 1px solid #ccc;
  margin: auto;
  overflow: scroll;
`;

function Overflow() {
  return (
    <div>
      <h2>CSS Overflow</h2>

      <p>
        The overflow property controls what happens to content that is too big
        to fit into an area.
      </p>
      <StyledOverflow>
        This text is really long and the height of its container is only 100
        pixels. Therefore, a scrollbar is added to help the reader to scroll the
        content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
        eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
        zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
        tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
        quod mazim placerat facer possim assum. Typi non habent claritatem
        insitam; est usus legentis in iis qui facit eorum claritatem.
      </StyledOverflow>
    </div>
  );
}

export default Overflow;
