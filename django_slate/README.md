I succesfully created a Django app that uses React with typescript, but am having some errors getting the Slate.js 
component to work.

"backend" is the django app portion, and "frontend" is the react with typescript portion.

The App.tsx file contains the code for a Rich Text Editor that does correctly have the requested additional image functionality.
When I downloaded the [slate repository](https://github.com/ianstormtaylor/slate) and modified richtext.tsx in site/examples to be
the code that is in App.tsx of this project, it created the desired editor.

You can see a screen recording of this functionality [here](https://youtu.be/zB3jIC67fSs).

However, when I try and run this project within the Django app here, I get a [Hooks error](https://reactjs.org/warnings/invalid-hook-call-warning.html)
corresponding to slate.tsx:23 in the slate package I installed in my computer. This may be because it's calling useState
in the second line of the function? Although I'm not sure why this wouldn't cause an error when I run it as part of the
overall example code file. Nevertheless, I was unable to fix it, even when I tried to modify the slate package I had
installed itself. If you have any suggestions, please let me know! I've worked hard all weekend on this but I'm not sure
why I can't get this final step to work--it seems like everything else is in place.
