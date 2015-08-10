
require 'pry'

class Phone

  def initialize(num)
    @num = num
  end

  def number

    # @num.delete("()-").gsub(' ', '')
    clean = @num.gsub(' ', '').gsub(/[\(\)\-\.]/, '')

    if clean.length == 11 && clean[0] == '1'
      return clean[1..-1]
    elsif clean.length == 11
      return "0000000000"
    elsif clean.length == 9
      return "0000000000"
    else
      return clean
    end

  end

  def area_code

    code = number
    return code[0..2]

  end

  def to_s

    string = number
    return "(#{area_code}) #{string[3..5]}-#{string[6..-1]}"

  end



end

