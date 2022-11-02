function 삼육구게임1 (n){
    if(n%3==0){
        console.log('박수')
    }else{
        console.log('통과');
    }
}

삼육구게임1(6)
삼육구게임1(12)
삼육구게임1(11)
삼육구게임1(15)


function 삼육구게임2 (num) {
    if(num%9==0){
        console.log('박수두번')
    }else if(num%3==0){
        console.log('박수한번');
    }else{
        console.log('통과');
    }
}

삼육구게임2(6)
삼육구게임2(9)
삼육구게임2(11)

function 합격했냐 (개론,민법){
    if(개론<0||개론>100||민법<0||민법>100){
        console.log('장난노노')
    }
    else if(개론 < 40 || 민법 < 40){
        console.log('과락임 불합격');
    }else if(개론 + 민법>=120){
        console.log('합격임');
    }else{
        console.log('총점120안넘음');
    }
}

합격했냐(170,70)
합격했냐(70,70)
합격했냐(30,100)
합격했냐(50,50)

function 찐삼육구(num){
  if(num%10 == 3 ||num%10 == 6 ||num%10 == 9){
    console.log('짝!')
  }else{console.log('통과')}
    
}

찐삼육구(3)
찐삼육구(13)
찐삼육구(12)
찐삼육구(39)