# Bitlion Blog builder 

This is the Basic starter for a next.js contentful blog 

## Starting a new project
1. Clone the repo down to your local 
2. Change the name a things in the package.json file 
3. cd into the directory && run `npm i` to install all the needed dependencies
4. make a `.env.local` file in the root directory save contentful `space id` and the `access_key`
5. on the github website make a new repo giving it a name 
6. run `git init`, `git add .`, `git commit -m initial commit`, `git remote add origin  <REMOTE_URL>`, `git push -u origin main`

## Deploying
1. when deploying to netlify make the netlify.toml file is located in the root file and contains 
```
[build]
  command = "npm run build && npm run export"
  publish = "out"
```
2. Make sure you have your environmental variables listed 
```
NEXT_PUBLIC_CONTENTFUL_SPACE_ID = **********
NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY = ***********
```
3. Make a `Build hook` to connect the netlify project to the contentful site. Copy the URL and on the contentful site find the correct space. travel to the settings tab and travel to the webhooks view. make a netlify webhook paste the URL from netlify save.

4. trigger a deploy on the netlify site.