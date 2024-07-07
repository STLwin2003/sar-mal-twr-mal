import React from "react";
import RatingItem from "../item/RatingItem";

const RatingList = () => {
  const name = ["shin thant", "wyne htet ", "Thwe gyi"];

  return (
    <div>
      <section>
        <h1 className="mb-3">Rating List for Admin</h1>
        {name.map((e, id) => (
          <RatingItem e={e} id={id} />
        ))}
      </section>
    </div>
  );
};

export default RatingList;
