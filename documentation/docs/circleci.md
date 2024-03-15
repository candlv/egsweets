# Circleci 
circle ci is a plateform that automate deployment process by adding config.yaml file inside folder called .circleci at your project root folder.

## what is goes inside config.yaml file
1. version `define circleci version used`
2. orbs 'for setting up tools on circleci environment'
3. jobs `to define a processes' steps that need to run command or set of commands`
   - Each job should have executor or more that will commands run on
   - executor can be docker image and/or virtual machine: ubuntu, windows or mac o.s 
5. workflows `to organize and add condition for running jobs`
   - what to run means jobs order
   - define job require to run another
   - add conditions to run the pipeline. e.g when pushing to mainline only
   - and more

## pipeline phases
## CI: phase
This phase make sure the code well formated, follow standard, and bug free by linting, formating, and testing. then merge them with the codebase.
## CD: phase
In simple words This phase  responsabe for deliver the ready code and make it availabe for users to consume.
## pipeline process
When you push to the branche that circle ci listen to. the following steps will happens
1. circleci will spin up the environment
2. fetch code from the github repo connected with 
3. use specified executor to run jobas as defined in workflows section if ther is one or
4. run jobs as ordered in your yaml file
5. when all steps are green that means your pipeline ran successfully and you have deliverd new application version.