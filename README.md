# msu eklas fix
fixing the stupid problem with eklas attendance 

Look at [installation](#installation) for your specific browser

## Edit 21/05/2025
Since edge on mobile support extensions now I have added a userscript version (see [userscript section](#userscript) below)

Also I do realize most people don't use firefox so a "app" might be coming soon

## Edit 10/06/2025
added a survey filler 

## why ?????
it's getting annoying to have to refresh the page and resubmit it just to confirm it have submitted

it have annoyed me so much for it to become a add-on that fixed the problem

## Why firefox ?

~Well only firefox support add-on on mobile~

Firefox on mobile allows custom addons to be loaded

_I have tried list it on mozilla addon page but got rejected lol_

chrome and other browser doesn't have plus i only tested on firefox

# Installation

There is a signed add-on ready to install on the release page

to install you need to enable debug menu first by

the three dotes > about firefox > tap the logo 5 times 
and you will now have the option to install add on from file

## Userscript

You have to have extention such as tampermonkey installed

Copy the following link

    https://raw.githubusercontent.com/lkro13/msu_eklas_fix/refs/heads/main/userscript.js

and open tampermonkey dashboard > settings > install from url

## Custom / unpack addon

For browser **that** supports custom addons, download the entire repo and extract to a folder

then (in chrome desktop at least) go to manage extention > developer mode on > load unpack

# how ?

after looking at the console the problem is very easy to solve

im surprise no one have fixed it yet

the problem lies at line 501

    if(igt_kok == 'yes')
the "igt_kok" is a undefined variable which leads to error and not show the success message 

so what my code does it define the variable, yeah **that** simple.

    var igt_kok = "yes";
	function ingat_ingat_lo(lorrr){
	    igt_kok = lorrr
    };
this is my code, and the function is just for the save password button

this is the actual code in the inject.js file

    var  s  =  document.createElement('script');
    
    s.textContent  =  'var igt_kok = "yes";function ingat_ingat_lo(lorrr){igt_kok = lorrr};';
    
    (document.head  ||  document.documentElement).appendChild(s);

all this is just to inject the js into the page

## Update

I just tested it (23/1/2025) and it worked so yeah 
yay
