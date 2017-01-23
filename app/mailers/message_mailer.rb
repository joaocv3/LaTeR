class MessageMailer < ApplicationMailer
  layout "mailer"
  def scheduled_message(message)
    @message = message
    mail(to: message.email)
  end
end
