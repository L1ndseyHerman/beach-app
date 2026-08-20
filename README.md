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
   of one app that was on MUI5. The current version of MUI is 9 so I wanted to highlight that I have
   legacy experience to potential employers by using MUI4 in this app.
3. React 16/17. This isn't new, and in fact this website is on React 18, but at ShiftKey
   our apps were on 16/17 depending on the app. I had to use 18 here tho, because...
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

## Things that aren't in this App

1. Auth0. We used Auth0 at ShiftKey to store user's emails, passwords, and other
   login related things. It also created the cookies that stored these user's info
   so that we didn't need to make our own. But Auth0 costs money so I won't be using it here.
   It's also rather complicated to set up and I wasn't the person who set it up for ShiftKey.
   I just did things like editing specific user's account info on there if they were
   having issues, and editing the login page HTML/CSS since that was also on Auth0.
2. LaunchDarkly. We used feature flags on LaunchDarkly to show/hide features/components. But once again,
   LaunchDarkly costs $ so I won't be using it here. I had thoughts about how I could
   use it, like maybe I could make a fourth /sea_monster page that only shows up
   if a flag returns true... but then ppl looking at my web page could only see one way
   or the other since only I would have access to my LaunchDarkly account to change the flag.
   Not worth it.
3. New Relic/Grafana. We used New Relic for telemetry at ShiftKey. A few months before I left,
   we switched to Grafana. They both cost $ and this app is so small that there's barely
   anything to log anyways. Not worth it.
4. Cursor/Claude Code (AI). I used Cursor at ShiftKey briefly, then they switched to Claude Code.
   Claude has a free version but it doesn't do code, code costs $20 per month. I know AI is all the rage,
   and would consider getting Claude for future projects. I wanted this one to be a test of my
   knowledge (and knowledge of how to google questions) tho, not Claude's.
   A lot of companies use different things, like I see a lot of
   job postings that want Tailwind CSS instead of MUI and Playwright instead of Cypress,
   so chances are I'll end up using those at my next job. I wanted to make this app as similar
   to how I wrote code at ShiftKey as I could, so that, if 5 years from now I get laid off again,
   and I'm wondering "Aw shit, how do I write a Cypress test? I've completely forgotten!" Then
   I can look back at this code and remember.
5. Redis. We used a Redis cache for some things at ShiftKey. I won't be using it here, I
   barely understood it.

## Tenative Things I Might Add to this App if I have Time

1. My own cookie. Just because I'm not using Auth0's cookies doesn't mean the app
   has to be cookie-less. I remember making cookies in school before and I don't think it was
   too difficult. The thing I'm worried about is mocking the cookie in the Cypress tests.
   For some reason, we didn't at ShiftKey, like the Cypress tests would really reach out to
   Auth0 each time the Cypress test users needed to log in! That seems like a bad call,
   especially since Auth0 has rate limits where they charge you more $ if too many users
   reach out to Auth0 at a time. I'm assuming the tests were this way because Auth0 cookies
   are crazy-difficult to mock or something. I'm not sure if regular cookies are too, I still
   need to google it. It would be nice to store user info in a cookie tho. Right now, it's just
   stored in a useState(), so if you refresh the page, you get logged out lol.
   That's obviously not a typical user experience on normal websites, and I am trying to
   make this more like a normal website, so I might switch to using a cookie if there's time
   (If I finish the core parts of this website and still haven't found a job yet.)
2. Redux. We used Redux at ShiftKey to reach out to the database 1 time for a thing, then
   store it in the Redux store if we don't expect it to have changed since then. For example,
   when a user logs in, we would reach out one time for thier first and last name, then store them.
   Then, if the user went to a page that needed it, like their schedule, there it would be from the store.
   Profile? There it is again from the store. The problem is, each app had a drastically different
   Redux setup from each other app. I think one used react-redux, 1 redux-toolkit, 1 was doing
   something with react-admin, I don't even know. Since I never got good at any way in particular
   of using Redux, I probably won't use it here. Also there's no backend for this app, which is the
   main reason to use Redux. I was considering making like a "Daily Weather Report" and just have
   some random number generators randomly choose it and store it in Redux. Then it could be
   displayed on /beach, /shallow_ocean, and /deep_ocean. But idk, we'll see if there's time.
3. Web Safe CSS on the complicated MUI components. So right now the Login button's "primary" shade
   of blue isn't on the Web Safe list:

   https://htmlcolorcodes.com/color-chart/web-safe-color-chart/

   There are ways to force MUI components to use a different color. It usually involves changing their
   specific classes, like "& .Mui-Focused" or something. But sometimes there's like 20 of them that
   you need to change. The same goes for the TextFields and their shades of grey I think.
   I'm debating if I care enough to spend time doing this vs something like learning Next.js
   or Angular....

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
