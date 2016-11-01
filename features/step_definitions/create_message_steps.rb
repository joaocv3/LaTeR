Given(/^I am at the homepage$/) do
  visit('/') 
end

When(/^I fill the receiver's e\-mail "([^"]*)"$/) do |arg1|
  fill_in('message_receiver_email', :with => arg1) 
end

When(/^I fill the receiver's name "([^"]*)"$/) do |arg1|
  fill_in('message_receiver_name', :with => arg1) 
end

When(/^I fill the sender's name "([^"]*)"$/) do |arg1|
  fill_in('message_sender_name', :with => arg1) 
end

When(/^I enter a date and time "([^"]*)" to send the message$/) do |arg1|
  fill_in('message_send_at', :with => arg1)
end

When(/^I fill the message content with "([^"]*)"$/) do |arg1|
  fill_in('message_content', :with => arg1)
end

When(/^I send the form$/) do
  find('input[name="commit"]').click
end

Then(/^I should receive a confirmation message$/) do
  find("div#msg", text: "Message will be sent on #{Message.last.send_at.to_s}")
end