const spinner = [`\r|    `, `\r/    `, `\r-    `, `\r\\    `, `\r|    `];
let timer = 100;
while (timer <= 1900) {
 for (const index of spinner) {
  setTimeout(() => {
   process.stdout.write(index);
  }, timer);
  timer += 200;
 }
}
setTimeout(() => console.log(), 2100);