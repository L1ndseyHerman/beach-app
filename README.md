# Beach App -- STILL IN PROGRESS!!

## Test Users

Chances are, if you're reading my ReadMe, it's because you went to
https://l1ndseyherman.github.io/beach-app
, saw a login screen, and are wondering "Who the heck do I log in as?!"
Here are the test users:

Username: ScubaDiver

Password: 0

Username: Swimmer

Password: 1

Username: Mermaid

Password: 2

They are hardcoded in App.tsx if you're curious,
they're the "fakeUsers" towards the top of the component.

## My Older Websites

1: https://l1ndseyherman.github.io/

Can be found in this repo: https://github.com/L1ndseyHerman/L1ndseyHerman.github.io

Purpose: I was taking a web design class in college that involved HTML, CSS, and JavaScript. This website was the final project that I presented to the class. That's why I kind of made it look like clouds floating on a sunny blue sky, but also kinda like PowerPoint slides since I knew I'd be presenting it to my classmates.

2: https://l1ndseyherman.github.io/GithubPages2_Shield_Magic_Sword/

Technically it's in this repo, but only because I messed up the original repo it was in. There are way more than 2 commits: https://github.com/L1ndseyHerman/GithubPages2_Shield_Magic_Sword

Purpose: I was having trouble finding a single entry-level software engineering job that wanted vanilla JavaScript. Everyone wanted Angular, React, or Vue. So I learned React on udemy.com and made this SPA PWA app, hosted via GitHubPages.

3: https://l1ndseyherman.github.io/my-app/#/

Can be found in this repo: https://github.com/L1ndseyHerman/my-app

Purpose: I wanted to redo my personal website to be in React. In addition, I had improved my CSS skills as well and wanted a second chance to improve some bad CSS. For example, if you go to the Hobbies page on my original website and select "Music", you will see some light blue text that is difficult to read, and making it even more difficult is the music note image background behind it. I improved this screen on the redo by making the text black and making the music note images be a border instead of a background. In addition, this app uses TypeScript, react-router, and GitHubPages.

## Purpose of THIS App

This app is meant to show what I learned while working at ShiftKey. My older websites are all just
informational (no login required) and have unique CSS since I think it's fun to get creative
with the way a website looks. In contrast, this website has a login and more typical-looking CSS
to show that I know how to make a more normal looking/acting website as well.

## Things in this App that aren't in my Older Ones because I Learned them while Working at ShiftKey

1. Role-Based Access Control. This is the big thing that I wanted to highlight in this app.
   At ShiftKey, there were multiple roles in our ScheduleX app. The role a user had determined
   what pages a user was allowed to see. For example, a nurse, who was just an Employee,
   could only see their own schedule, while a Scheduler could see all of the schedules of the
   nurses that they managed. Likewise, in this app, there are 3 roles. The Swimmer and the Mermaid roles
   are tied for the amount of pages they can see. Swimmers can see the /beach and the /shallow_ocean,
   but not the /deep_ocean, because they'd drown before they could reach it. Likewise, the Mermaids
   can see the /deep_ocean and the /shallow_ocean, but not the /beach because they don't have legs
   to walk on the beach with. Kinda corny, I know, but hey, if I'm not getting paid to write this app,
   I'd like to have fun with it. Then the DeepSeaDiver role has the greatest amount of permissions. They
   have access to all 3 pages, since with the help of an oxygen tank, they can reach the /deep_ocean.
2. MUI components. These were also a big deal at ShiftKey, we used them all over the place along with
   their createStyles()/makeStyles() style of CSS. More specifically, we used MUI4
   (versions in the 4.something.something range) in most of our apps, with the exception
   of one that was on MUI5. The current version of MUI is 9 so I wanted to highlight that I have
   legacy experience to potential employers by using MUI4 in this app.
3. React 16/17. This isn't new, and in fact this website is on React 18, but at ShiftKey
   our apps were on 16/17 depending on the app. I had to do 18 here, because...
