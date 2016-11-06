Given(/^I am at the homepage$/) do
  visit('/') 
end

When(/^I fill the e\-mail "([^"]*)"$/) do |arg1|
  fill_in('message_email', :with => arg1) 
end

When(/^I fill the name "([^"]*)"$/) do |arg1|
  fill_in('message_name', :with => arg1) 
end

When(/^I enter a date and time "([^"]*)" to send the message$/) do |arg1|
  fill_in('message_send_on', :with => arg1)
end

When(/^I fill the message content with "([^"]*)"$/) do |arg1|
  fill_in('message_content', :with => arg1)
end

When(/^I send the form$/) do
  find('input[name="commit"]').click
end

Then(/^I should receive a confirmation message$/) do
  find("div#msg", text: "Message will be sent on #{Message.last.send_on.to_s}")
end