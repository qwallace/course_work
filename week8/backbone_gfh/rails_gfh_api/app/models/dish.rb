class Dish < ActiveRecord::Base

  has_many :stars

  before_validation :set_image_url

  validates :image_url, presence: true

  def star_count
    stars.count
    # or
    # dish_stars = Star.where dish_id: self.id
    # dish_stars.count
  end

  def set_image_url
    # if self.image_url.nil? || self.image_url.empty? // now below
    if self.image_url.blank?
      self.image_url = 'http://localhost:3000/dish_default.png'
    end
  end

end
