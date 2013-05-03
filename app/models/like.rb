class Like < ActiveRecord::Base
  attr_accessible :todo_item_id, :user_id

  belongs_to :todo_item
  belongs_to :user

end
