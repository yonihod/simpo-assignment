import React, {useState} from 'react';
import './App.css';
import './tailwind.output.css';
import StyledInput from "./components/StyledInput";
import StyledSelect from "./components/StyledSelect";
import Table from "./components/Table"
import buildUrl from 'build-url';

function App() {

  const [query,setQuery] = useState({});
  const [data,setData] = useState([]);

  const minMagnitude = [...Array(10)].map((_, index) => index);
  const latitude = [...Array(181)].map((_, index) => index - 90);
  const longitude = [...Array(361)].map((_, index) => index - 180);

  const onSubmit = (e) => {
    e.preventDefault();

    var url = buildUrl('https://earthquake.usgs.gov/fdsnws/event/1/', {
      path: 'query',
      queryParams: {
        format: 'geojson',
        starttime: query.startTime,
        endtime: query.endTime,
        minmagnitude: query.minmagnitude,
        latitude: query.latitude,
        longitude: query.longitude,
        maxradiuskm: query.maxradiuskm
      }
    });

    fetch(url)
        .then( res => res.json())
        .then( (result) =>{
          if(result.metadata.count)
            setData(result.features);
        })
  };

  const onChange = (e) => {
    let nQ = {...query};
    nQ[e.target.name] = e.target.value;
    setQuery(nQ);
  };

  return (
    <div className="App">
      <header className="App-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="185.96" height="48.156" viewBox="0 0 185.96 48.156">
          <g id="Group_1597" data-name="Group 1597" transform="translate(-867 -26)">
          <path id="Path_9" data-name="Path 9" d="M-2.38,41.252c0,2.584,4.2,5.244,6.408,5.244a10.593,10.593,0,0,0,4.94-1.254c12.16,6.878,18.582,9.69,23.864,9.69s9.082-3.686,9.082-8.018a2.415,2.415,0,0,0-2.736-2.622c-.874,3-2.128,4.066-4.826,4.066-5.89,0-10.6-3-20.672-6.422,9.006-6.688,12.578-12.958,12.578-19.152,0-3.914-2.128-7.334-6.384-7.334a7.426,7.426,0,0,0-1.786.228c-.95-2.888-3.42-5.244-7.98-5.244-2.508,0-4.028,1.254-4.028,2.812a1.856,1.856,0,0,0,.342,1.216c.494-.038,1.748-.114,2.2-.114,3,0,4.446.912,5.092,1.938-6.612,1.786-9.88,8.094-9.88,13.452,0,4.066,1.786,6.194,4.826,6.194,4.788,0,9.538-7.866,9.538-16,1.444.76,2.09,2.356,2.09,4.408,0,5.282-3.876,10.982-10.754,15.846a21.4,21.4,0,0,0-6.232-1.216C.342,38.972-2.38,39.808-2.38,41.252ZM9.158,30.08c0-4.142,1.52-8.4,5.206-10.412-.532,6.042-2.318,10.678-4.978,12.54A7.151,7.151,0,0,1,9.158,30.08ZM36.4,26.014A38.058,38.058,0,0,1,34.39,36.046a5.419,5.419,0,0,1-2.622,1.71c-.532,0-.76-.38-.76-.988a14.267,14.267,0,0,1,.608-3.116c1.938-3.154,2.926-5.434,2.926-6.65,0-1.14-.646-1.52-1.824-1.52-2.66,0-6.308,4.256-6.308,6.612A4.882,4.882,0,0,0,26.9,34.45a18.427,18.427,0,0,0-1.52,5.776c0,2.28.532,3.572,2.774,3.572,1.71,0,4.028-1.6,5.852-5.054a10.844,10.844,0,0,0-.228,1.976c0,1.976.95,2.47,2.508,2.47,1.6,0,3.61-1.216,5.4-2.812,2.2-1.938,4.1-4.408,4.1-5.776,0-.684-.76-1.178-1.558-1.178-2.432,3.42-4.256,4.94-5.13,4.94-.3,0-.532-.114-.532-.608,0-.722,1.6-4.256,2.394-6.422a8.317,8.317,0,0,0,.722-2.964A3.462,3.462,0,0,0,38,25.292,2.035,2.035,0,0,0,36.4,26.014ZM50.73,38.592a11.425,11.425,0,0,0-.114,1.482c0,2.432,1.064,3.116,2.736,3.116,2.736,0,9.044-6.118,9.044-8.588a1.272,1.272,0,0,0-1.406-1.178c-2.432,3.42-4.408,4.864-5.168,4.864-.3,0-.456-.114-.456-.874,0-.988.494-3.382,1.824-8.17a10.153,10.153,0,0,0,.418-2.508c0-1.33-1.406-3.078-3.99-3.078a1.749,1.749,0,0,0-1.33.494l-.114,2.2a1.282,1.282,0,0,0-.988-.266c-3.8,0-8.512,5.966-8.512,11.666,0,3.458,1.6,5.244,3.762,5.244C47.766,43,49.514,42.05,50.73,38.592Zm.038-1.862a2.125,2.125,0,0,1-1.52.95c-.532,0-.988-.152-.988-1.558a9.49,9.49,0,0,1,3.724-7.3Zm9.918-1.672a8.179,8.179,0,0,0-1.254,4.18,4.069,4.069,0,0,0,3.876,3.99,2.7,2.7,0,0,0,2.014-.722c.038-3.23.114-4.864.266-6.574l1.71-.684a21.212,21.212,0,0,0-.19,2.774c0,4.256.95,5.89,3.382,5.89,3.5,0,9.348-7.106,9.348-9.31a1.339,1.339,0,0,0-1.482-1.178c-2.66,3.838-4.18,5.472-5.168,5.472-.912,0-1.292-1.406-1.292-5.51,3.914-1.938,4.37-2.318,4.37-4.066a2.748,2.748,0,0,0-2.736-2.964c-1.026,0-2.128.76-3.838,3.116a15.325,15.325,0,0,0-1.33,2.318l-2.546,1.064a21.876,21.876,0,0,1,1.9-5.776c2.774-5.4,3.61-7.524,3.61-9.2a2.366,2.366,0,0,0-2.66-2.7C63.916,15.184,62.282,20.846,60.686,35.058Zm21.7,8.284c4.94,0,11.286-6.042,11.286-8.854a1.365,1.365,0,0,0-1.444-1.254c-2.166,3.306-5.51,5.51-8.094,5.51-1.482,0-1.824-.95-1.824-2.66,5.206-1.178,7.068-3.648,7.068-6.84,0-2.66-1.444-3.914-4.066-3.914-3.686,0-8.36,5.852-8.36,11.59C76.95,41.024,78.66,43.342,82.384,43.342ZM85.12,30.574c0,1.14-.456,2.318-2.584,2.7.266-2.66,1.292-3.952,1.824-3.952C84.816,29.32,85.12,29.776,85.12,30.574Z" transform="translate(913.38 17.566)" fill="#fff"/>
          <g id="Group_16" data-name="Group 16" transform="translate(58 10)">
            <g id="Group_16-2" data-name="Group 16" transform="translate(218.69 -123.84)">
              <g id="Path_15" data-name="Path 15">
                <path id="Path_21" data-name="Path 21" d="M619.625,180.087a1.576,1.576,0,0,1-.288-.027,1.5,1.5,0,0,1-1.187-1.759l4.961-25.523a1.5,1.5,0,0,1,2.946.573L621.1,178.873A1.5,1.5,0,0,1,619.625,180.087Z" fill="#fff"/>
              </g>
              <g id="Path_16" data-name="Path 16">
                <path id="Path_22" data-name="Path 22" d="M609.809,178.179a1.577,1.577,0,0,1-.288-.028,1.5,1.5,0,0,1-1.186-1.759l4.2-21.6a1.5,1.5,0,0,1,2.945.573l-4.2,21.6A1.5,1.5,0,0,1,609.809,178.179Z" fill="#fff"/>
              </g>
              <g id="Path_17" data-name="Path 17">
                <path id="Path_23" data-name="Path 23" d="M600.565,173.326a1.579,1.579,0,0,1-.288-.028,1.5,1.5,0,0,1-1.186-1.759l2.1-10.8a1.5,1.5,0,0,1,2.946.572l-2.1,10.8A1.5,1.5,0,0,1,600.565,173.326Z" fill="#fff"/>
              </g>
              <g id="Path_10" data-name="Path 10">
                <path id="Path_24" data-name="Path 24" d="M626.112,146.712a1.5,1.5,0,0,1-1.474-1.787l.382-1.963a1.5,1.5,0,1,1,2.944.573l-.381,1.963A1.5,1.5,0,0,1,626.112,146.712Z" fill="#fff"/>
              </g>
              <g id="Path_11" data-name="Path 11">
                <path id="Path_25" data-name="Path 25" d="M607.9,188a1.507,1.507,0,0,1-1.474-1.788l.191-.981a1.5,1.5,0,0,1,2.945.573l-.191.982A1.5,1.5,0,0,1,607.9,188Z" fill="#fff"/>
              </g>
              <g id="Path_12" data-name="Path 12">
                <path id="Path_26" data-name="Path 26" d="M603.81,156.64a1.5,1.5,0,0,1-1.06-.44,1.516,1.516,0,0,1-.44-1.06,1.5,1.5,0,0,1,.44-1.06,1.548,1.548,0,0,1,2.12,0,1.5,1.5,0,0,1,.44,1.06,1.5,1.5,0,0,1-1.5,1.5Z" fill="#fff"/>
              </g>
              <g id="Path_18" data-name="Path 18">
                <path id="Path_27" data-name="Path 27" d="M741.992,176.271a1.5,1.5,0,0,1-1.474-1.787l4.961-25.522a1.5,1.5,0,0,1,2.945.573l-4.961,25.522A1.5,1.5,0,0,1,741.992,176.271Z" fill="#fff"/>
              </g>
              <g id="Path_19" data-name="Path 19">
                <path id="Path_28" data-name="Path 28" d="M752.572,174.253a1.5,1.5,0,0,1-1.474-1.787l4.2-21.6a1.5,1.5,0,0,1,2.945.572l-4.2,21.6A1.5,1.5,0,0,1,752.572,174.253Z" fill="#fff"/>
              </g>
              <g id="Path_20" data-name="Path 20">
                <path id="Path_29" data-name="Path 29" d="M763.915,168.308a1.568,1.568,0,0,1-.288-.028,1.5,1.5,0,0,1-1.187-1.759l2.1-10.8a1.5,1.5,0,0,1,2.945.572l-2.1,10.8A1.5,1.5,0,0,1,763.915,168.308Z" fill="#fff"/>
              </g>
              <g id="Path_10-2" data-name="Path 10-2">
                <path id="Path_30" data-name="Path 30" d="M740.085,186.087a1.5,1.5,0,0,1-1.475-1.786l.381-1.963a1.5,1.5,0,0,1,2.946.571l-.381,1.963A1.5,1.5,0,0,1,740.085,186.087Z" fill="#fff"/>
              </g>
              <g id="Path_11-2" data-name="Path 11-2">
                <path id="Path_31" data-name="Path 31" d="M758.487,143.823a1.567,1.567,0,0,1-.287-.028,1.5,1.5,0,0,1-1.187-1.758l.19-.982a1.5,1.5,0,0,1,2.945.571l-.19.982A1.5,1.5,0,0,1,758.487,143.823Z" fill="#fff"/>
              </g>
              <g id="Path_12-2" data-name="Path 12-2">
                <path id="Path_32" data-name="Path 32" d="M762.77,174.2a1.366,1.366,0,0,1-.291-.03,1.436,1.436,0,0,1-.29-.09.914.914,0,0,1-.25-.14,1.034,1.034,0,0,1-.229-.18,2.108,2.108,0,0,1-.19-.23,2.139,2.139,0,0,1-.14-.26,2.117,2.117,0,0,1-.08-.28,1.481,1.481,0,0,1,.41-1.35,1.077,1.077,0,0,1,.229-.19,2.165,2.165,0,0,1,.25-.14,1.414,1.414,0,0,1,.29-.08,1.492,1.492,0,0,1,1.761,1.76,1.31,1.31,0,0,1-.091.28,1.262,1.262,0,0,1-.129.26,2.234,2.234,0,0,1-.19.23A1.516,1.516,0,0,1,762.77,174.2Z" fill="#fff"/>
              </g>
              <g id="Path_14" data-name="Path 14">
                <path id="Path_33" data-name="Path 33" d="M774.77,164.2a1.366,1.366,0,0,1-.291-.03,1.436,1.436,0,0,1-.29-.09,1.284,1.284,0,0,1-.25-.14,1.034,1.034,0,0,1-.229-.18,1.316,1.316,0,0,1-.19-.23,2.139,2.139,0,0,1-.14-.26,2.117,2.117,0,0,1-.08-.28,1.431,1.431,0,0,1-.03-.29,1.5,1.5,0,0,1,.44-1.06,1.077,1.077,0,0,1,.229-.19,2.165,2.165,0,0,1,.25-.14,1.414,1.414,0,0,1,.29-.08,1.5,1.5,0,0,1,1.791,1.47,1.427,1.427,0,0,1-.03.29,1.31,1.31,0,0,1-.091.28,1.262,1.262,0,0,1-.129.26,2.234,2.234,0,0,1-.19.23A1.516,1.516,0,0,1,774.77,164.2Z" fill="#fff"/>
              </g>
              <g id="Path_13" data-name="Path 13">
                <path id="Path_34" data-name="Path 34" d="M591.81,166.64a1.5,1.5,0,0,1-1.06-.44,1.516,1.516,0,0,1-.44-1.06,1.5,1.5,0,0,1,.44-1.06,1.548,1.548,0,0,1,2.12,0,1.017,1.017,0,0,1,.18.23,1.229,1.229,0,0,1,.14.25,1.4,1.4,0,0,1,.09.29,1.36,1.36,0,0,1,.03.29,1.5,1.5,0,0,1-.44,1.06A1.516,1.516,0,0,1,591.81,166.64Z" fill="#fff"/>
              </g>
            </g>
          </g>
        </g>
        </svg>
      </header>
      <div id={"content"} className={"grid main-grid"}>
        <div id={"sidebar"} className={"row-start-1 row-end-7 column-start-1 column-end-2 flex flex-col gap-2"}>
          <div className={"simpo-border"}>
            <h4 className={"uppercase"}>title</h4>
          </div>
          <StyledInput className={"mx-auto"} onChange={onChange} name={"startTime"} value={query.startTime} type={"date"} label={"start date"}/>
          <StyledInput className={"mx-auto"} onChange={onChange} name={"endTime"} value={query.endTime} type={"date"} label={"end date"}/>
          <StyledSelect className={"mx-auto"} onChange={onChange} name={"minmagnitude"} label={"Min Magnitude"} options={minMagnitude} placeholder={"0 to 10"}/>
          <div className={"simpo-border"}>
            <h4 className={"uppercase"}>location</h4>
          </div>
          <StyledSelect className={"mx-auto"} onChange={onChange} name={"latitude"} label={"Latitude"} options={latitude} placeholder={"-90 to 90"}/>
          <StyledSelect className={"mx-auto"} onChange={onChange} name={"longitude"} label={"Longitude"} options={longitude} placeholder={"-180 to 180"}/>
          <StyledInput className={"mx-auto"} onChange={onChange} name={"maxradiuskm"} value={query.maxradiuskm} type={"text"} placeholder={"Decimal (KM)"}/>

          <div className={"simpo-border"}></div>

          <div className={"w-300 mt-12 mx-auto text-center"}>
            <input className={"text-center submit rounded-2xl w-32 py-1 px-4"} type="submit" onClick={onSubmit}/>
          </div>

        </div>
        <div id={"topbar"} className={"flex gap-8 row-end-2"}>
          <StyledSelect label={"Min Magnitude"} options={latitude} placeholder={"0 to 10"}/>
          <StyledSelect label={"Max Magnitude"} options={latitude} placeholder={"0 to 10"}/>
          <StyledInput label={"# of earthquakes"} type={"number"} placeholder={0}/>
        </div>

        <div id={"table"} className={"row-start-2 column-start-2"}>
          <Table features={data }/>
        </div>

      </div>
    </div>
  );
}

export default App;
