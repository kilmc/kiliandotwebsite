---
title: 'Battery'
slug: 'battery'
---

At some point back in 2016 or 2017 I got really into Atomic CSS. I was working at Kickstarter at the time and as I read through [TKTK Article from MRMRS] felt like using Atomic CSS would actually address a lot of the problems we had been dealing with. I was still a designer at the time but I tried my best to put together a working version of a utility class library that might be enough for a proof of concept. We discussed it internally and after some feedback and contributions from other members of the team we got the project through.

As the years went on with us using Atomic CSS I started to notice some flaws with it as well and wondered if I could build something with Javascript that might be able to sold these problems.

The main things I wanted to solve were

1. Auto documentation of the library
2. Reduce the size of the library to only what we used
3. Making it easy to add or remove classes from the library

I then embarked on a long journey with a lot of guidance from other Engineers at Kickstarter to help me build this thing out.

My first idea just simply to move things over to being generated by Javascript. I started to run into limitations in SCSS and figured that I could probably do what I was hoping by using Javascript.

Overtime I started to feel like it was too limiting to simply be generating the library with Javascript because there was still a lot of potentially unused code. As I started to explore things more and started to wonder if instead of using JS to generate the whole library, I could actually define the naming convention for the system and then have the system generate the css from passing it a classname.

This was huge. If you look at this Gist, this was my first version of this, what I called at the time, reverse lookup system.

```javascript
const spacing = {
	m: 'margin',
	mt: 'margin-top',
	mr: 'margin-right',
	mb: 'margin-bottom',
	ml: 'margin-left',
	p: 'padding',
	pt: 'padding-top',
	pr: 'padding-right',
	pb: 'padding-bottom',
	pl: 'padding-left',
	h: 'height',
	'min-h': 'min-height',
	'max-h': 'max-height',
	w: 'width',
	'min-w': 'min-width',
	'max-w': 'max-width'
};

const scalar = (x) => Math.ceil(x * 0.6 * 100) / 100;

const reverseLookup = (cx) => {
	const pattern = /([a-z]+|[a-z]+-[a-z]+)(\d|-\d)/;
	const [, prop, value] = cx.match(pattern);

	return { [cx]: { [spacing[prop]]: `${scalar(+value)}rem` } };
};

console.log(reverseLookup('m1')); // {m1: {margin: "0.6rem"}}
```

This was really the beginning of something that would expand into a truly epic project for me, my first solo programming project.

I'm going to detail some of the parts of that project that I'm proud of, some things I learned while doing it and generally just documenting if for posterity.

In the end though, I didn't ever finish this thing. I worked for a long time to try and create a Webpack plugin but it was such a nightmare that I ended up giving up on it after several attempts. I did think that a custom naming convention was important for adoption but I have realized that standards can be pretty useful.

There are two pretty great parts to this story, one is that a group of Engineers were working on this problem around the same time I was and by the time I abandoned it Tailwind CSS was really starting to pick up steam. I've since started using it in my personal projects and it really does most, if not all that I had wanted from Battery. There are some fun things that I was really excited about that I don't think work in Tailwind but the point of building this was not that I wanted to be the one to build it, but that I wanted the tool to exist, and now it does.

The second part to the story is how much I learned. I learned about code generation, about types and typescript. I became really really comfortable using map, filter and reduce. I got to understand the power of RegExp and some of it's quirks. I learned about what makes up a programming language, what a lexer and a parser are. I learned about ASTs, about build systems, about the design of libraries in code and how much thought needs to go into their design for both end-user experience and maintenance. I learned about testing, about releasing packages on NPM. So so so many skills that have all helped me in my day job but maybe more importantly have given me confidence in taking on problems with code.