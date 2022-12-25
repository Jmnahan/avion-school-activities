# frozen_string_literal: true

print 'Enter numbers: '
arr = gets.chomp.split(' ').map(&:to_f)

min = nil
arr.each do |i|
  min = i if min.nil? || i < min
end

puts min
