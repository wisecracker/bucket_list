class Destination < ActiveRecord::Base
  attr_accessible :name

  has_many :todo_items

end
