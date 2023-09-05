import React, { useState } from 'react'

export default function Input() {
    const [name, setName] = useState("");
  return (
    <div>
          <input type="text"
              value={name}
              onChange={()=>setName(e.target.value)}
          />
    </div>
  )
}
