class User < ActiveRecord::Base
  attr_accessible :photo_url, :username
end
