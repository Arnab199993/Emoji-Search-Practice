import React, { useEffect, useState } from 'react'
import EmojiData from './EmojiData.json';

const App = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const newData = EmojiData.filter(emojis => emojis.description.toLowerCase().includes(search.toLowerCase()));
    setData(newData);

    if (newData.length == 0) {
      setMsg('No Emoji Found!!!')
    } else if (newData.length > 0) {
      setMsg('')
    }

  }, [search])
  return (
    <div style={{ textAlign: "center" }}>
      <center>
        <h1> Emoji Search</h1>
        <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </center>

      <div>
        <h3 style={{ color: 'black' }}>{msg}</h3>
      </div>

      {data.map(emojis =>
        <div className="card" key={emojis.description}>
          <div className="card-body" onClick={() => { navigator.clipboard.writeText(emojis.emoji); }}>
            {emojis.emoji} {emojis.description}
          </div>
        </div>
      )}

    </div>
  )
}

export default App