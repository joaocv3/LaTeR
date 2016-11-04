class MessageMailer < ApplicationMailer
  layout "mailer"
  def scheduled_message(message)
    @message = message
    mail(to: message.receiver_email)
  end
end
