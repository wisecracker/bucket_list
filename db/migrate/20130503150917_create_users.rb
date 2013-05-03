class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
      t.string :photo_url

      t.timestamps
    end
  end
end
