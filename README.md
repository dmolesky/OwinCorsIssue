OwinCorsIssue
=============

Angular JS CORS Owin 

I was attempting to implement the build in Web API Owin external authentication with a client on a different host. This requires my Web API
to enable CORS, which is giving me issues with the external auth redirect. The redirect request is returning a No Access-Control-Allow-Origin
error. I think this is due to a Origin header with a null value being on the redirect. I don't know why this is there, or how to change it.
Also that might not even be the issue. Any help would be appreciated.


Below is a explanation of the project structure:

The client folder contains a simple angular page that loads in the external providers from the web api project, 
then uses the URL from that call when the button is clicked. You should see the same issue I am. The Web API project is the template from microsoft, 
I just added my facebook appid/secret (swap with yours), commented out the ValidateClientRedirectUrl so that any redirect is accepted, 
and added OwinCors.

You will need a way to host the angular page, I use node.js. I assume you can use anything. 
The port should be pointed to the API project, but check to make sure. 

