import commandLineArgs from "../node_modules/command-line-args/dist/index.mjs";
import commandLineUsage from "command-line-usage";
import { readFile } from "fs/promises";

const optionDefinitions = [
  {
    name: "help",
    alias: "h",
    type: Boolean,
    description: "Display this usage guide.",
  },
  {
    name: "src",
    alias: "s",
    type: Number,
    multiple: true,
    description: "The number of the problem file to run",
    typeLabel: "<number>",
  },
];

const options = commandLineArgs(optionDefinitions);
if (options.help || Object.keys(options).length === 0) {
  const usage = commandLineUsage([
    {
      header: "Code advent master",
      content: "",
    },
    {
      header: "Options",
      optionList: optionDefinitions,
    },
    {
      content: "Project home: {underline https://github.com/me/example}",
    },
  ]);
  console.log(usage);
} else {
  const day = Math.trunc(options.src);
  const part = (options.src * 10) % 10;

  const { default: module } = await import(`./day${day}/part${part}.mjs`);
  const fileData = await readFile(`src/day${day}/test.txt`, "binary");
  const result = module(fileData);

  console.log(result);
}
