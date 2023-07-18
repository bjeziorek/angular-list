# How it was made and why

So I wanted to refresh my knowledge about Angular, I didn't work with it for a while concentrating mostly on React.
I decided to make a dictionary of Japanese signs with custom quizzes and simple puzzles using Angular basic features, router, services, RxJS, and additionally GSAP animation library with which I have had a lot of fun the last few days :).

# Day 1

Refreshing Angular syntax, directives, and data binding by browsing through the Tours of Heroes tutorial as it covers all that is important. Went pretty smoothly.

# Day 2 

Continuation of tutorial and playing with syntax. 

# Day 3

Adding services and my Japanese characters database in JSON. Listing all characters on animated cards. Setting [innerHTML] directive to callback changes the element's content but I'm afraid that calling 2000+ callback on hover which mostly changes empty string to empty string is super inefficient ;) so I'll have to find another approach. Maybe just generating two way bound object keeping the state of fields of all characters? I believe it will be far better (but at least I refreshed the innerHTML directive - the key is positive thinking ;) ). 
I also added simple dynamic filtering.

# Day 4

In the last element in each row, there is a bug in the GSAP animation. I used display: flex and flex-wrap: wrap which causes the last element on the animation to jump to the next row as it scales up and messes everything up. I tried to play with position, z-index, and gap (the gap slightly improved it but only for the first line), got also a few other suggestions but no luck so far, I need a while to think about it, maybe change the whole approach of displaying the characters? The animation is pretty cool but I'm not sure if it's user-friendly in a UX context, to be honest.
