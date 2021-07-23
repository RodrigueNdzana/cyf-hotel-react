import React from "react";

export default function Restaurant({ orderOne }) {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => orderOne}>
        Add
      </button>
    </div>
  );
}
