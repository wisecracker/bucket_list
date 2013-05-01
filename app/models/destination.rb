class Destination < ActiveRecord::Base
  attr_accessible :name, :photo_url

  has_many :todo_items

end
