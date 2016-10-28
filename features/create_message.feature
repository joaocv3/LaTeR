Feature: Create a new message
As a guest
I want to create a new message

Scenario: Create a new message to be sent later
Given I am at the homepage 
When I fill the receiver's e-mail "johndoe@gmail.com"
And I fill the receiver's name "John Doe"
And I fill the sender's name "Myself"
And I enter a date and time "27/09/2016 21:00:00" to send the message 
And I fill the message content with "Have you been to Japan yet?" 
And I send the form
Then I should receive a confirmation message
And "johndoe@gmail.com" should be the receiver's e-mail for message 1
And "John Doe" should be the receiver's name for message 1
And "Myself" should be the sender's name for message 1
And "27/09/2016 21:00:00" should be the date and time to be sent for message 1
And "Have you been to Japan yet?" should be the content for message 1

