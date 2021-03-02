module.exports = function toReadable (number) {

    let array_N_1_19 = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let array_N_20_90 = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];


  let numeric = number.toString();
  let humanReadable = '';
  numeric = numeric.replace(/[\, ]/g,'');
       if(number === 0 ){
         humanReadable = 'zero';
     }
  else if(number < 20){
    humanReadable = array_N_1_19[number];
  }else if(numeric.length < 3){
    humanReadable =  array_N_20_90[numeric[0]] + ' ' + array_N_1_19[numeric[1]];
  }else if(numeric.length < 4 ){
     if( numeric[1] !== '1'){
      humanReadable = array_N_1_19[numeric[0]] + ' hundred ' + array_N_20_90[numeric[1]] + ' ' + array_N_1_19[numeric[2]];
     }else{
      humanReadable =  array_N_1_19[numeric[0]] + ' hundred ' + array_N_1_19[numeric[1] + numeric[2]];
     } 
  }
  humanReadable = humanReadable.replace(/ +/g, ' ').trim();
  return humanReadable;  
  };
