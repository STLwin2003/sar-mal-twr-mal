import React from "react";
import CommentItem from "../item/CommentItem";

const CommentList = () => {
  let name = ["shin thant", "wyne htet", "thwe gyi"];
  return (
    <div>
      <section>
        <h1>Comment List for Admin</h1>
        {name.map((e, id) => (
          <CommentItem e={e} id={id} />
        ))}
      </section>
    </div>
  );
};

export default CommentList;
