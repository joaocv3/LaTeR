class Message < ActiveRecord::Base
  validates :email,
            :name,
            :send_on,
            :content, presence: true
end
