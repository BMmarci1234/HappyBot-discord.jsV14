# HappyBot discord

![HappyBot discord](.github/images/logo.png)

**Remember this is just for you to help making a discord bot.**  
*Always wanted to create a custom discord bot, but couldn't code it?*  
**No worries!**  
Here at HappyBot discord you can have your custom discord bot in just a few steps.

--------------------

# Steps to make your own discordBot

**Step 1.** Go to [discord developer portal](https://discord.com/developers/applications)  
**Step 2.** Click on **New application**, name it, and agree to Discord Terms.  
**Step 3.** Have every option like this in the "Bot" section:  
![Options](.github/images/image1.png)  
**Step 4.** To have the best experience go enter **https://discord.com/api/oauth2/authorize?client_id=123456789012345678&permissions=8&scope=bot%20applications.commands** do not hit enter yet, go to "General Information" section, copy and paste your application id to **client_id** in the url to invite the bot to your discord server.  
**Step 5.** Download an **IDE**, I would recommend [Visual Studio code](https://code.visualstudio.com/download).  
**Step 6.** Go to **terminal** >>> **New terminal** and then write in these lines (same order):

```
npm init -y
npm install discord.js moment sequelize sqlite
```
**If you want to you can edit the code**
**If you are done, then write in these lines**
```
node syncdb.js
node deploy-commands.js
node index.js
```
**Then your discord bot should work fine**

# Make contact with the creator

to make contact with me, or tell me what commands should I write in the code, you should dm me on discord.
my name:
```
marcivagyok1
```
you should write with: 
```
HappyBot discord: 
your text+
```
