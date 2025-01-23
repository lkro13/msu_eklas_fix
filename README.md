# msu eklas fix
fixing the stupid problem with eklas attendance 

## why ?????
it's getting annoying to have to refresh the page and resubmit it just to confirm it have submitted

it have annoyed me so much for it to become a add-on that fixed the problem

## Why firefox ?

Well only firefox support add-on on mobile
chrome and other browser doesn't have plus i only tested on firefox

There is a signed add-on ready to install on the release page

to install you need to enable debug menu first by

the three dotes > about firefox > tap the logo 5 times 
and you will now have the option to install add on from file

## how ?

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
