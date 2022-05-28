import {useState, useEffect} from "react";

export const useLine = ({ COLOR_LINE, DATA_LINE }) => {
    const [graph, setGraph] = useState({
        labels: [],
        data: [],
      });
      useEffect(() => {
        let labels = [];
        let data = [];
    
        DATA_LINE.map( ({label, value}) => {
          labels.push(label);
          data.push(value);
          return null;
        });

        setGraph({
          labels,
          data
        });
    
      },[]);
      
      const data = {
        labels: graph.labels,
        datasets: [
          {
            data: graph.data,
            backgroundColor: COLOR_LINE,
            borderColor: COLOR_LINE,
          },
        ],
      };
    return data;
}