# First of a Kind

A few days ago, I decided to write my own little blog software.
Why? Well, first of all, I wanted something very simple which
I could place on my GitHub page. I mean it's not like there is
no blog software around which I could use for that case (e.g the
famous [Jekyll](https://jekyllrb.com/)), but somehow I wanted
something even simpler. So I invented another wheel: Pluto Blog

What does the name mean? Well, as a child I was fascinated by astronomy
and knew all our nine Planets when I was seven years old. A few
years later I was confronted with the fact, that due to new insights
Pluto lost its status as a planet. For me, that was kinda hard to
accept, but I did (at least I believe so).

When I wanted to name the blog software I thought it is a
tiny piece of software and honestly it would not be a *real*
blog software (as it would be missing the whole editor part).
That reminded me of Pluto, the tiny planet of my childhood
that was just almost a planet. Therefore, I named my
'almost a blog' software Pluto Blog.


## What is Pluto Blog?

Well, I said it is a simple static blog generator. In essence,
it is just a HTML page with a few [riot.js](http://riotjs.com)
components, which use [showdown.js](https://github.com/showdownjs/showdown)
to render markdown pages and [velocity.js](http://velocityjs.org)
to create some performant animations.

The generator is a bash script which generates a JSON index
file for all blog posts and an RSS file. Some might ask 'why bash'?
Honestly, I kinda like bash. Especially for 'getting things done' jobs.
But bash has at least one major downside as it is not very platform
independent. Therefore, I consider rewriting the generator in
[Go](https://golang.org) some day ;-)

So the day to day usage is pretty basic too:

1. write a blog post
2. start the generator
3. copy the result to your web space


## Conclusion

I am happy to have brought Pluto Blog to this state where I can use
it on my GitHub page. By the way, did you spot that RSS Symbol
over there?
