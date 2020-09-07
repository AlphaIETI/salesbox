import React from 'react';
import Home from './Home';
import List from './List';

class AppHome extends React.Component{

    constructor(props){
        super(props);
        this.state={
          marcas:[
            {id:0, title: 'Tennis',image:'tennis.png'},
            {id:1, title: 'Naf Naf',image:'naf-naf-logo.png'},
            {id:2, title: 'Americanino',image: 'americanino.png'},
            {id:3, title: 'American Eagle',image:'American.png'},
            {id:4, title: 'Levis',image:'levis.png'},
            {id:5, title: 'Nike',image:'nike.png'},
            {id:6, title: 'Adidas',image:'adidas.png'},
            {id:7, title: 'Zara',image:'zara.png'},
            {id:8, title: 'Tommy Hilfiger',image:'tommy.png'},
            {id:9, title: 'Puma',image:'puma.png'},
            {id:10, title: 'Reebok',image:'reebok.png'},
        ]
        };
      }
    
    render (){
        return(
            <div className="app">
                <Home title="SalesBox"/>
            </div>
        );
      }


}

export default AppHome;



   




