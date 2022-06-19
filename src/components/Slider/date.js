import React from "react";
import TodayIcon from '@mui/icons-material/Today';

function DateComp(){
    var toDayMa = new Date();
    //var currentMaDate = toDayMa.toUTCString();
    var currentMaDate = currentFrDate = toDayMa.toDateString()+" "+toDayMa.getHours() + ":" + toDayMa.getMinutes();
    toDayMa.setHours(toDayMa.getHours() + 1);
    var currentFrDate = toDayMa.toDateString()+" "+toDayMa.getHours() + ":" + toDayMa.getMinutes();
        return(
        <div>
            <TodayIcon fontSize="inherit" /><span>{currentMaDate} (GMT)</span><br/>
            <span> {currentFrDate} (GMT +1)</span>
        </div>
    )
}
export default DateComp;