
class Calculator 

  def self.multiply(list)

    if list.empty?
      return 0
    else
      return list.reduce(:*)
    end

    # total = 0

    # list.each do |elem|
    #   total *= elem
    # end
  end

end

