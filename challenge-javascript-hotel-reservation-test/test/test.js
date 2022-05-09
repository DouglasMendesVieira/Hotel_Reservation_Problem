function it(description, fn) {
  try {
    console.log(
      "\x1b[35m%s\x1b[0m",
      `\n\nTeste Unitário: ${description}...`
    );
    fn();
    // Mostrará que o teste passou, se a função toBe jogar um erro
    console.log(`${description}...`);
  } catch (err) {
    console.log("\x1b[35m%s\x1b[0m", `Erro ao testar ${description}...`);
    console.error(err);
  }
}

function toBe(isTrue) {
  if (!isTrue) throw new Error();
}

module.exports = { it, toBe };
