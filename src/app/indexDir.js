const dirButtons = Array.from(document.querySelectorAll('button'));

for (const button of dirButtons) {
    button.addEventListener('click', (e) => {
        let dir = e.target.id
        window.location.href = `/educative-system/src/pages/${dir}.html`;
    })
}