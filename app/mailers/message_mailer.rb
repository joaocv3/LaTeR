class MessageMailer < ApplicationMailer
  layout "mailer"
  def scheduled_message(messsage)
    @message = message
    mail(to: 'ltrmailer@gmail.com')
  end
end
