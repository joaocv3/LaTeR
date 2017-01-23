namespace :mail do
  desc "Fetch all dates, send if date matches"
  task :fetch_dates => :environment do
    messages = Message.where(send_on: Date.today)
    messages.each do |message|
      MessageMailer.scheduled_message(message).deliver_now
    end    
  end
end