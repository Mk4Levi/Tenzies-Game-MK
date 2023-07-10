//
function Die(props) {
  const myStyles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div onClick={props.holdDice} className="die-face" style={myStyles}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

export { Die };
