# Site Rank: Desktop Edition

#### Project Overview

Back in September, 2017 I started with a company and one of my first tasks was to manually copy 1800 company names, urls and phone numbers from a specific source as leads to build a sales territory (unfortunately no user-select, so no copy-paste). The second step was to evaluate the value of each potential lead based on their website. The process went something like this:

* Copy 30 urls from my spreadsheet
* Paste into Bulk URL Opener Chrome Extension
* Scroll around, decide validity of lead
* Switch applications to Excel, mark down lead as High, Medium, or Low value lead
* Switch back to Chrome, close current tab
* Repeat for the next 1800 websites, 30 at a time

After a day of doing this, I was pretty mentally drained and knew if there wasn't a better way out there, I had to build one for my own sanity.

Initially, I tried to do this in the browser but a lot of sites won't load into an <iframe> tag. I had played around with Electron a bit before this project, but got some real experience working with Electon's APIs here.
  
Essentially, this tool allowed a list of urls to be pasted into the state, and would load the sites automatically after ranking with one of the three buttons indicating "High", "Medium", or "Low".

At the end of the site list, the user can export the list with the rankings.

My colleagues and I went from rating around 30 sites per hour to around 100 per hour. Without the fatigue of switching back and forth between Chrome and Excel, and the limit of only reasonably being able to open 30 tabs at a time, the time spent administering this process was automated and made into a single click per site.

#### Tools Used

Electron
React
