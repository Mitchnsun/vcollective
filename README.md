 _   _           _   _       _          _____       _ _           _   _           
| | | |         | | (_)     (_)        /  __ \     | | |         | | (_)          
| | | | ___  ___| |_ _  __ _ _ _ __ ___| /  \/ ___ | | | ___  ___| |_ ___   _____ 
| | | |/ _ \/ __| __| |/ _` | | '__/ _ \ |    / _ \| | |/ _ \/ __| __| \ \ / / _ \
\ \_/ /  __/\__ \ |_| | (_| | | | |  __/ \__/\ (_) | | |  __/ (__| |_| |\ V /  __/
 \___/ \___||___/\__|_|\__,_|_|_|  \___|\____/\___/|_|_|\___|\___|\__|_| \_/ \___|
                                                                                  
                                                                                  
 _____         _           _           _   _____         _                        
|_   _|       | |         (_)         | | |_   _|       | |                       
  | | ___  ___| |__  _ __  _  ___ __ _| |   | | ___  ___| |_                      
  | |/ _ \/ __| '_ \| '_ \| |/ __/ _` | |   | |/ _ \/ __| __|                     
  | |  __/ (__| | | | | | | | (_| (_| | |   | |  __/\__ \ |_                      
  \_/\___|\___|_| |_|_| |_|_|\___\__,_|_|   \_/\___||___/\__|                     
                                                                                  
                                                                                  
______               _   _____          _                                         
|  ___|             | | |  ___|        | |                                        
| |_ _ __ ___  _ __ | |_| |__ _ __   __| |                                        
|  _| '__/ _ \| '_ \| __|  __| '_ \ / _` |                                        
| | | | | (_) | | | | |_| |__| | | | (_| |                                        
\_| |_|  \___/|_| |_|\__\____/_| |_|\__,_|                                        
                                                                                  

## I - Development

Given the products.json that is on this project which represents a response from a getProducts() API call
Please provide a solution for each questions that follows with the stack/framework/language of your choice
Each question is independent from the others.

Comments are appreciated ;-)


1. User is coming from an Off-White promotion offer link, display only the Off-White's products with a reduced price of 10%.

2. Louis Vuitton doesn't want us to display the name of their brand on our website, could you reverse the name of the brand for each LV product to obfuscate their name ?

3. I'm a user from UK and I want to see product between 1500€ and 500€, ordered from the cheaper to the most expensive that are shippable to my country.

4. We want to display : how many days/month/year since the products has been deposited on the website ?

## II - Questions

There are no wrong answers, only good opportunities to learn something new.

1. What metrics are essential in term of Speed ?
In frontend, we can use the speed-index indicator to have an idea of how fast the page becomes visible.

2. Can you name ways to increase speed (perceived or actual load time) ?
Speed-index could be improved to load only essential parts first and step by step load more detailed parts.
We can check the evolution of the bundle size. If its growth is exponential at each features delivery, not a good sign!
Add skeletons to components can help the user to wait.

3. Could you tell me what are Observables and how they work ?
Observables help manage async code such as Promise. An Observable will wait the return of code before starting the next sequence.

4. You have a bug to fix, you find the file(s) where the bug occurs, the code is a mess, what do you do ?
First instinct, console.log to look what it comes in and out the code.
If I can add breakpoint to watch the code runs step by step, it will be easier.

5. What represent FrontEnd to you ?
FrontEnd is what the user has on his computer or mobile. So the user should be the top priority for the FrontEnd.

6. What was the last technical challenge you faced and how you did you handle it ?
My last challenge was the over-downloaded datas from a firebase database. We exploded the quotas, so we became more strict of what look for in datas. We tried to extract smaller node, sometimes by lazyness the API only pull up the higher node.

7. What is the next language/framework/stack you want to learn this year and why ?
I would like to learn React Native to put some of my ideas in a mobile app

## III - Extra Time

In case you want to have fun 

1. Could you implement the function resolveSudoku() ?