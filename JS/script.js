

const setBackground = () => {
    let p1 = document.querySelector(".first");
    let p2 = document.querySelector(".last");

    /*I:  stylowanie in-line  */
    /*      p1.style.backgroundColor = 'red';
            p2.style.backgroundColor = 'yellow'; */


    /*II: stylowanie z wykorzystaniem klasy (ZALECANE)  */
        p1.classList.add('bg-red');
        p2.classList.add('bg-yellow');


    /*III: metoda toogle  tj. aktywacja /deaktywacja koloru w zalezności od tego co zostało aktywowane czyli widoczne na stronie */
        p1.classList.toogle('bg-red');
        p2.classList.toogle('bg-yellow');
}

let btnSetBackground = document.getElementById('set-background');


/* !ważne: bez nawiasów bo przypisujemy funkcję a nie uruchamiamy !  */
btnSetBackground.addEventListener('click', setBackground)       


