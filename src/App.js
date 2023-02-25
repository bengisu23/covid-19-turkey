import React,{useEffect,useState} from "react";
import axios from "axios";



function App() {

  const [veri,setVeri]=useState("");
  const [tarih,setTarih]=useState("")

  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setVeri(res.data[tarih]))
    .catch(err=>console.log(err))



  },[veri,tarih]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">
              TÜRKİYE COVİD 19 ARAMA MOTORU
            </h2>
            <input
              onChange={(e)=>setTarih(e.target.value)}
              type="text"
              placeholder="GG/AA/YY"
              className="form-control"
            />
            <table class="table table-striped text-dark">
              <thead>
                <tr>
                  <th className="text-white" scope="col">#</th>
                  <th className="text-white" scope="col">Test sayisi</th>
                  <th className="text-white" scope="col">Hasta sayisi</th>
                  <th className="text-white" scope="col">Vefat sayisi</th>
                </tr>
              </thead>
              <tbody>
                <tr  className={veri===undefined ? "bg-primary" : "bg-success"}>
                  <th scope="row">{veri===undefined ? "veri bekleniyor" : veri.date}</th>
                  <td className="text-white">{veri===undefined ? "veri bekleniyor" : veri.totalTests}</td>
                  <td  className="text-white">{veri===undefined ? "veri bekleniyor" : veri.patients}</td>
                  <td  className="text-white">{veri===undefined ? "veri bekleniyor" : veri.deaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
