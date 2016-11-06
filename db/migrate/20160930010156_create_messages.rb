class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :content, null: false
      t.string :email, null: false
      t.string :name 
      t.date :send_on, null: false
      t.datetime :created_at, null: false

    end
  end
end
