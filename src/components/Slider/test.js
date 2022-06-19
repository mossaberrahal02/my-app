import React from "react";
import App from '@mossab_errahal/library/src/lib/App.js'
import {getAllHolidays} from '@mossab_errahal/library/src/lib/utils.js'

export default function Ha(){
    return(
        <div>
            {getAllHolidays(2022)}
        </div>
    )
}