// Step 1:

/*  Create a form and get pre-filled URL    *
*   This is my link for pre-filled form     */
//  https://docs.google.com/forms/d/e/1FAIpQLSfNC4OzmzvRC7JmODkrYeQWEixpy3_4iPvbmuPgMvBYSLkCgg/viewform?usp=pp_url&entry.776520014=24&entry.681507226=5.8&entry.516070196=Male&entry.1747364981=Yes

// Step 2:
/*  Change your Form Link                   *
*   Make Following changes in your URL      *
*   1: Change 'viewform' to 'formResponse'  *
*   2: Add this at the end of URL:          *
*       '&submit=SUBMIT' (without quotes)   *
*                                           *
*   Your new link will look like this       */
//  https://docs.google.com/forms/d/e/1FAIpQLSfNC4OzmzvRC7JmODkrYeQWEixpy3_4iPvbmuPgMvBYSLkCgg/formResponse?usp=pp_url&entry.776520014=24&entry.681507226=5.8&entry.516070196=Male&entry.1747364981=Yes&submit=SUBMIT

// Step 3:
/*  Get values for your form fields         *
*   Since I have 4 fields, I'll get their   *
*   values like this                        */

function get_yes_no(){
    random_number = Math.round(Math.random());
    if(random_number==0){
        return "Yes";
    }
    return "No";
}

function get_random_age(min,range){
    return Math.round(Math.random() * range) + min      // get age between min to range+min
}

function get_height(min,range){
    // get height between 4.0 to 6.0 (4.0 to 4.0+random number from 0.0-2.0)
    return Math.floor(Math.random() * (range * precision - 1 * precision) + 1 * precision) / (1*precision)+min;
}

function get_gender(){
    gender = Math.round(Math.random());     // generate random number from 0-1
    // you can do this if you have more than 2 options: Math.round(Math.random()*3)+1;
    if(gender==0){     //   if random number is 0
        return "Female";
    }else{  //  if random number is not 0
        return "Male";
    }
}

age = get_random_age(17,40)     // get age between 17 to 57
height = get_height(4.0,2.0)    //get height between 4.0 to 6.0
gender = get_gender()
sure_or_not = get_yes_no()

