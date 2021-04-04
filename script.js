// Step 1:  Fetch Prefilled link to form

/*  Create a form and get pre-filled URL    *
*   This is my link for pre-filled form     */
//  https://docs.google.com/forms/d/e/1FAIpQLSfNC4OzmzvRC7JmODkrYeQWEixpy3_4iPvbmuPgMvBYSLkCgg/viewform?usp=pp_url&entry.776520014=24&entry.681507226=5.8&entry.516070196=Male&entry.1747364981=Yes

// Step 2:  Prepare form Link
/*  Change your Form Link                   *
*   Make Following changes in your URL      *
*   1: Change 'viewform' to 'formResponse'  *
*   2: Add this at the end of URL:          *
*       '&submit=SUBMIT' (without quotes)   *
*                                           *
*   Your new link will look like this       */
//  https://docs.google.com/forms/d/e/1FAIpQLSfNC4OzmzvRC7JmODkrYeQWEixpy3_4iPvbmuPgMvBYSLkCgg/formResponse?usp=pp_url&entry.776520014=24&entry.681507226=5.8&entry.516070196=Male&entry.1747364981=Yes&submit=SUBMIT

// Step 3:  Get random values for fields
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

// Step 4: Change values in URL
/*  Change your url and keep placing    *
*   values in your URL in sequence as:  */
url = "https://docs.google.com/forms/d/e/1FAIpQLSfNC4OzmzvRC7JmODkrYeQWEixpy3_4iPvbmuPgMvBYSLkCgg/formResponse?usp=pp_url&entry.776520014="+age+"&entry.681507226="+height+"&entry.516070196="+gender+"&entry.1747364981="+sure_or_not+"&submit=SUBMIT"


// Step 5: Generate random time for form submittion
function get_random_time(range,min){
    time = Math.floor(Math.random() * range) + min;     // generate number from min to min+range
    return time*60000;      // return milliseconds for form submission
}

window.setTimeout(function(){
    window.location.href = url;
}, get_random_time(57,3));  // get random time from 3-60 minutes & submit the URL.