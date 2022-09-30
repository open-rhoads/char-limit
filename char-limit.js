function showComment(){ 
    //get the length of the comments (with document/textbox objects)
    let userValue = document.getElementById('comments');
    //console.log(userValue);
    const userEntrySize = userValue.value.length;
    //console.log(userEntrySize);

    //find the characters left by subtracting 255 - length
    const remainder = 255 - userEntrySize;
    //console.log(remainder);
    document.getElementById('numleft').innerHTML = remainder;
    
    //condition if we go over 255
    //disable the field or just make the value equal to the first 255 characters.
    if (remainder <= 0) {
      
      userValue.value = userValue.value.substr(0, 255);
      document.getElementById('numleft').innerHTML = '0';

      //alert('you have run out of characters');
      //userValue.disabled;

    }
    
  }    