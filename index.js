#! /usr/bin/env node

const { blueBright, bold, white, greenBright, redBright } = require("colorette")
const boxen = require("boxen")

const boxOptions = {
  padding: 1,
  margin: 0,
  borderStyle: 'double'
}

const work = white(`Senior Consultant @ ${bold('Wunder')}${bold(redBright('dog'))}`)
const twitter = blueBright('https://twitter.com/koehr_in')
const github = blueBright('https://github.com/nkoehring')

const npm = blueBright('https://https://www.npmjs.com/~koehr')
const npx = white('npx koehr')
const www = blueBright('https://koehr.in')
const blog = blueBright('https://koehr.tech')

function withHeading(heading, text) {
  const coloredHeading = white(bold(`     ${heading}:`))
  return `${coloredHeading} ${text}`
}

const headline = `${white(bold('                    Norman Köhring '))}`

const output = [
  headline,
  withHeading('   Work', work),
  withHeading('Twitter', twitter),
  withHeading(' Github', github),
  withHeading('    NPM', npm),
  withHeading('    WWW', www),
  withHeading('   Blog', blog),
  withHeading('   Card', npx),
].join('\n')

console.log(greenBright(boxen(output, boxOptions)))
