namespace :mail do
  desc "TODO"
  task :fetch_dates => :environment do
    puts "A"
  end
        
  desc "Test Mailer"
  task :send_email => :environment do
    MessageMailer.scheduled_message("Heroku Test").deliver_now
  end
end