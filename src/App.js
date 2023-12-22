import faker from "faker";
import "./App.css";
import { useEffect, useState } from "react";
import { List } from "react-virtualized";
import { AutoSizer } from "react-virtualized";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    setPeople(
      [...Array(1000).keys()].map((key) => {
        return {
          id: key,
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          number: `9${Math.floor(Math.random() * 1000000000)}`,
        };
      })
    );
  }, []);
  return (
    <div>
      <div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center'}}>
        <AutoSizer>
          {({width,height})=> (
            <List
              width={width}
              height={height}
              rowHeight={80}
              rowCount={people.length}
              rowRenderer={({ key, index, style, parent }) => {
                const person = people[index];
                return (
                  <div key={key} style={style}>
                    <h2>{person.name}</h2>
                    <p>{person.number}</p>
                  </div>
                );
              }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;
