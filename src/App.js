import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [last, setLast] = useState({ id: 9820 });
  // const [old, setOld] = useState({});
  // const [idx, setIdx] = useState(0);

  const x = "7a930438-3d27-4ad8-98b1-c66578fab4a7";

  useEffect(() => {
    const intervalId = setInterval(function(){
    rp(requestOptions)
      .then((response) => {
        // console.log("API call response:", response.data);

        if (response.data[0].id !== last.id) {
          let num = response.data.map((el) => el.id).indexOf(last.id);
          let newId = { id: response.data[0].id}
          setLast(newId);

          // setOld({...last});
          setList([...response.data]);
          // setLast(newId);
          // setIdx(num);

          let emailList = response.data
            .slice(0, num)
            .map((el) => el.name)
            .join(", ");
          let obj = {
            emailList: emailList,
          };

          setTimeout(function () {
          emailjs
            .send(
              "service_46v5ngr",
              "template_3xurina",
              obj,
              "user_wDbnaIvWCLYgVPps0l1dl"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          }, 2000);

        }
      })
      .catch((err) => {
        console.log("API call error:", err.message);
      });
    }, 300000);

    setTimeout(function () {
    console.log(last.id)
  }, 15000);


    return () => clearInterval(intervalId);
  }, [last]);

  const rp = require("request-promise");
  const requestOptions = {
    method: "GET",
    uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qs: {
      start: "1",
      limit: "50",
      convert: "USD",
      sort: "date_added",
      sort_dir: "asc",
    },
    headers: {
      "X-CMC_PRO_API_KEY": x,
    },
    json: true,
    gzip: true,
  };

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
