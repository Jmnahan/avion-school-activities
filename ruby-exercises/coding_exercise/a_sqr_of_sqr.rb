# frozen_string_literal: true

print 'Number: '
gets.chomp.to_i

def perfect_square(num)
  (0..num).each do |ctr|
    return true if (ctr * ctr) == x
  end
end
