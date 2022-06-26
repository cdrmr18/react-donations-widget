import React, { useEffect, useState } from "react";

const MainCard = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="card">
      <div class="card-header">
        <div class="logo">logo</div>
      </div>
      <div class="card-body">
        <h4 class="title">title</h4>
        <p>Something</p>
      </div>
    </div>
  );
};

export default MainCard;
