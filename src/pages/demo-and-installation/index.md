---
title: Demo and installation instructions
date: "2018-01-19T03:00:00.000Z"
discussion_id: demo-and-inst-instrs
---

Talkyard is a new embedded commenting system for Gatsby and other static site generators.
It's [open source](https://github.com/debiki/ed-server/) so you can install it for free on your own server.
There's [hosting](https://www.talkyard.io), if you don't want to maintain your own server.
No ads, no tracking.
Lightweight, just 140 kb javascript (compare with Disqus, about 750 kb).

This website is a static Gatsby blog, with Talkyard comments below each blog post — look at the bottom of the pages.

Demo video:

<iframe src="https://player.vimeo.com/video/249611399" width="684" height="385" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<!--
<iframe src="https://player.vimeo.com/video/249611399" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/249611399">ed-emb-cmts-(3)</a> from <a href="https://vimeo.com/user78434986">Magnus Lindberg</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

<iframe width="684" height="385" src="https://www.youtube.com/embed/2L0eYcsCcbE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
-->

<br>
<a href="/like-about-gatsby">Here's a demo Gatsby discussion.</a>

<a href="https://www.kajmagnus.blog/new-embedded-comments">Longer demo discussion (the one in the video).</a>
<br>
<br>

### Quick test if this is for you

Maybe you don't want to get a server and install, or sign up for our hosted service,
just to find out if Talkyard works for your blog / website?
Here're three quick steps for you to try out Talkyard:

1. Install the Talkyard plugin:

   ```
   npm install --save @debiki/gatsby-plugin-talkyard  # with npm
   yarn add @debiki/gatsby-plugin-talkyard            # with yarn
   ```

1. Configure the plugin; use a dummy test comments account for now:

   ```
   // In your gatsby-config.js
   plugins: [
     {
       resolve: `@debiki/gatsby-plugin-talkyard`,
       options: {
         commentsServerUrl: 'https://comments.demo.talkyard.io'
       }
     },
     ...
   ```

3. In your blog post template: (or where you want the comments to appear)

   ```
   import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard';

   // And where the comments shall appear:
   &lt;TalkyardCommentsIframe />
   ```

Now, restart Gatsby and look at the comment section that should appear below the blog posts. You can post test comments **but** they'll disappear later on, some day (because you use a demo test account).<!-- Currently the comment section background color is always white, but later on you'll be able to tweak how it looks. -->

Are you satisfied with how it looks? If not, please tell us/me: <https://www.talkyard.io/forum/latest/support>.

If you like it, then go to <https://www.talkyard.io>, click Create Community and choose Blog Comments.
Follow the instructions — and, in gatsby-config.js, change the `commentsServerUrl` value
to the address of your new Talkyard blog comments site,
e.g. `https://comments-for-your-blog.talkyard.io`.

You should also add a frontmatter `discussionId: per-discussion-id` to your blog posts / articles,
so you can change the URL to a blog post, without the discussion disappearing; [read more here][disc_id_docs].


You can ask for help in [the support forum][support-cat], and [suggest ideas][ideas-cat].
Or post a comment below on this page (test comments are fine too).

[support-cat]: https://www.talkyard.io/forum/latest/support
[ideas-cat]: https://www.talkyard.io/forum/latest/ideas
[disc_id_docs]: https://www.npmjs.com/package/@debiki/gatsby-plugin-talkyard#changing-the-url-of-a-blog-post
