# Github Actions

Github action is a cicd tool provided by GitHub to integrate with the github repositories and allows us to run the code against test cases for each of the commits automatically and provides us with a lot of customizations. Also helps us to integrate with code quality tools.
But with great customizations comes a lot of resposibility of manging the security of the repository.

## Best Practices

1. Instead of hardcoding passwords, make use of github secrets. ${{ secrets.name }} like the ip of the ec2 instance or github token.

2. Using Actions whenever possible and avoiding the use of 3rd party actions.

3. Blocking the usage of uncertified actions. Use official or certified actions. If has to used multiple times can also consider creating the action.

```
Consider this threat scenario: 
you are using a third-party action that runs a linter on your code to check for formatting issues. Rather than install, configure, and run a linter yourself, you decide to use an action from the GitHub Actions Marketplace that does what you need.
```

4. Using Self Hosted runners in private repositories(Saves not only minutes but also provides additional security) and GitHub runners in public ones. (These can prove to be a security threat when used on public repositories as the secrets on them are stored in an encoded format.)

5. Limiting the scope of workflow token.
By default when an action is called a github token is passed with it with the default permissions, which more often than not are more than needed for the workflow. This can be used as an attack vector by the attacker to either modify or get access to our code base. 

```
permissions:
  contents: read
  pull-requests: write
```

These can be defined at the job level and permissions for them given as needed.

6. Pinning actions to sha of a particular commit this will reduce the chances of an attacker changing the version trying to run malicious code.

7. Concurrency strategy to stop intermediate workflows when a newer push is made.

When multiple push to the repository are made actions should logically only run for the newest commit.

8. Further reduce time in execution by using caching if installing any dependency.
Instead of installing inside the docker container we can reduce the execution time using the caching possibilities in the github actions repertoire.

9. Making use of matrix strategy to break the mutually independent parts of the build into smaller jobs this will reduce the time taken as it will execute all those jobs simultaneously. This can also be utilized when the code needs to be checked on several different platforms.

10. Using environments in github 

11. Make use of artifacts when we need to pass files between jobs. (actions/upload-artifacts, actions/download-artifacts)