# frozen_string_literal: true

print 'Enter word: '
str = gets.chomp

def consonant_value(str)
str
  .scan(/([^aeiou]+)/)
  .map { |a| a.first.chars.reduce(0) { |s, c| s + c.ord - 96 } }
  .max
end

puts consonant_value(str)
