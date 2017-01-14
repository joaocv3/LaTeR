class WelcomeController < ApplicationController
  def index
    @message = Message.new
  end
  
  def create
    @message = Message.new(message_params)
    
    if @message.save
      flash[:success] = "Message will be sent on #{params[:message]['send_on']}"
    else
      flash[:alert] = @message.errors.messages
    end
    redirect_to action: "index"  
  end
  
  private
  
  def message_params
    params.require(:message).permit(:content, :email, :name, :send_on)
  end
end
