// Exercise: Level 1
let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
challenge.toUpperCase();
challenge.toLowerCase();
console.log(challenge.substring(0, 2));
console.log(challenge.substr(0, 1));
console.log(challenge.substring(3,22 ));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
let newStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(newStr.split(','));
console.log(challenge.replace('JavaScript', 'Python'));
//25
console.log(challenge.repeat(2));

// Exercise: Level 2

{
    let str = `The quote 'There is no exercise better for the heart than reaching down
    and lifting people up.'
    by John Holmes teaches us to help one another.`;
    console.log(str);
    let newStr1 = `"Love is not patronizing and charity isn't about pity, it is about love.
    Charity and love are the same -- 
    with charity you give love, so don't just give money but reach out your hand instead."`;
    console.log('10' === 10);
    console.log(+'10'=== 10);
    console.log(parseFloat('9.8') === 10);
    console.log(parseFloat('9.8'));
    console.log(Math.round(parseFloat('9.8')) === 10);
    console.log('python'.includes('on'));
    let randomNum = Math.floor(Math.random() * 101);
    console.log(randomNum);
    let randomNum50 = Math.floor(Math.random() * (((100 - 50) + 1) + 50));
    console.log(randomNum50);
    let escapeStr = `1\t 1\t 1\t 1\t 1\n
    2\t 1\t 2\t 4\t 8\n
    3\t 1\t 3\t 9\t 27\n
    4\t 1\t 4\t 16\t 64\n
    5 \t1 5\t 25\t 125`;
    console.log(escapeStr);
}


// Exercise 3

{
    let str = `'Love is the best thing in this world. Some found their love and some are still looking for their love.'`;
    console.log(str.match(/love/gi).length);

    const sentence = 'I am a teacher, and I love teaching. There is nothing; as more rewarding as educating and\
     empowering people. I found teaching more interesting than any other jobs. Does this\
      motivate you to be a teacher This 30Days Of JavaScript is also the result of love of teaching';

      console.log(sentence.split(' '));


    let annualIncome = (5000*12) + 10000 + 15000;
    console.log(annualIncome);
}

