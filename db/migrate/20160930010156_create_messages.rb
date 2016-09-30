class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :content
      t.string :receiver_email
      t.string :receiver_name
      t.string :sender_name
      t.datetime :send_at

      t.timestamps null: false
    end
  end
end
