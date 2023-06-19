---
  title: "The website architecture"
  description: "A brief overview of the website architecture"
  publishDate: "2021-05-25"
  readingTime: 7
  category: "tech"
---

I've been wanting to build a personal website for a while now. I've had a few attempts in the past, though they were all short-lived and eventually taken down. I think the main reason for this was that I really didn't have a clear idea of what I wanted to do with it. I tried to design the website around a particular theme, but I would always get bored of it after a while (I suck at design by the way).

This website was supposed to be a side project to put in my resume, in order to develop my skillset and enhance my knowledge, plus I'm pretty free at the time of building the website. However, I decided to take it more seriously and actually put in the time to build and maintain it, and hopefully it will become something that I can be proud of.

I will be giving the overview of all the technologies that went into the making of this website, plus some of the design decisions that I made along the way.

## Design

I'm not a designer, and I'm not good at it either, as you could probably tell by how modern and sleek this website looks. I'm not gonna lie, it took some time to research what best fits for me. I even tried to sketch out the design, played around with [Figma](https://www.figma.com) a bit and laid down some boxes and rectangles just to delete them afterwards.

I love minimalism, the idea of "less is more" really resonates with me. Since I wanted to guide this website towards a more personal and content-driven direction, I decided to go with a minimalistic and simple design (for some it looks boring, but I kinda like it). I've been following this guy - [James Scholz](https://www.youtube.com/@JamesScholz) (he's a beast btw), for quite some time now and only knew he had a [website](https://jvscholz.com/) lately. I mean look at it, it looks beautiful, simple, clean and the important thing is that it gets the point across. Other source of inspiration must definitely be [this one](https://www.alexhughes.dev/), and [this one](https://www.bugswriter.com/). The color palette is also inspired by [this website](https://www.rust-lang.org).

See what I mean right? They're not fancy, but for me, they're beautiful. And so I decided to take inspiration from them and build my website around that idea.

## Tech stack

Since it's my personal website, I wanted to try out some new technologies, some "new kids on the block" if you will. After a bit of research, I made the following decisions:

- [Preact](https://preactjs.com/): A fast 3kB alternative to React with the same modern API.
- [Astro](https://astro.build/): An all-in-one web framework for building fast, content-focused websites that serves a unique [zero-JS frontend architecture](https://docs.astro.build/en/concepts/islands/).
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework that helps build websites fast.
- [TypeScript](https://www.typescriptlang.org/): A superset of JavaScript that adds static typing to the language.

### Preact

I've been using [React.js](https://react.dev/) for a while now and I love it. I mean there's a reason why it's the most popular JavaScript library out there. However, there's one problem, I want my website to be [blazingly fast](https://www.youtube.com/@ThePrimeagen). And so I chose [Preact](https://preactjs.com), a lightweight alternative to React, mainly because (you can view the full list on their website but I'm just gonna list out the ones that I think are important):

- **Small size:** Preact is only 3kB in size, which is very small compared to React. That means less JavaScript to download, parse and execute - leaving more time for my code and less time on fighting to keep a framework under control. 
- **Closer to  the DOM:** Preact provides the thinnest possible Virtual DOM abstraction on top of the DOM and can be used directly in the browser without any transpilation steps. 

I use Preact mainly for interactive components in the website. For the static parts, I use the built-in component of Astro, which is what I'm gonna talk about next.
### Astro

Just building websites alone with just a UI library is not enough, I needed a framework to help me with the routing, optimization and other cool stuff. As a matter of fact, I actually migrated this website from [Next.js](https://nextjs.org/) to [Astro](https://astro.build/). I love Next.js, it's a very powerful framework that comes with a lot of features out of the box, including a built-in routing system, Server-Side Rendering (SSR), Static Site Generation (SSG), but it might be a bit overkill for a simple website like this. Furthermore, Astro lets you integrate with different UI libraries, that means if I get bored one day and decided to switch to [Angular](https://www.youtube.com/watch?v=yjTVMXammAw), I can. Another selling point for me is that Astro comes with a built-in **content folder**. This adds another layer on top of my plain markdown files, which allows me to have metadata, typing and validation for my content.

I wanted to try out something new, and since this website is content-focused, Astro is just the perfect fit for me. You can learn more about it on their [website](https://astro.build/). I guess I will be writing a blog post about my experience migrating from Next.js to Astro some day.

### Tailwind CSS

I remember the time when I first used vanilla CSS in my projects and let me tell you, it was such a horrible experience. Having to think of the class names, spending hours just to "center a div", oh and responsiveness! To be honest, I spent the majority of my time trying to tackle these mundane tasks rather than focusing on the actual logic and content of the website.

The moment I decided to use [Tailwind CSS](https://tailwindcss.com/), I knew that I would never go back to vanilla CSS ever again. Just like its name, it makes your coding experience fast like a wind. Although it does take some time to get the hang of it at first and a long class name in exchange, but it's definitely worth it.

```
  <article
    id="blogPost"
    class="prose-lg md:prose-base dark:text-light prose-pre:bg-dark/5 dark:prose-pre:bg-light/75 prose-pre:overflow-x-scroll prose-headings:font-bold prose-headings:text-primary dark:prose-headings:text-primaryDark prose-a:underline prose-a:text-primary dark:prose-a:text-primaryDark prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:border-dark/75 dark:prose-blockquote:border-light/75 prose-li:list-disc prose-code:bg-dark/25 dark:prose-code:bg-light/25"
  >
```

This is a HTML tag from my source code. Beautiful innit?

### TypeScript

JavaScript has been my go-to language for the past few months. I love how flexible it is and how easy it is to get started. However, the lack of static typing can be a pain sometimes. I've had my fair share of bugs that could have been avoided if I had used a statically typed language. One of my friends recommended me to give [TypeScript](https://www.typescriptlang.org/) a try, and well I'm glad that I did. No more `undefined is not a function` errors, no more `Cannot read property 'x' of undefined` errors, and no more `Property 'x' does not exist on type 'y'` errors. It's just solid.

## About the blog posts

I was on the fence about what to use for the blog posts. I was thinking about using a CMS (Content Management System) like [Sanity](https://www.sanity.io/), [Contentful](https://www.contentful.com/), or [Prismic](https://prismic.io/). However, I decided to run my blogs on a low-tech solution. It has no CMS, but plain markdown files are parsed to HTML with a bit of restyling and uploaded to the server. I love the simplicity of markdown files and I think it's more than enough for my needs. Whenever I want to edit or write a new blog post, I just open up a new file and start writing. No need to login, no need to worry about the CMS going down or having updates, and no need to worry about my free-tier account going out of limits! I then push to my Github repository and [Vercel](https://vercel.com/) will automatically build and deploy the website for me.

## What's next?

I will continue to improve the website and build more projects in the future. Also, I'm planning on adding some more features to the website like:

- Comment section: I'm still not sure about this one since it will require a lot of work to implement and maintain. I'm thinking about using some BaaS (Backend as a Service) for this.
- Multi-language support: I'm planning on adding Vietnamese support to the website since I'm Vietnamese and I want to share my knowledge with my fellow Vietnamese developers. In addition to that, I know French so I might add support for this language as well in the future. Not rooting for this one though, since I'm not sure if I will be able to maintain the translations. But anyway, fingers crossed!
- More blog posts: Of course! I'm still learning and exploring new things every day and this time I want to document my journey.