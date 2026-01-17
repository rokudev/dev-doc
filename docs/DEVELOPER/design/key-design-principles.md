---
title: "Key Design Principles"
excerpt: ''
deprecated: false
hidden: true
metadata:
  title: ''
  description: ''
  robots: index
next:
  description: ''
---


A UI is invisible when users remain focused on their goal of navigating
and watching the content instead of figuring out how to use or operate
the UI. An invisible UI never draws any unnecessary attention to itself;
it's effortless to use because everything about it is evident, requiring
very little learning or energy. 

Constantly ask these key questions about your UI as you're designing and reviewing it.

- **Is your UI getting in the way?** TV viewers want to relax, have a
  beer in one hand, and a remote in the other. Then with as few
  actions and decisions as possible, watch something great. No one
  wants to use a UI; they just want to watch something entertaining.
  The app UI hence needs to be a delightful and useful tool.


- **Is it easy to use?** The most common design mistake is making the
  UI too complicated. Users not only need to operate the individual
  onscreen UI elements (micro-usability) smoothly but be able to
  accomplish their goals (macro-usability) easily. Users need to know
  where they're at and where to go next which means the navigation
  must be simple and obvious. Reducing complexity is more important
  than reducing the number of steps. Simplicity trumps speed.


- **Is it snappy?** The system must respond immediately to every user
  action with clear and distinct feedback. The UI needs to be highly
  responsive; otherwise, interactions can be frustrating.
  Transitions, animations, and load times must all be optimized for
  performance.


- **Is it easy to learn?** No one expects or wants training on how to
  use their TV. Instructions on how to use the UI are usually a sign
  of a weak design. Patterns and consistency mean actions and outcomes
  are predictable, which enables users to carry what they learn from
  one screen to other screens. Can you describe how to use your UI
  with the fewest number of "always true, simple rules"? The more
  exceptions there are to the general behavior of your system, the
  more complicated it is to learn and use.


- **Does it look simple?** The look of a UI also contributes
  significantly to its delight and ease of use. Ensure people can
  easily tell where the focus highlight is and where it can go. Create
  visual hierarchy so what's important has prominence and what's
  secondary is pushed back, demanding less attention. Keep screen
  information density low; blank space is essential, giving screen
  elements room to breathe and reducing a user's anxiety.

- **Is there too much?** More is not always better; more features,
  more choices, more information can lead to more work, noise, and
  complexity. Start with less to keep it simple and approachable;
  focus on the few things that have a significant impact and are
  relevant to users and their tasks. Eliminate all others. Later, look
  for signs or evidence of what more is needed.


- **Does it flow?** Not only does the app need to ensure that the sequence
  of steps a user must take from screen to screen flows in a logical
  and predictable order, but there should also be a consistent and
  natural flow on the screen itself. Avoid screen designs in which
  users must jump their gaze and focus all over in an unorganized or
  poorly choreographed order. A single pass top-down, left-right flow
  is the best when it comes to the final actions towards the right
  and/or bottom of the screen. The size, color, contrast, and
  placement of each element work together, creating a clear path to
  understanding the app interface.


- **Is it seamless?** Jumping or cutting from one state to another
  forces people to re-evaluate the new state and re-orient themselves.
  Use simple, clean, and minimal animations to help users see and
  follow the system's transition from one state to another. However,
  never make a user and their interactions with the system wait on
  animations (UI animations should not act as a governor to throttle
  the pace of the interaction). As your UI transitions from screen to
  screen, ensure a relevant element from the first screen carries over
  to the next screen for continuity of the context.


- **Is it focused?** To ensure better clarity and simplicity for any
  given screen, design each screen to have one specific purpose and
  make sure everything on that screen serves that single purpose.
  Don't overload screens and try to do too much at once. One screen,
  one purpose.


- **Is it forgiving?** No matter how clear your design is, people will
  make mistakes. You should handle user errors with as much attention
  to simplicity as the rest of the UI. Ensure users can easily back
  up, resume, and avoid dead-ends; always provide a way forward. Use
  error messages as a teachable moment and avoid technical language,
  placing blame, or making users feel stupid. Users must have a sense
  of comfort and trust at every step.


- **Is it entertaining and engaging?** The app should create an
  entertainment experience, in such a way that the UI itself should also be engaging
  and a joy to use. Be more visual and celebrate artwork and images,
  like movie posters, and make them big. Keep the UI experience human,
  approachable, light-hearted and comfortable throughout the screen.
  Pay attention to the tone and the wording of the text. Users are particularly 
  unobservant when playing games; they don't worry about breaking it. We
  too are creating an entertainment experience, and our system needs
  to be as approachable and forgiving as possible.


- **Is it legible?** Users sit an average distance of 10 feet (3
  meters) from their TV screen. While the TV screen may seem like a
  large display with plenty of UI screen real estate, from 10 feet
  away, the relative size of the TV screen can be smaller than a phone
  held 1 foot away from your face. Therefore, ensure everything is
  easy to read with high contrast and large text. The larger text has
  the added benefit of forcing you to be concise and reduce the total
  amount of information shown (information density) to just what's
  important.


- **Is it overscan safe?** TVs were made of cathode ray tubes (CRT) in
  anticipation of overscan that produced inconsistent images across TV
  sets, especially along the screen edges. To compensate, CRT TVs used
  overscan, which slightly enlarged the image itself so those bad
  screen edges would be outside the viewing area. The app should avoid
  showing any critical information too close to the edge of the TV
  screen. Since overscan still exists even on HDTVs, Roku recommends
  that the app sets at least a 5% margin within which to keep all of the UI to
  ensure its visibility. For a standard HDTV with 1920x1080 pixel
  resolution, this means having a 90 pixel left/right side margin and
  a 60 pixel top/bottom margin.