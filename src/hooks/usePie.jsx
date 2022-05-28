import {useState, useEffect} from "react";

export const usePie = ({ DATA_PIE }) => {
    const [graph, setGraph] = useState({
        labels: [],
        data: [],
        colors: []
      });
      useEffect(() => {
        let labels = [];
        let data = [];
        let colors = [];
    
        DATA_PIE.map( ({label, value, color}) => {
          labels.push(label);
          data.push(value);
          colors.push(color);
          return null;
        });

        setGraph({
          labels,
          data,
          colors
        });
    
      },[]);
      
      const data = {
        labels: graph.labels,
        datasets: [
          {
            data: graph.data,
            backgroundColor: graph.colors,
            borderWidth: 0,
          },
        ],
      };
    return data;
}