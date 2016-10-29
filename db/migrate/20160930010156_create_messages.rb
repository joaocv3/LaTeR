class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :content, null: false
      t.string :receiver_email, null: false
      t.string :receiver_name, null: false
      t.string :sender_name 
      t.date :send_at, null: false
      t.datetime :created_at, null: false

    end
  end
end
