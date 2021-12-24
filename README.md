## ⚠️ Warning

Any content produced by Solana, or developer resources that Solana provides, are for educational and inspiration purposes only. Solana does not encourage, induce or sanction the deployment of any such applications in violation of applicable laws or regulations.

## Deployment

App is using to enviroment variables that can be set before deployment:

- `SWAP_HOST_FEE_ADDRESS` used to distribute fees to host of the application

To inject varibles to the app, set the SWAP_HOST_FEE_ADDRESS environment variable to the addresses of your SOL account.

You may want to put these in local environment files (e.g. .env.development.local, .env.production.local). See the documentation on environment variables for more information.

NOTE: remember to re-build your app before deploying for your referral addresses to be reflected.

## Devlopment

###run -

set  SWAP_HOST_FEE_ADDRESS="your wallet address"

npm install 

npm run build 

serve -s  build (first make sure to have serve install for that you can run -  npm install -g serve )


