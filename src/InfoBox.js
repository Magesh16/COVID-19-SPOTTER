// import React from "react";
// import { Card, CardContent, Typography } from "@material-ui/core";

// function InfoBox({ title, cases, total, death }) {
//   return (
//     <Card className="infoBox">
//       <CardContent>
//         <Typography className="infobox_title" color="textSecondary">
//           {title}
//         </Typography>
//         <h2 className="infobox_cases">{cases}</h2>
//         <Typography className="infobox_total" color="textSecondary">
//           {total} Total
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default InfoBox;
import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";
function InfoBox({ title, isRed, isGrey, active, cases, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--brown"
      } ${isGrey && "infoBox--grey"}`}
    >
      <CardContent>
        {/* Title */}
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>

        {/* Number of Cases */}
        <h2
          className={`infoBox_cases ${!isRed && "infoBox_cases--green"} ${
            isGrey && "infoBox_cases--grey"
          }`}
        >
          {props.isloading ? <i className="fa fa-cog fa-spin fa-fw" /> : cases}
        </h2>

        {/* Total Cases */}
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;