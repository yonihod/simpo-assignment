import React, {useEffect, useState} from "react";

const Table = (props) =>  {
    const [features,setFeatures] = useState([]);

    useEffect( () => {
        if(props.features.length){
            let data = [];
            data = props.features.map( (feature) => {
                    return {location: feature.properties.place, magnitude: feature.properties.mag, date: feature.properties.time }
            });
            setFeatures(data);
        }
    },[props.features]);

    const magClass = (mag) => {
        let res = 'low';
        if(mag < 4) {
            res = 'low';
        }else if( mag >= 4 || mag <=7){
            res = 'med'
        }else if( mag > 7) {
            res = 'high'
        }

        return res;
    };
    const getDate = (epochDate) => {
      let date = new Date(epochDate);
      return date.toLocaleDateString('en-GB')
    };

    return (
        <div className={"table"}>
            {features.length ?
                <table className={"w-full text-left border-collapse"}>
                    <thead>
                    <tr className={"uppercase purple border"}>
                        <th className={"py-8 px-6"}>location</th>
                        <th className={"py-8 px-6"}>date</th>
                        <th className={"py-8 px-6"}>magnitude</th>
                    </tr>
                    </thead>
                    <tbody>
                    {features.map( (feature, index) => {
                        return (
                            <tr className={"bold border"} key={index}>
                                <td className={"purple-strong py-4 px-6"}>{feature.location}</td>
                                <td className={"py-4 px-6"}>{getDate(feature.date)}</td>
                                <td className={"py-4 px-6"}>
                                    <div className={`mag rounded-full w-8 h-8 ${magClass(feature.magnitude)}`}>
                                        {feature.magnitude}
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            : null}
        </div>
    )
};

export default Table