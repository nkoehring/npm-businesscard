import {
  blueBright,
  bold,
  white,
  greenBright,
  red,
  underline,
} from "colorette";
import boxen from "boxen";

const boxOptions = {
  padding: 1,
  margin: 0,
  borderStyle: "double",
};

const work = white(`Principal Frontend Engineer @ ${bold(red("YPOG"))}`);
const twitter = blueBright("https://twitter.com/koehr_in");
const github = blueBright("https://github.com/nkoehring");
const forge = blueBright("https://git.koehr.ing/");

const npm = blueBright("https://www.npmjs.com/~koehr");
const npx = white("npx koehr");
const www = blueBright("https://koehr.ing");

function withHeading(heading, text) {
  const coloredHeading = white(bold(`     ${heading}:`));
  return `${coloredHeading} ${text}`;
}

const headline = `${white(bold(underline("              Norman Köhring  ")))}`;

const output = [
  headline,
  "",
  withHeading("   Work", work),
  withHeading("    WWW", www),
  withHeading("  Forge", forge),
  withHeading(" Github", github),
  withHeading("    NPM", npm),
  withHeading("   Card", npx),
].join("\n");

console.log(greenBright(boxen(output, boxOptions)));
