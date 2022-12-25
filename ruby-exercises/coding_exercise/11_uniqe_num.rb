# frozen_string_literal: true

print 'Enter numbers: '
arr = gets.chomp.split(' ').map(&:to_f)

def find_uniq(arr)
  arr.each_cons(2) { |x, y| return y if y != x }
end

puts find_uniq(arr)
