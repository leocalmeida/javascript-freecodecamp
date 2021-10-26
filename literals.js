const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

const {
  failure: [a, b, c],
} = result;
// const [a, b, c] = failure;

console.log(a, b, c);
