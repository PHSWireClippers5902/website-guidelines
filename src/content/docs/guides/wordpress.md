# Using WordPress
You might know that we're piggybacking off Mr. Reynolds for our web hosting. This means no Cloudflare and a few other things. 

## Themes
In past, we've used themes from all sorts of sources with varying success. Ideally, we should be going for speed - therefore, we're only using
WordPress themes that **use the Site Editor**. This ensures that everything is customisable and it also reduces the file size we send to computers.

TL;DR: Use Site Editor themes. It's faster for everyone. (There's even a filter!)

## Plugins
In past, we've also had a lot of plugins that remain unused. These can potentially prolong the time used to load the website.

### WPMU Dev
[@lwu877](https://github.com/lwu877) has loaded up the website with plugins mainly from the same source - WPMU Dev. These include:
- Branda (used to brand the [login page](https://wireclippers.org/wp-login.php) and the WordPress UI with our logo)
- Defender (used in tandem with Solid Security to run general security checks)
- Forminator (used for forms, like on our [sponsorship page](https://wireclippers.org/sponsor-us) and our [contact form](https://wireclippers.org/contact-us))
- Hummingbird (used to optimise the files we send to our users - makes the website faster for everyone)
- SmartCrawl (used for SEO purposes - more on that in the writing page)
- Smush (used to compress images - it's faster and we don't generally need full-resolution photos being loaded on the website)

and we also use them for:
- Smart Uptime (gives us information on when the website is down, for how long, etc.)
- Broken Link Checker (gives us information on broken links and where to fix them)

All of these plugins can be managed through [our Hub account](https://wpmudev.com/hub2).

## Automattic
In addition, we also have plugins from Automattic Inc. that can be managed through [wordpress.com](https://wordpress.com). These include:
- Akimsnet (used in tandem with hCaptcha to stop spam)
- JetPack (general use plugin used to get stats, do amazing things with the editor, and a bunch of other general optimisations)

We also use Google's Site Kit for verification on Google and Bing Search Console. 
