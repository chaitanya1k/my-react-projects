import React, { useState } from "react";

const Biodata = ({ person }) => {
  const [index, setIndex] = useState(0);
  const { company, dates, duties, id, order, title } = person[2];
  return (
    <section className="biodata">
      <div className="companyName">
        <ul className="personList">
          {person.map((item, index) => {
            return <li key={item.id}>{item.company}</li>;
          })}
        </ul>
      </div>
      <div className="personDetails">
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{dates}</p>
        <p>{order}</p>
      </div>
    </section>
  );
};

export default Biodata;
