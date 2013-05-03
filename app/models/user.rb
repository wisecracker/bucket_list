class User < ActiveRecord::Base
  attr_accessible :photo_url, :username

  has_many :liked_items, :class_name => "TodoItem"
  has_many :likes
  has_many :owned_todo_items, :through => :likes,  :class_name => "TodoItem"


end
