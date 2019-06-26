const args = ["start"];
const opts = {
  stdio: "inherit",
  cwd: "product",
  shell: true
};
require("child_process").spawn("npm", args, opts);

const args2 = ["start"];
const opts2 = {
  stdio: "inherit",
  cwd: "products",
  shell: true
};
require("child_process").spawn("npm", args2, opts2);
