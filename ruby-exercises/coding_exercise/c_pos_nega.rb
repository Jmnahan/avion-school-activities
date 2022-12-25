# frozen_string_literal: true

print 'Enter numbers: '
arr = gets.chomp.split(' ').map(&:to_f)

total = arr.partition { |num| num > 0 }.map { :sum }
puts total.inspect
