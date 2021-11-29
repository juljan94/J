var name = prompt("Si e ke emrin?");
alert(`Ckemi, ${name}. Ke deshire te shikosh dicka te bukur?`);
document.querySelector('html').innerHTML = `
  <h1>Mire se erdhe ${name}!</h1>
  <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif">
`;
