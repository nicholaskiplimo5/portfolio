import React from "react";

const Progress_bar = ({ bgColor, Progress, Height }) => {
  const parentDiv = {
    Height: Height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    marginTop:'30'
  }
  const childDiv = {
    Height: '100%',
    width: `${Progress}%`,
    backgroundColor: bgColor,
    borderRadius: 20,
    textAligh: 'right'
  }
  const progressText = {
    padding: 10,
    color:"black",
    fontWeight:90
  }

  return(
    <div style={parentDiv}>
        <div style={childDiv}>
            <span style={progressText}>{`${Progress}%`}</span>
        </div>
    </div>
  )

}
export default Progress_bar;
