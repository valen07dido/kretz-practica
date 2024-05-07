import React, { useState } from "react";
import styles from "./FaQs.module.css";
import { IoAdd } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";


const FaQs = ({array}) => {
  const [active, setActive] = useState(Array(array.length).fill(false));

  const handleActive = (index) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };

  return (
    <div>
      {array.map((e, index) => (
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.question}>{e.pregunta}</p>
            <button onClick={() => handleActive(index)} className={styles.showMore}>{active[index]?<RiSubtractFill/>:<RiAddFill/>}</button>
          </div>
          {active[index] ? <p className={styles.answer}>{e.respuesta}</p> : null}
        </div>
      ))}
    </div>
  );
};

export default FaQs;
