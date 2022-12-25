# frozen_string_literal: true

print 'Enter number: '
number = gets.chomp.to_i

case number
when (0..50)
  puts 'number is between 0 and 50'
when (51..100)
  puts 'number is between 51 and 100'
else
  puts 'number is more than 100'
end
