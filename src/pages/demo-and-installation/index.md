---
title: Demo and installation instructions
date: "2018-01-19T03:00:00.000Z"
discussionId: demo-and-inst-instrs
---

Talkyard is an embedded commenting system for Gatsby and other static site generators.
It's [open source](https://github.com/debiki/ed-server/); you can install for free on your server.
Or use our serverless [hosting](https://www.talkyard.io) — no ads, no tracking, free for low traffic blogs.
<!-- Lightweight, just 140 kb javascript (compare with Disqus, about 750 kb). -->

This website is a static Gatsby blog, with Talkyard comments — look at the bottom of the pages.
Talkyard is forum software too, with chat and question-answers features:
you can create a community for your website, integrated with the blog comments.

Demo video:

<iframe src="https://player.vimeo.com/video/249611399" width="684" height="385" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

<!--
<iframe src="https://player.vimeo.com/video/249611399" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/249611399">ed-emb-cmts-(3)</a> from <a href="https://vimeo.com/user78434986">Magnus Lindberg</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

<iframe width="684" height="385" src="https://www.youtube.com/embed/2L0eYcsCcbE" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
-->

<br>
<!-- <a href="/like-about-gatsby">Here's a demo Gatsby discussion.</a> -->

<a href="https://www.kajmagnus.blog/new-embedded-comments">Demo discussion</a> (the one in the video).
<br>
<br>

### Quick test if this is for you

Three quick steps for trying out Talkyard, without signing up or getting a server:

1. Install the Talkyard plugin: (this is for Gatsby 1, might not work with Gatsby v2)

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
         talkyardServerUrl: 'https://comments-demo.talkyard.io'
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

Help forum: <https://www.talkyard.io/forum/latest/support>

### Real installation

Go to <https://www.talkyard.io/plans> and choose Blog Comments.
Follow the instructions — and, in gatsby-config.js, change `talkyardServerUrl` 
to the address of your new Talkyard blog comments site,
e.g. `https://comments-for-your-blog.talkyard.net`.

You should also add a frontmatter `discussionId: per-discussion-id` to your blog posts / articles,
so you can change the URL to a blog post, without the discussion disappearing; [read more here][disc_id_docs].

You can ask for help in [the support forum][support-cat], and [suggest ideas][ideas-cat].

[support-cat]: https://www.talkyard.io/forum/latest/support
[ideas-cat]: https://www.talkyard.io/forum/latest/ideas
[disc_id_docs]: https://www.npmjs.com/package/@debiki/gatsby-plugin-talkyard#changing-the-url-of-a-blog-post
