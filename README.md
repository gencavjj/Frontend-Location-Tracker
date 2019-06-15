# Frontend-Location-Tracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9, but has been updated to version 8.0.3

You must run this command to install the modules: `npm install`.

## Local Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Deploying to Production

You need to login to the AWS console and generate API keys for your user.

```bash
# Run this command to configure AWS credentials on your system.
aws configure

# Enter in these fields:
#AWS Access Key ID [None]: (your Access key ID)
#AWS Secret Access Key [None]: (your Secret access key)
#Default region name [None]: us-east-1
#Default output format [None]: json 

# Run this command to ensure it's set up properly.
aws sts get-caller-identity
```

You credentials will be saved to: ~/.aws/credentials and ~/.aws/config

Run these commands to push the files to the production S3 bucket so they are accessible at:
http://locationtracker-prod.s3-website-us-east-1.amazonaws.com/

```bash
# Build your production files.
ng build --prod --aot

# Copy the production files to S3.
aws s3 cp ./dist/ng7-agm s3://locationtracker-prod --recursive --acl public-read
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).