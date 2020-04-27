
export default function Modifier(e) {
    
    let y = ''
    if (e <= 1){
      y = '-5'
    }
    else if (e > 1 && e < 4) {
      y = '-4'
    }
    else if (e > 3 && e < 6) {
      y = '-3'
    }
    else if (e > 5 && e < 8) {
      y = '-2'
    }
    else if (e > 7 && e < 10) {
      y = '-1'
    }
    else if (e > 9 && e < 12) {
      y = '0'
    }
    else if (e > 11 && e < 14) {
      y = '+1'
    }
    else if (e > 13 && e < 16) {
      y = '+2'
    }
    else if (e > 15 && e < 18) {
      y = '+3'
    }
    else if (e > 17 && e < 20) {
      y = '+4'
    }
    else if (e > 19 && e < 22) {
      y = '+5'
    }
    else if (e > 21 && e < 24) {
      y = '+6'
    }
    else if (e > 23 && e < 26) {
      y = '+7'
    }
    else if (e > 25 && e < 28) {
      y = '+8'
    }
    else if (e > 27 && e < 30) {
      y = '+9'
    }
    else if (e > 29) {
      y = '+10'
    }
    return y;
}