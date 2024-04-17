---
title: Documentation
description: How to maintain this little website. 
---

So, you need to write some documentation on this website. 

## File Format
Most documentation in here is written in markdown. However, you need to put the right schema at the top of the markdown page, or else it won't build correctly and bad things will happen. 

At the top of each markdown file, you should have this schema.

`---`
<br>
`title: [your title here]`
<br>
`description: [some general information about what this page is for]` <br>
`---`

It also shows this information at the top of the website. 

## Changing the Sidebar

Most information regarding the sidebar can be found in the root director under `astro.config.mjs`. You'll need to open it up in VSCode or another IDE - it's basically javascript. In order to create a new page, just add a new markdown file into the `/reference/` or `/guides/` directory. It'll automatically show up on the sidebar. 

## Files we probably shouldn't touch
Given it took Lex (maintainer of this documentation, also person who revamped the website) over two weeks to finally figure out how to use Astro, they'd appreciate it if someone new didn't break it as soon as they leave. 

Generally, we don't touch most folders. Please __do NOT__ change anything inside `node_modules`, anything within `package-lock.json` or `package.json`, or anything inside `.github` unless you __ABSOLUTELY__ know what you're doing. 

## Troubleshooting

So, it's not building correctly. Did you check to make sure everything you need is there?

:::note
It's generally a good idea to not build everything on Github (it wastes build minutes) so we suggest running an NPM dev server. Open a terminal, `cd` into the root directory, then start up a local dev server with `npm run dev`. It also gives you comprehensive information with what isn't right in your terminal.
:::

If it's still not building correctly, check these things:

- Is the correct content schema at the top of the page? It's weird, but the entire website __will NOT build correctly__ if you forget it. 
- Is there any stray files in `/docs`? Check to make sure that there's no stray typescript or javascript files inside `/docs` or any child folders, then try again.

Feel free to add more to this list as you encounter more issues with Astro. It's surprisingly easy to use, but there's a little bit of a learning curve. 