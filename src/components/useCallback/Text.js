import React, {memo} from 'react'

function Text({text, count}) {
  console.log(`rendering ${text} ${count}`);
  return (
    <div>
      <h1>{text}: {count}</h1>
    </div>
  )
}

export default memo(Text)