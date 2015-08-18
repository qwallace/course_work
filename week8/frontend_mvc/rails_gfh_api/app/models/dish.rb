class Dish < ActiveRecord::Base

  has_many :stars

  def star_count
    stars.count
    # or
    # dish_stars = Star.where dish_id: self.id
    # dish_stars.count
  end

end
