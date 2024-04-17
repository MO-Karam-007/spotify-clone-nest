function sort_alph(str)
{
    str = str.toUpperCase();

    return str.charCodeAt(0) - 'A'.charCodeAt(0) + 1

}





const alphabetPosition = (text) =>
{
    str = ''
    text = text.split('')
    for (let letter of text)
    {
        console.log(`Letters : `, letter);



        console.log(sort_alph(letter));
        if (sort_alph(letter) > 26 || sort_alph(letter) < 1)
        {
            str = str.concat(` `)
            continue
        } else
        {
            str = str.concat(`${sort_alph(letter)} `)
        }


        // console.log(`Letter : `, letter);
    }
    return str.trim()


}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

'20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11 '
'20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'