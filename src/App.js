import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [last, setLast] = useState({ id: 9903 });

  const x = "7a930438-3d27-4ad8-98b1-c66578fab4a7";

  useEffect(() => {
    const intervalId = setInterval(function () {
      rp(requestOptions)
        .then((response) => {
          // console.log("API call response:", response.data);

          if (response.data[0].id !== last.id) {
            let num = response.data.map((el) => el.id).indexOf(last.id);
            setLast(response.data[0]);

            setList([...response.data]);

            let coinList = response.data
              .slice(0, num)
              .map((el) => {
                let platform = el.platform && el.platform.symbol
                let address = el.platform && el.platform.token_address
                return `Name : ${el.name} || Network : ${platform} || Contract : ${address}`
              })
              .join(", ");
            let obj = {
              coinList: coinList,
              emailList: "saidcryptog@gmail.com, cryptomood1@gmail.com",
              ccList:
                "internap627@gmail.com, Thebrightbrains1@gmail.com, Bob123bill1231@gmail.com, cryptoguru11@hotmail.com, Abdulhakeem15th@gmail.com, Ishy_ozzy307@hotmail.com, Moaweys1010@gmail.com, Abubakara1996@gmail.com, Jeilani90@gmail.com, zcrypto03@gmail.com, adamelhaddad3@gmail.com, Cheekymarketuk@gmail.com",
            };

            setTimeout(function () {
              emailjs
                .send(
                  "service_pdhtum6",
                  "template_3xurina",
                  obj,
                  "user_wDbnaIvWCLYgVPps0l1dl"
                )
                .then(
                  (result) => {
                    console.log(result.text, coinList);
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
    }, 70000);

    //Triggers when "last" changes because of dependency array
    setTimeout(function () {
      console.log(last);
    }, 5000);

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
