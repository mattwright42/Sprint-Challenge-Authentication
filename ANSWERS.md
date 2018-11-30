<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

Sessions help us persist data across requests. For our purposes, sessions can be used to persist authentication so that the user doesn't have to re-enter their username and password every time they make a request.

2. What does bcrypt do to help us store passwords in a secure manner.

bcrypt provides hashing, allows us to implement salting manually and automatically, and provides for hasing rounds that are accumulative.

3. What does bcrypt do to slow down attackers?

Because the information is being hashed multiple times, an attacker would need much more information (the hash, the alogrithim used, and the amount of rounds used to generate the hash) in order to be successful.

4. What are the three parts of the JSON Web Token?

Header - contains the algorithim with the token type.

Payload - contains the claims (or permissions for the user), data that should be stored in the token.

Signature - the signature encodes the header and payload together, as well as a secret.
