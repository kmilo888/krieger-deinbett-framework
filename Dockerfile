#Base image taken from:https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:10.3.0

#Create the folder where our project will be stored
RUN mkdir /krieger-deinbett-framework

#We make it our workdirectory
WORKDIR /krieger-deinbett-framework

#Let's copy the essential files that we MUST use to run our scripts.
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./.cypress-cucumber-preprocessorrc.json .
COPY ./cypress ./cypress

#Install the cypress dependencies in the work directory
RUN npm install

#Executable commands the container will use[Exec Form]
#ENTRYPOINT ["npx","cypress","run"]

#With CMD in this case, we can specify more parameters to the last entrypoint.
CMD ["npx","cypress","run"]
