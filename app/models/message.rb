class Message < ActiveRecord::Base
  validates :receiver_email,
            :receiver_name,
            :send_at,
            :content, presence: true
end
