<?php



if(!function_exists('percentageCalculation')){
    function percentageCalculation($base_value, $total_value){
        return ($base_value *100) / $total_value;
    }
}


if(!function_exists('quiz_type_name')){
    function quiz_type_name($quiz_type){
        switch($quiz_type){
            case 1:
                return 'True/False';
            break;
            case 2:
                return 'Multiple Choice';
            break;
            default:
            return 'Not Identified';
        }

    }
}

/* if(!function_exists('date_formatted')){
    function date_formatted($date){
        return Carbon::parse($date_attendance)->format('d-m-Y');
    }
}
 */
