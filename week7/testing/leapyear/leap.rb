
class LeapYear

  def self.leap_year?(year)

    # if year % 4 != 0
    #   return 'No'
    # elsif year % 100 != 0
    #   return 'Yes'
    # elsif year % 400 != 0
    #   return 'No'
    # else
    #   return 'Yes'
    # end

    # Alternative 

    return false if year % 4 != 0
    return false if year % 100 == 0 && year % 400 != 0
    true

  end

end