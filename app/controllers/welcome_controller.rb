class WelcomeController < ApplicationController
  def index
    @message = Message.new
  end
  
  def create
    @message = Message.new(message_params)
    
    if @message.save
      flash[:alert] = "Message will be sent on #{params[:message]['send_at']}"
    else
      flash[:alert] = @message.errors.messages
    end
    redirect_to action: "index"  
  end
  
  private
  
  def message_params
    params.require(:message).permit(:content, :receiver_email, :receiver_name, :sender_name, :send_at)
  end
end
