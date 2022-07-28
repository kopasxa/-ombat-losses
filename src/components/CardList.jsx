import React from "react";
import Card from "./Card";
import Classes from "../styles/CardList.module.css"

const CardList = (props) => {
    let cards = [];
    let key = 0;
    
    for (let el in props.stats.stats) {
        try {
            cards.push(
                <Card
                    key={key}
                    total={props.stats.stats[el]}
                    today={props.stats.increase[el]}
                    name={props.terms[el].title}
                    path={props.terms[el].icon}
                />
            );
        }
        catch (e) {
            cards.push(
                <Card
                    key={key}
                    total={props.stats.stats[el]}
                    name={props.terms[el].title}
                    path={props.terms[el].icon}
                />
            );
        }

        key += 1;
    }

  return (
    <div className={Classes.items}>
        {cards}
    </div>
  );
};

export default CardList;
