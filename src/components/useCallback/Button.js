import React, {memo} from 'react'

function Button({btnText, handler}) {
  return (
    <div>
      <button onClick={handler}>{btnText}</button>
    </div>
  );
}

export default memo(Button)