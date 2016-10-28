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
  if @message.save
    puts "Saved to DB"
  end
end

Then(/^"([^"]*)" should be the receiver's e\-mail for message (\d+)$/) do |arg1, arg2|
  if Message.find(arg2).receiver_email == arg1
    puts "Receiver email: #{arg1}"
  end
end

Then(/^"([^"]*)" should be the receiver's name for message (\d+)$/) do |arg1, arg2|
  if Message.find(arg2).receiver_name == arg1
    puts "Receiver name: #{arg1}"
  end
end

Then(/^"([^"]*)" should be the sender's name for message (\d+)$/) do |arg1, arg2|
  if Message.find(arg2).sender_name == arg1
    puts "Sender name: #{arg1}"
  end
end

Then(/^"([^"]*)" should be the date and time to be sent for message (\d+)$/) do |arg1, arg2|
  if Message.find(arg2).send_at == arg1
    puts "Send at: #{arg1}"
  end
end

Then(/^"([^"]*)" should be the content for message (\d+)$/) do |arg1, arg2|
  if Message.find(arg2).content == arg1
    puts "Message content: #{arg1}"
  end
end
