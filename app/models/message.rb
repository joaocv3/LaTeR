class Message < ActiveRecord::Base
  validates :receiver_email, :receiver_name, :send_at, :created_at, :content, presence: true
end