4. Jest. So I used Jest for unit/component testing at ShiftKey, but because create-react-app is
   deprecated and I can no longer make apps that way, I had to do it a different way with Vite.
   Because of this, the tests in this app are Vitest not Jest. But the syntax is almost identical to Jest.
   Setting up the app with Vite also meant the React version needed to be 18 or newer.
5. Cypress. We used Cypress for integration/end-to-end tests at ShiftKey. I'm using it here too.
6. Internationalization via react-intl. We had some placeholder Spanish internationalization
   at ShiftKey since we were thinking about maybe adding Spanish to the app someday.
   My internationalization here isn't set up nearly as well as there. Senior devs found some way to
   have Spanish internationalization there but disabled, but easy to enable in the future.
   Whereas here, I think it's enabled but I'm not sure... internationalization is
   something I worked with a bit but I'm not super-knowledgable about it.
7. ESLint. Actually this might be in my other apps too, I forget. We used it at ShiftKey.
   Also used Prettier at ShiftKey.
8. Yarn. My previous apps used npm. At ShiftKey, we used yarn. So this one uses yarn.

Here are some versions I'm using for that since they aren't in the package.json:

NVM: 1.2.2

Node: 22.13.0 (currently, have others on my NVM as well)

NPM: 10.9.2

Yarn: 1.22.22 (it uses that corepack thing if that matters?)

## Tenative Things I Might Add to this App if I have Time

## How to Run this App Locally if you Want to

I've been writing this app in VS Code, which was our IDE of choice at ShiftKey for frontend apps.
We used Azure (ADO) at ShiftKey where there's a "Clone in VS Code" button. Looks like there's
not exactly that on GitHub, but if you click on my beach-app repo, then click on the green "Code"
button, there's a "Download ZIP". You can download it, extract all the files, then open up
VS Code, go to "File" in the top right, and choose the folder with the extracted files to open.

After that, you'll want to go to the "View" at the top of VS Code and open a Terminal.
Once the terminal is booted up, type "yarn install". That'll install the node_modules.

After they install, you might want to close out of VS Code and reopen it. I've had problems in the past
both in this app and ones at ShiftKey where if I open a component, it might have red squigglies
and say things aren't installed. They are. Closing out of VS Code and reopening it seems to
get it to finally notice they've been installed.

After that, you're ready to run the app! To run it, type "yarn dev".
Once it's booted up, it should let you know it's available at
http://localhost:5173/beach-app
You can then go there in your favorite web browser.

If you want to try out the Vitest tests, shut the app down (Ctrl + C), then "yarn test".
They just kinda run in the terminal and let you know when they pass or fail.

For Cypress tests, you'll want to start off by typing "yarn dev" in 1 terminal.
Then, once the app is running, open a second terminal and type "npx cypress open".
That'll open a Cypress test window. You'll want to choose the E2E Testing since
I'm using Vitest for Component Testing not Cypress. Then you'll have to
choose a browser, then manually run each test.
Oh btw, I was having some issues where if I tried to run a test more than once in a certain browser,
such as Chrome, it would get an error. So I've just been running them all in
Electron, Cypress's own browser since it doesn't have that issue. I should google why
it keeps happening for the other browsers tho.

I'd like for this to be my app, so please don't push changes to it,
but the way I've been pushing changes is standard Git committing stuff. There's a git icon
on the left side of VS Code, and I just push the "+" button for all changes, click the commit button,
and then the Sync. Easy!

That just pushes it to the master branch tho, it doesn't deploy it. For that, I type "yarn build"
in the terminal, wait until it's done, then type "yarn deploy" That's what sends it to
the gh-pages branch, where after a few minutes, the changes go live at
https://l1ndseyherman.github.io/beach-app

## Remove Me!

Note to self, don't forget to only use colors on here!
https://htmlcolorcodes.com/color-chart/web-safe-color-chart/
