class CommentsController < ApplicationController

before_filter :load_comment, :only => [:show, :create, :update, :delete]

def load_comments
    @comment = Comment.find(params[:id])
  end

def index 
	@comments = Comment.all

end

def show
	
end





end
