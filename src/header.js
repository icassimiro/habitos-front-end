import React, { useState } from "react";

import { Modal } from "./Modal";

export function Header() {
  const [isModalV, setIsModalV] = useState(false);

  return (
    <div className="totaldiv">
      <div className="divbtn">
        <button onClick={() => setIsModalV(true)} className="habitbtn">
          CRIAR NOVO HÁBITO
        </button>
      </div>
      {isModalV ? <Modal onClose={() => setIsModalV(false)}></Modal> : null}
    </div>
  );
}
