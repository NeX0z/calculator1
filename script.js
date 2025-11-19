const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');
        const id = e.target.id;

        if (id === 'clear') {
            display.innerText = '0';
            return;
        }

        if (id === 'backspace') {
            if (display.innerText.length > 1) {
                display.innerText = display.innerText.slice(0, -1);
            } else {
                display.innerText = '0';
            }
            return;
        }

        if (id === 'equals') {
            try {
                display.innerText = eval(display.innerText.replace(/x/g, '*').replace(/%/g, '/100'));
            } catch {
                display.innerText = 'Error';
            }
            return;
        }

        if (display.innerText === '0' && value !== '.') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    });
});