class Post < ActiveRecord::Base

  belongs_to :user

  def can_delete?(user)
    # if the user is the creator of post
    user.id == self.user_id
  end

  # def can_update?(user)

  # end

end
